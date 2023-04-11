import { Router } from "express";
import {
  deleteCart,
  getAllCarts,
  getCart,
  updateCart,
  createCart,
} from "./cart.controller";
import { verifyToken } from "../../middleware/authRequired";

const router = Router();

router.route("/").post(verifyToken, createCart).get(getAllCarts);
router
  .route("/:cartId")
  .get(getCart)
  .patch(verifyToken, updateCart)
  .delete(verifyToken, deleteCart);

export default router;
