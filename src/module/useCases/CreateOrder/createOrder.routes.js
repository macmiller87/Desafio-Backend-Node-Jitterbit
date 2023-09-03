import { orderRepository } from "../../repository/orderRepository.js";
import { Router } from "express";

export const createOrderRoute = Router();

createOrderRoute.post("/order", async (request, response) => {

    const { orderId, value, productId, quantity, price } = request.body;

    const findOderNumber = await orderRepository.findOrderByNumberOrder(orderId);

    if(orderId === "" || value === "" || productId === "" || quantity === "" || price === "") {
        return response.status(401).json({ message: "Null Data is Not Allowed, Please fill in All Datas !" })

    }else if(typeof(value) != "number" || typeof(productId) != "number" || typeof(quantity) != "number" || typeof(price) != "number") {
        return response.status(401).json({ message: "The field's, must be a number !" });

    } else {

        if(findOderNumber) {
            return response.status(401).json({ message: "OrderNumber Already Exists !" })
        }

        const order = await orderRepository.createOrder({
            orderId,
            value,
        });

        const item = await orderRepository.createItem({
            orderId: orderId,
            productId,
            quantity,
            price
        });

        order.Items.push(item);
        return response.status(200).json(order);
    }
});