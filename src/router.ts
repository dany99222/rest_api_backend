import { handleInputErrors } from "./middleware/index";
import { Router } from "express";
import { body, param } from "express-validator";
import {
  createProduct,
  deleteProduct,
  getProducts,
  getProductsById,
  updateProduct,
  updateProductPatch,
} from "./handlers/product";

const router = Router();
/**
 * @swagger
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: The Product ID
 *           example: 1
 *         name:
 *           type: string
 *           description: The Product Name
 *           example: Monitor curvo de 40 pulgadas
 *         price:
 *           type: number
 *           description: The Product Price
 *           example: 800
 *         availability:
 *           type: boolean
 *           description: The Product Availability
 *           example: true
 */

/**
 * @swagger
 * /api/products:
 *   get:
 *     summary: Get a list of products
 *     tags:
 *       - Products
 *     description: Return a list of products
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *                type: array
 *                items:
 *                  $ref: '#/components/schemas/Product'
 */

router.get("/", getProducts);

/**
 * @swagger
 * /api/products/{id}:
 *   get:
 *     summary: Get a product by ID
 *     tags:
 *       - Products
 *     description: Return a product based on its unique ID
 *     parameters:
 *       - in: path
 *         name: id
 *         description: The ID of the product to retrieve
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Successful Response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       404:
 *         description: Product Not Found
 *       400:
 *         description: Bad Request - Invalid ID
 */

router.get(
  "/:id",
  param("id").isInt().withMessage("ID no valido"),
  handleInputErrors,
  getProductsById
);

/**
 * @swagger
 * /api/products:
 *  post:
 *    summary: Creates a new product
 *    tags:
 *      - Products
 *    description: Returns a new record in the database
 *    requestBody:
 *      requiered: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *                example: "Monitor curvo 60 Pulgadas"
 *              price:
 *                type: number
 *                example: 200
 *    responses:
 *      200:
 *        description: Successful response
 *        content:
 *          aplication/json:
 *            schema:
 *              $ref: '#/components/schemas/Product'
 *      400:
 *        description: Bad request - invalid input data
 */

router.post(
  "/",
  //Validacion en router (tambien se puede en handler)
  body("name").notEmpty().withMessage("El nombre de producto es  necesario"),
  body("price")
    .isNumeric()
    .withMessage("Valor no valido")
    .notEmpty()
    .withMessage("El nombre de producto es  necesario")
    .custom((value) => value > 0) //validacion personalizadas
    .withMessage("Precio no valido"),
  handleInputErrors,
  createProduct
);

/**
 * @swagger
 * /api/products/{id}:
 *   put:
 *     summary: Updates a product with user input
 *     tags:
 *       - Products
 *     description: Returns the updated product
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the product to update
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Monitor curvo 60 pulgadas"
 *               price:
 *                 type: number
 *                 example: 200
 *               availability:
 *                 type: boolean
 *                 example: true
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       400:
 *         description: Bad request - Invalid ID or invalid input data
 *       404:
 *         description: Product not found
 */


router.put(
  "/:id",
  //Validacion en router (tambien se puede en handler)
  param("id").isInt().withMessage("ID no valido"),
  body("name").notEmpty().withMessage("El nombre de producto es  necesario"),
  body("price")
    .isNumeric()
    .withMessage("Valor no valido")
    .notEmpty()
    .withMessage("El nombre de producto es  necesario")
    .custom((value) => value > 0) //validacion personalizadas
    .withMessage("Precio no valido"),
  body("availability")
    .isBoolean()
    .withMessage("Valor para disponibilidad no valido"),
  handleInputErrors,
  updateProduct
);


/**
 * @swagger
 * /api/products/{id}:
 *   patch:
 *     summary: Updates a product availability
 *     tags:
 *       - Products
 *     description: Returns the update de availability
 *     parameters:
 *       - in: path
 *         name: id
 *         description: The ID of the product to update
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       400:
 *         description: Bad request - Invalid ID
 *       404:
 *         description: Product not found
 */

router.patch(
  "/:id",
  param("id").isInt().withMessage("id no valido"),
  handleInputErrors,
  updateProductPatch
);


/**
 * @swagger
 * /api/products/{id}:
 *   delete:
 *     summary: Delete a products by a given ID
 *     tags:
 *       - Products
 *     description: Returns a confirmation mesage
 *     parameters:
 *       - in: path
 *         name: id
 *         description: The ID of the product to delate
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 *               value: 'Producto Eliminado'
 *       400:
 *         description: Bad request - Invalid ID
 *       404:
 *         description: Product not found
 */

router.delete(
  "/:id",
  param("id").isInt().withMessage("id no valido"),
  handleInputErrors,
  deleteProduct
);

export default router;
