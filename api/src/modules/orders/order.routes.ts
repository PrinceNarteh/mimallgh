import { Router } from "express";
import {
  createOrder,
  deleteCart,
  getAllOrders,
  getOrder,
  getOrdersByUser,
  updateOrder,
} from "./order.controller";
import { verifyToken } from "../../middleware/authRequired";

const router = Router();

router.route("/").get(getAllOrders).post(verifyToken, createOrder);
router
  .route("/:orderId")
  .get(getOrder)
  .patch(verifyToken, updateOrder)
  .delete(verifyToken, deleteCart);
router.route("/orders-by-user").get(verifyToken, getOrdersByUser);

export default router;
