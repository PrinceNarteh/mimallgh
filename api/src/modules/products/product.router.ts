import { Router } from "express";
import { getAllProduct } from "./product.controller";

const router = Router();

router.route("/").get(getAllProduct);

export default router;
