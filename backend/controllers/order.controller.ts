import { Request, Response } from "express";
import prisma from "../prisma/prisma";

export const getOrdersInfo = async (req: Request, res: Response) => {
  try {
    const orders = await prisma.order.findMany();

    let totalRevenue = 0;
    orders.forEach((order) => {
      totalRevenue += order.totalAmount;
    });

    const averageOrderValue =
      orders.length > 0 ? totalRevenue / orders.length : 0;

    const totalOrders = orders.length;

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const ordersToday = await prisma.order.count({
      where: {
        createdAt: {
          gte: today,
        },
      },
    });

    res.status(200).json({
      success: "true",
      totalOrders: totalOrders,
      ordersToday: ordersToday,
      averageOrderValue: averageOrderValue,
      totalRevenue: totalRevenue,
    });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
