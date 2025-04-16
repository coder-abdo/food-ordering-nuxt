import { prisma } from "@/server/utils/prisma";
export default defineEventHandler(async (event) => {
  const id = event.context.params?.id;
  try {
    const product = await prisma.product.findFirst({
      where: {
        id,
      },
    });
    if (!product) {
      throw createError({
        statusCode: 404,
        message: "Product not found",
      });
    }
    return product;
  } catch (err) {
    if (err instanceof Error) {
      throw createError({
        statusCode: 500,
        message: err.message,
      });
    }
  }
});
