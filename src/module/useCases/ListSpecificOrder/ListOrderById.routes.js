import { orderRepository } from "../../repository/orderRepository.js";
import { Router } from "express";

export const listOrderByIdRoute = Router();

listOrderByIdRoute.get("/order/:orderId", async (request, response) => {

    const { orderId } = request.params;

    const findOrderById = await orderRepository.findOrderById(orderId);

    if(!findOrderById) {
        return response.status(404).json({ message: "OrderId Not Found !" });

    }else {
        return response.status(200).json(findOrderById);
    }
});