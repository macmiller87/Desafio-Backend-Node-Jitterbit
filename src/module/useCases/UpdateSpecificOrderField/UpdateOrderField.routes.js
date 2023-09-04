import { orderRepository } from "../../repository/orderRepository.js";
import { Router } from "express";

export const updateSpecificOrderFiledRoute = Router();

updateSpecificOrderFiledRoute.patch("/orderr/:orderId", async (request, response) => {

    const { orderId } = request.params;
    const { value } = request.body;

    const findOrderById = await orderRepository.findOrderByNumberOrder(orderId);

    if(!findOrderById) {
        return  response.status(404).json({ message: "OrderId Not Found !" });

    }else if(value === "") {
        return response.status(401).json({ message: "Null Data is Not Allowed, Please fill the field!" })

    }else if(typeof(value) != "number") {
        return response.status(401).json({ message: "The field, must be a number !" });

    }else {

        const updateOrderFiled = await orderRepository.updateOrderField({
            orderId,
            value
        });

        return response.status(200).json(updateOrderFiled);
    }
});