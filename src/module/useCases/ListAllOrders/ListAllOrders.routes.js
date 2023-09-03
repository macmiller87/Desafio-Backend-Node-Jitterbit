import { orderRepository } from "../../repository/orderRepository.js";
import { Router } from "express";

export const listAllOrdersRoute = Router();

listAllOrdersRoute.get("/orders/list", async (request, response) => {

    const listOrders = await orderRepository.listAllOrders();

    return response.status(200).json(listOrders);
});