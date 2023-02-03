import { createTRPCRouter } from "./trpc";
import { exampleRouter } from "./routers/example";
import { authRouter } from "./routers/auth";
import { productsRouter } from "./routers/products";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  auth: authRouter,
  product: productsRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
