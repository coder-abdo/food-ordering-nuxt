<script setup lang="ts">
import type { OrderType } from "~/types";
const { status, data } = useAuth();
const router = useRouter();

const isAuthenticated = computed(() => status.value === "authenticated");
const { data: orders } = await useFetch<OrderType[]>("/api/orders");
if (!isAuthenticated.value) navigateTo("/");
const handleSubmit = async (e: Event, id: string) => {
  e.preventDefault();
  const formData = new FormData(e.target as HTMLFormElement);
  const status = formData.get("status");
  await useFetch(`/api/orders/${id}`, {
    method: "PUT",
    body: { status },
  });
  router.push({
    path: router.currentRoute.value.path,
    query: { updated: true },
  });
  // Optionally, you can show a success message or handle the response
};
</script>
<template>
  <main class="p-4 lg:px-20 xl:px-40">
    <table
      v-if="orders?.length! > 0"
      class="w-full border-separate border-spacing-3"
    >
      <thead>
        <tr class="text-left">
          <th class="hidden md:block">Order ID</th>
          <th>Date</th>
          <th>Price</th>
          <th class="hidden md:block">Products</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-if="orders.length > 0"
          v-for="order in orders"
          :key="order.id"
          class="text-sm md:text-base bg-red-50"
        >
          <td class="hidden md:block py-6 px-1">{{ order.id }}</td>
          <td class="py-6 px-1">{{ order.createdAt }}</td>
          <td class="py-6 px-1">{{ order.price }}</td>
          <td class="hidden md:block py-6 px-1">
            {{ order.products[0].title }}
          </td>
          <td v-if="data.user.isAdmin" class="py-6 px-1">
            <form
              @submit="(e) => handleSubmit(e, order.id)"
              class="flex items-center gap-4"
            >
              <input
                type="text"
                class="ring-1 p-2 ring-red-100 rounded-md"
                placeholder=""
              />
              <button type="submit" class="bg-red-400 p-2 rounded-full">
                <img src="/edit.png" alt="edit icon" class="w-4 h-4" />
              </button>
            </form>
          </td>
          <td v-else class="py-6 px-1">{{ order.status }}</td>
        </tr>
      </tbody>
    </table>
    <div
      v-else
      class="w-full h-[60vh] flex flex-col justify-center items-center"
    >
      <h1 class="text-3xl font-bold">No orders found</h1>
      <p class="text-sm md:text-base">You have no orders yet.</p>
    </div>
  </main>
</template>
