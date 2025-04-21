import { useServerStripe } from "#stripe/server";
import { prisma } from "@/server/utils/prisma";

export default defineEventHandler(async (event) => {
  const orderId = event.context.params?.orderId;
  const stripe = await useServerStripe(event);
  const order = await prisma.order.findUnique({
    where: {
      id: orderId,
    },
  });
  if (!order) {
    throw createError({
      statusCode: 404,
      statusMessage: "Order not found",
    });
  }
  const paymentIntent = await stripe.paymentIntents.create({
    amount: Number(order.price) * 100,
    currency: "usd",
    automatic_payment_methods: {
      enabled: true,
    },
  });
  await prisma.order.update({
    where: {
      id: orderId,
    },
    data: {
      intent_id: paymentIntent.id,
    },
  });
  return {
    clientSecret: paymentIntent.client_secret,
  };
});
