<template>
  <main class="flex flex-wrap text-red-500">
    <NuxtLink
      v-for="category in pizzas"
      :key="category.id"
      class="w-full h-[60vh] border-r-2 border-b-2 border-red-500 sm:w-1/2 lg:w-1/3 p-4 flex flex-col justify-between group odd:bg-fuchsia-50"
      :to="`/product/${category.id}`"
    >
      <div class="h-[80%]">
        <img
          :src="category.img"
          :alt="category.title"
          class="w-full h-full object-cover"
        />
      </div>
      <div class="flex items-center justify-between font-bold group">
        <h1 class="uppercase font-bold text-3xl p-2">{{ category.title }}</h1>
        <h2 class="group-hover:hidden text-xl">${{ category.price }}</h2>
        <button
          class="hidden group-hover:block uppercase py-2 px-4 rounded-md bg-red-500 border border-red-500 text-white hover:bg-transparent hover:text-red-500 transition-colors duration-300 cursor-pointer"
        >
          add to cart
        </button>
      </div>
    </NuxtLink>
  </main>
</template>

<script setup>
import { pizzas } from "~/data";

const route = useRoute();
</script>
