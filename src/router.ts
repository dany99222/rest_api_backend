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

router.get("/", getProducts);
router.get(
  "/:id",
  param("id").isInt().withMessage("ID no valido"),
  handleInputErrors,
  getProductsById
);

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

router.patch(
  "/:id",
  param("id").isInt().withMessage("id no valido"),
  handleInputErrors,
  updateProductPatch
);

router.delete(
  "/:id",
  param("id").isInt().withMessage("id no valido"),
  handleInputErrors,
  deleteProduct
);

export default router;
