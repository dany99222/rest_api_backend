import express from "express";
import colors from "colors";
import swaggerUi from "swagger-ui-express";
import swaggerSpec, { SwaggerUiOptions } from "./config/swagger";
import router from "./router";
import db from "./config/db";

// Conectar a base de datos
export async function connectDB() {
  try {
    await db.authenticate();
    db.sync();
    // console.log(colors.blue.bold('Conexcion existosa'))
  } catch (error) {
    console.log(error);
    console.log(colors.bgRed.bold("Hubo un error al conectar a la BD"));
  }
}
connectDB();

// Instancia de express
const server = express();

// Leer datos de formularios
server.use(express.json());

// Sirve para utilizar los diferentes metodos de router
server.use("/api/products", router);

// Documentacion
server.use(
  "/docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec, SwaggerUiOptions)
);

export default server;
