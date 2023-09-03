import { createOrderRoute } from "../module/useCases/CreateOrder/createOrder.routes.js";
import { listOrderByIdRoute } from "../module/useCases/ListSpecificOrder/ListOrderById.routes.js";
import { Router } from "express";

export const orderRoutes = Router();

orderRoutes.use(createOrderRoute);
orderRoutes.use(listOrderByIdRoute);