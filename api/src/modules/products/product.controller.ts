import { Request, Response } from "express";
import * as ProductService from "./product.service";

export const getAllProduct = async (req: Request, res: Response) => {
  try {
    const products = await ProductService.getProducts();
    return res.status(200).json(products);
  } catch (error: any) {
    return res.status(500).json(error.message);
  }
};

export const getProductById = async (req: Request, res: Response) => {
  const { productId } = req.params;
  try {
    const product = await ProductService.getProductById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product Not Found" });
    }
    res.status(200).json(product);
  } catch (error: any) {
    return res.status(500).json(error.message);
  }
};

export const getProductsByCategory = async (req: Request, res: Response) => {
  const { category } = req.params;
  try {
    const products = await ProductService.getByCategory(category);
    res.status(200).json(products);
  } catch (error: any) {
    return res.status(500).json(error.message);
  }
};

export const createProduct = async (req: Request, res: Response) => {
  const { body } = req;
  try {
    const product = await ProductService.createProduct(body);
    res.status(201).json({ product });
  } catch (error: any) {
    return res.status(500).json(error.message);
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  const { productId } = req.params;
  const { body } = req;
  try {
    const product = await ProductService.updateProduct(productId, body);
    res.status(200).json({ product });
  } catch (error: any) {
    return res.status(500).json(error.message);
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  const { productId } = req.params;
  try {
    await ProductService.deleteProduct(productId);
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error: any) {
    return res.status(500).json(error.message);
  }
};
