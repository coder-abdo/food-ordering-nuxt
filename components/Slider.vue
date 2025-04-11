<script setup lang="ts">
const data = [
  {
    id: 1,
    title: "always fresh & always crispy & always hot",
    image: "/slide1.png",
  },
  {
    id: 2,
    title: "we deliver your order wherever you are in NY",
    image: "/slide2.png",
  },
  {
    id: 3,
    title: "the best pizza to share with your family",
    image: "/slide3.jpg",
  },
];
let interval: number | undefined;
const currentSlide = ref(1);
onMounted(() => {
  interval = setInterval(() => {
    currentSlide.value =
      currentSlide.value === data.length - 1 ? 0 : currentSlide.value + 1;
  }, 4000);
});

onUnmounted(() => {
  clearInterval(interval);
});
</script>
<template>
  <section
    class="flex flex-col h-[calc(100vh - 6rem)] md:h-[calc(100vh - 9rem)] lg:flex-row bg-fuchsia-50"
  >
    <!-- text -->
    <div
      class="flex-1 flex items-center justify-center flex-col gap-8 text-red-500 font-bold"
    >
      <h1
        class="text-5xl text-center uppercase p-4 md:p-10 md:text-6xl xl:text-7xl"
      >
        {{ data[currentSlide].title }}
      </h1>
      <button class="bg-red-500 text-white py-4 px-8">Order Now</button>
    </div>
    <!-- image -->
    <div class="w-full flex-1">
      <img
        :src="data[currentSlide].image"
        :alt="data[currentSlide].title"
        class="object-cover"
      />
    </div>
  </section>
</template>
