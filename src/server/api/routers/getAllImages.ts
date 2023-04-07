import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const getAllImages = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.images.findMany({
      orderBy: {
        createdAt: "desc",
      },
      take: 50,
    });
  }),
});
