import { getServerSession } from "#auth";
import { prisma } from "~/server/utils/prisma";

export default defineEventHandler(async (event) => {
  try {
    const session = await getServerSession(event);
    if (session && session.user.isAdmin) {
      const orders = await prisma.order.findMany();
      return orders;
    }
    const orders = await prisma.order.findMany({
      where: {
        userEmail: session?.user.email!,
      },
    });
    return orders;
  } catch (err) {
    if (err instanceof Error) {
      throw createError({
        statusCode: 500,
        statusMessage: err.message,
      });
    }
  }
});
