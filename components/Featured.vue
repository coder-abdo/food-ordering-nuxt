<script setup lang="ts">
import { featuredProducts } from "~/data";
</script>

<template>
  <section class="w-screen overflow-x-scroll text-red-500">
    <!-- wrapper -->
    <div class="w-max flex">
      <!-- single item -->
      <div
        v-for="product in featuredProducts"
        :key="product.id"
        class="w-screen flex flex-col gap-4 justify-around items-center p-4 md:w-[50vw]"
      >
        <!-- image -->
        <div
          class="w-full hover:rotate-[60deg] hover:cursor-pointer transition-transform duration-300 flex-1 flex justify-center items-center"
        >
          <img
            :src="product.img"
            :alt="product.title"
            class="object-contain w-64 h-64"
          />
        </div>
        <!-- content -->
        <div class="flex-1 flex flex-col gap-4 items-center">
          <h2 class="text-xl font-bold uppercase md:text-2xl xl:text-3xl">
            {{ product.title }}
          </h2>
          <p>{{ product.desc }}</p>
          <span class="text-xl font-bold">${{ product.price }}</span>
          <button
            class="bg-red-500 border border-red-500 text-white p-2 rounded-md hover:bg-transparent hover:text-red-500 transition-colors duration-300 cursor-pointer"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
