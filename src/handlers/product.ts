import { Request, Response } from "express";
import Product from "../models/Product.model";

// Traer todos los productos
export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.findAll({
      order: [["id", "DESC"]],
      attributes: { exclude: ["createdAt", "updatedAt", "availability"] },
    });

    res.json({
      data: products,
    });
  } catch (error) {
    console.log(error);
  }
};

// Traer sus productos por su id
export const getProductsById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const product = await Product.findByPk(id);
    if (!product) {
      // validar si no existe es eid
      return res.status(404).json({
        error: "Producto no encontrado",
      });
    }

    res.json({ data: product });
  } catch (error) {
    console.log(error);
  }
};

// Funcion crear productos
export const createProduct = async (req: Request, res: Response) => {
  try {
    // lo almacenamos en la base de datos
    const product = await Product.create(req.body);
    res.json({ data: product });
  } catch (error) {
    console.log(error);
  }
};

// Actualizar productoPut
export const updateProduct = async (req: Request, res: Response) => {
  // Primero vemos que el producto exista
  const { id } = req.params;
  const product = await Product.findByPk(id);
  if (!product) {
    // validar si no existe es eid
    return res.status(404).json({
      error: "Producto no encontrado",
    });
  }

  // Depues procedemos a actualizaar
  await product.update(req.body);
  await product.save();

  res.json({ data: product });
};

// Actualizar productoPatch
export const updateProductPatch = async (req: Request, res: Response) => {
  // Primero vemos que el producto exista
  const { id } = req.params;
  const product = await Product.findByPk(id);
  if (!product) {
    // validar si no existe es eid
    return res.status(404).json({
      error: "Producto no encontrado",
    });
  }

  // Depues procedemos a actualizaar
  product.availability = !product.dataValues.availability;
  await product.save();

  res.json({ data: product });
};

// Eliminar producto
export const deleteProduct = async (req: Request, res: Response) => {
  // Primero vemos que el producto exista
  const { id } = req.params;
  const product = await Product.findByPk(id);
  if (!product) {
    // validar si no existe es eid
    return res.status(404).json({
      error: "Producto no encontrado",
    });
  }
  await product.destroy();
  res.json({ data: "Producto Eliminado" });
};
