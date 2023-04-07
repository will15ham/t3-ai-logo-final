import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";
import { openAI } from "~/functions/openAi";
import { generatePrompt } from "~/functions/formatPrompt";
import { uploadFileToS3 } from "~/functions/aws";

interface ReturnTypes {
  success: boolean;
  message?: string;
}

export const generateImages = createTRPCRouter({
  generateImage: protectedProcedure
    .input(
      z.object({
        userId: z.string(),
        prompt: z.string(),
        color: z.string(),
        style: z.string(),
        type: z.string(),
        shape: z.string(),
      })
    )
    .query(async ({ input, ctx }) => {
      const getUserIdResult = await ctx.prisma.user.findUnique({
        where: {
          id: input.userId,
        },
      });

      const returnValue: ReturnTypes = {
        success: false,
      };

      // Should never happen since this is a protected route
      if (!getUserIdResult) {
        return (returnValue.message = "User not found.");
      }

      const { credits } = getUserIdResult;

      if (credits < 1) {
        return (returnValue.message = "Not enough credits.");
      }

      try {
        const formattedPrompt: string = generatePrompt(
          input.prompt,
          input.color,
          input.style,
          input.type,
          input.shape
        );
        // Generate image using open AI API
        const { data } = await openAI(formattedPrompt);
        const b64ImageReponse = data.data[0]?.b64_json;
        // Upload image to S3
        if (!b64ImageReponse) {
          return (returnValue.message = "Failed to Generate Image.");
        }
        const { Location } = await uploadFileToS3(b64ImageReponse);

        if (!Location) {
          return (returnValue.message = "Failed to Save Image.");
        }

        await ctx.prisma.user.update({
          where: {
            id: input.userId,
          },
          data: {
            credits: credits - 1,
          },
        });

        await ctx.prisma.images.create({
          data: {
            url: Location,
            userId: input.userId,
            prompt: input.prompt,
          },
        });

        return (
          (returnValue.success = true),
          (returnValue.message = "Image generated.")
        );
      } catch (error) {
        return (returnValue.message = "Something went wrong.");
      }
    }),
});
