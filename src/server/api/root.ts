import { createTRPCRouter } from "~/server/api/trpc";
import { getAllImages } from "./routers/getAllImages";
import { getUserImages } from "./routers/getUserImages";
import { generateImages } from "./routers/generateImage";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  getAllImages: getAllImages,
  getUserImages: getUserImages,
  generateImages: generateImages,
});

// export type definition of API
export type AppRouter = typeof appRouter;
