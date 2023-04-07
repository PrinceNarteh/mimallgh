import { Router } from "express";
import { getAllProduct, getProductById } from "./product.controller";

const router = Router();

router.route("/").get(getAllProduct);
router.route("/:productId").get(getProductById);

export default router;
