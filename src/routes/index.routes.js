import { createOrderRoute } from "../module/useCases/CreateOrder/createOrder.routes.js";
import { listOrderByIdRoute } from "../module/useCases/ListSpecificOrder/ListOrderById.routes.js";
import { listAllOrdersRoute } from "../module/useCases/ListAllOrders/ListAllOrders.routes.js"
import { updateSpecificOrderFiledRoute } from "../module/useCases/UpdateSpecificOrderField/UpdateOrderField.routes.js";
import { deleteOrderByIdRoute } from "../module/useCases/DeleteSpecificOrder/DeleteOrderById.routes.js";
import { Router } from "express";

export const orderRoutes = Router();

orderRoutes.use(createOrderRoute);
orderRoutes.use(listOrderByIdRoute);
orderRoutes.use(listAllOrdersRoute);
orderRoutes.use(updateSpecificOrderFiledRoute);
orderRoutes.use(deleteOrderByIdRoute);