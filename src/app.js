import express from "express";
import cors from "cors";
import { orderRoutes } from "./routes/index.routes.js";

export const app = express();

app.use(express.json());
app.use(cors());
app.use(orderRoutes);

