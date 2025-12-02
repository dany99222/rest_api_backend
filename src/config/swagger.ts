import { SwaggerUiOptions } from "./../../node_modules/@types/swagger-ui-express/index.d";

//Archivo para documentar la api
import swaggerJSDoc from "swagger-jsdoc";

const option: swaggerJSDoc.Options = {
  swaggerDefinition: {
    openapi: "3.0.2",
    tags: [
      {
        name: "Productos",
        description: "API operations related to products",
      },
    ],
    info: {
      title: "REST API node.js / Express / typeScript",
      version: "1.0.0",
      description: "API Docs for Products",
    },
  },
  apis: ["./src/router.ts"],
};

const swaggerSpec = swaggerJSDoc(option);

const SwaggerUiOptions: SwaggerUiOptions = {
  customCss: `
    .topbar-wrapper svg{
      display: none !important;
    }
    .topbar-wrapper .link:after {
      content: "API Products" !important;
      font-size: 20px;
      font-weight: bold;
      color: green;
    }
  `,
  customSiteTitle: 'Documentacion RESt API Express / Typescript'
};

export default swaggerSpec;
export { SwaggerUiOptions };
