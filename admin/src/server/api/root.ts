import { productsRouter } from "./routers/products";
import { shopRouter } from "./routers/shops";
import { authRouter } from "./routers/users";
import { createTRPCRouter } from "./trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
  users: authRouter,
  products: productsRouter,
  shops: shopRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
