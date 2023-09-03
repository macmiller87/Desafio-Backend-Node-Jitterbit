import { prismaService } from "../../database/prismaService.js"

export const orderRepository =  {

    async createOrder(data) {
        const createOrder = await prismaService.order.create({
            data: data,
            include: {
                Items: true
            }
        });
        
        return createOrder;
    },

    async createItem(data) {
        const createItem = await prismaService.items.create({
            data: data,
        });

        return {
            productId: createItem.productId,
            quantity: createItem.quantity,
            price: createItem.price
        };
    },

    async findOrderByNumberOrder(orderId) {
        const findNumberOrder = await prismaService.order.findUnique({
            where: {
                orderId: orderId 
            }
        });

        return findNumberOrder;
    }

}