import express from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import swaggerFile from "./swagger.json" with { type: "json" };
import { orderRoutes } from "./routes/index.routes.js";


export const app = express();

app.use(express.json());
app.use(cors());
app.use(orderRoutes);

app.use("/api-doc", swaggerUi.serve, swaggerUi.setup(swaggerFile));

