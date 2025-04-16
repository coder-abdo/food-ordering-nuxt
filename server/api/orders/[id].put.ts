import { prisma } from "@/server/utils/prisma";

export default defineEventHandler(async (event) => {
  const id = event.context.params?.id;
  try {
    const body = await readBody(event);
    await prisma.order.update({
      where: {
        id: id,
      },
      data: {
        status: body.status,
      },
    });
    return {
      status: 200,
      message: "Order updated successfully",
    };
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
      sendError(
        event,
        createError({ statusCode: 500, statusMessage: err.message })
      );
    }
  }
});
