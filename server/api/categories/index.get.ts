import { prisma } from "~/server/utils/prisma";

export default defineEventHandler(async () => {
  try {
    const categories = await prisma.category.findMany();
    return categories;
  } catch (err) {
    if (err instanceof Error) {
      throw createError({
        statusCode: 500,
        statusMessage: err.message,
      });
    }
  }
});
