import { orderRepository } from "../../repository/orderRepository.js";
import { Router } from "express";

export const deleteOrderByIdRoute = Router();

deleteOrderByIdRoute.delete("/order/delete/:orderId", async (request, response) => {

    const { orderId } = request.params;

    const findOrderById = await orderRepository.findOrderById(orderId);

    if(!findOrderById) {
        return response.status(404).json({ message: "Order Not Found !" });

    }else {
        await orderRepository.deleteOrderById(findOrderById);
        return response.status(200).json({ message: "Order Delete With Sucess !"});
    }
});