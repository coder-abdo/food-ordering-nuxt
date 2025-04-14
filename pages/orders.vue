<script setup lang="ts">
import type { OrderType } from "~/types";
const { status } = useAuth();
const isAuthenticated = computed(() => status.value === "authenticated");
const { data: orders } = await useFetch<OrderType[]>("/api/orders");
if (!isAuthenticated.value) navigateTo("/");
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
        <tr class="text-sm md:text-base bg-red-50">
          <td class="hidden md:block py-6 px-1">1237861238721</td>
          <td class="py-6 px-1">19.07.2023</td>
          <td class="py-6 px-1">89.90</td>
          <td class="hidden md:block py-6 px-1">
            Big Burger Menu (2), Veggie Pizza (2), Coca Cola 1L (2)
          </td>
          <td class="py-6 px-1">On the way (approx. 10min)...</td>
        </tr>
        <tr class="text-sm md:text-base odd:bg-gray-100">
          <td class="hidden md:block py-6 px-1">1237861238721</td>
          <td class="py-6 px-1">19.07.2023</td>
          <td class="py-6 px-1">89.90</td>
          <td class="hidden md:block py-6 px-1">
            Big Burger Menu (2), Veggie Pizza (2), Coca Cola 1L (2)
          </td>
          <td class="py-6 px-1">On the way (approx. 10min)...</td>
        </tr>
        <tr class="text-sm md:text-base odd:bg-gray-100">
          <td class="hidden md:block py-6 px-1">1237861238721</td>
          <td class="py-6 px-1">19.07.2023</td>
          <td class="py-6 px-1">89.90</td>
          <td class="hidden md:block py-6 px-1">
            Big Burger Menu (2), Veggie Pizza (2), Coca Cola 1L (2)
          </td>
          <td class="py-6 px-1">On the way (approx. 10min)...</td>
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
