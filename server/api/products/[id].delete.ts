import { getServerSession } from "#auth";

export default defineEventHandler(async (event) => {
  const id = event.context.params?.id;
  const session = await getServerSession(event);
  try {
    if (session && !session.user.isAdmin) {
      throw createError({
        statusCode: 401,
        message: "Unauthorized",
      });
    }
    await prisma.product.delete({
      where: {
        id,
      },
    });
    return {
      status: 200,
      message: "Product deleted successfully",
    };
  } catch (err) {
    if (err instanceof Error) {
      throw createError({
        statusCode: 500,
        statusMessage: err.message,
      });
    }
  }
});
