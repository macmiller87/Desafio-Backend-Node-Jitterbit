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
        const findNumberOrder = await prismaService.order.findFirst({
            where: {
                orderId: orderId 
            }
        });

        return findNumberOrder;
    },

    async findOrderById(orderId) {
        const findOrderById = await prismaService.order.findUnique({
            where: {
                orderId: orderId 
            },
            include: {
                Items: true
            }
        });

        return findOrderById;
    },

    async findProductIdById(productId) {
        const findProductId = await prismaService.items.findUnique({
            where: {
                productId: productId 
            },
        });

        return findProductId;
    },

    async listAllOrders() {
        const listAllOrders = await prismaService.order.findMany({
            orderBy: {
                orderId: "asc"
            },
            include: {
                Items: true
            }
        });
        
        return listAllOrders;
    },

    async updateOrderField(orderId) {
        const updateFiled = await prismaService.order.update({
            where: {
                orderId: orderId.orderId,
            },
            data: {
                value: orderId.value
            },
            include: {
                Items: true
            }
        });

        return updateFiled;
    },

    async deleteOrderById(orderId) {
        await prismaService.order.delete({
            where: {
                orderId: orderId.orderId
            }
        });
    }
}