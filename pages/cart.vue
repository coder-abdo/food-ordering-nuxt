<script setup lang="ts">
import { useCart } from "@/stores/useCart";
definePageMeta({
  ssr: false,
});
const store = useCart();
</script>
<template>
  <main class="flex flex-col text-red-500 lg:flex-row gap-4">
    <!-- products container -->
    <div
      class="h-1/2 p-4 flex flex-col overflow-scroll mb-2 md:h-full md:w-2/3 lg:w-1/2 lg:px-20 xl:px-40 gap-4"
    >
      <!-- single item -->
      <div
        v-for="item in store.cart.products"
        class="flex items-center justify-between mb-4"
        :key="item.id"
      >
        <img :src="item.img" alt="" width="100" height="100" />
        <div>
          <h1 class="uppercase text-xl font-bold">
            {{ item.title }} x{{ item.quantity }}
          </h1>
          <span>{{ item.optionTitle }}</span>
        </div>
        <h2 className="font-bold">${{ item.price }}</h2>
        <span
          className="cursor-pointer"
          @click="() => store.removeItem(item.id)"
        >
          X
        </span>
      </div>
    </div>
    <!-- payment chekcout -->
    <div
      class="h-1/2 p-4 bg-fuchsia-50 flex flex-col gap-4 justify-center lg:h-full lg:w-1/3 2xl:w-1/2 lg:px-20 xl:px-40 2xl:text-xl 2xl:gap-6"
    >
      <div class="flex justify-between">
        <span class="">Subtotal ({ {store.totalItems} } items)</span>
        <span class="">${ {store.totalPrice} }</span>
      </div>
      <div class="flex justify-between">
        <span class="">Service Cost</span>
        <span class="">$0.00</span>
      </div>
      <div class="flex justify-between">
        <span class="">Delivery Cost</span>
        <span class="text-green-500">FREE!</span>
      </div>
      <hr class="my-2" />
      <div class="flex justify-between">
        <span class="">TOTAL(INCL. VAT)</span>
        <span class="font-bold">${ {totalPrice} }</span>
      </div>
      <button class="bg-red-500 text-white p-3 rounded-md w-1/2 self-end">
        CHECKOUT
      </button>
    </div>
  </main>
</template>
