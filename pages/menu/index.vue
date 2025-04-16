<script setup lang="ts">
import type { Menu } from "~/types";

const { data: menu, status, error } = await useFetch<Menu>("/api/categories");
</script>

<template>
  <main v-if="status === 'pending'">
    <span
      class="iconify"
      data-icon="svg-spinners:180-ring"
      data-inline="false"
    />
  </main>
  <main v-if="error">
    <p class="text-red-500 capitalize">{{ error?.message }}</p>
  </main>
  <main
    v-if="menu && menu.length > 0"
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
  <main v-else class="flex justify-center items-center h-screen">
    <p class="text-2xl capitalize font-bold">there is no categories yet</p>
  </main>
</template>
