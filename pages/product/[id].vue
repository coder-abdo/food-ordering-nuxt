<template>
  <main
    class="p-4 lg:px-20 xl:px-40 h-screen flex flex-col justify-around text-red-500 md:flex-row md:gap-8 md:items-center"
  >
    <div class="w-full h-1/2 md:h-[70%]">
      <img
        :src="singleProduct.img"
        alt="product"
        class="w-full h-full object-contain"
      />
    </div>
    <div
      class="h-1/2 flex flex-col gap-4 md:h-[70%] md:justify-center md:gap-6 xl:gap-8"
    >
      <h1 class="text-3xl font-bold uppercase xl:text-5xl">
        {{ singleProduct.title }}
      </h1>
      <p>{{ singleProduct.desc }}</p>
      <Price
        :price="singleProduct.price"
        :id="singleProduct.id"
        :options="singleProduct.options"
      />
    </div>
  </main>
</template>

<script setup>
import { singleProduct } from "~/data";
</script>
