<script setup lang="ts">
import type { Menu } from "~/types";

const { data: menu } = await useFetch<Menu>("/api/categories");
</script>

<template>
  <main
    class="p-4 lg:px-20 xl:px-40 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col md:flex-row items-center"
  >
    <NuxtLink
      v-for="category in menu"
      :key="category.id"
      :to="`/menu/${category.slug}`"
      class="w-full h-1/3 bg-cover p-8 md:h-1/2"
      :style="`background-image: url('${category.img}')`"
    >
      <div :class="`text-${category.color}`" class="w-1/2 pb-4">
        <h1 class="uppercase font-bold text-3xl">{{ category.title }}</h1>
        <p class="text-sm my-4">{{ category.desc }}</p>
        <button
          class="hidden 2xl:block py-2 px-4 rounded-md"
          :class="`bg-${category.color} text-${
            category.color === 'black' ? 'white' : 'red-500'
          }`"
        >
          explore
        </button>
      </div>
    </NuxtLink>
  </main>
</template>
