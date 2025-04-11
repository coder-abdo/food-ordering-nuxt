<template>
  <section
    class="h-full bg-black flex flex-col md:flex-row md:justify-between md:bg-[url('/offerProduct.png')] md:bg-cover"
  >
    <!-- text -->
    <div
      class="flex-1 text-white flex flex-col justify-center items-center gap-8 py-8 px-4 md:px-8"
    >
      <h2 class="text-5xl font-bold xl:text-6xl text-center md:text-left">
        Delicious Burger & French Fry
      </h2>
      <p class="xl:text-xl">
        Progressively simplify effective e-toilers and process-centric methods
        of empowerment. Quickly pontificate parallel.
      </p>
      <ClientOnly fallback="counter loading.." fallback-tag="span">
        <CountDown />
      </ClientOnly>
      <button class="bg-red-500 text-white py-4 px-8 rounded-md">
        Order Now
      </button>
    </div>
    <!-- image -->
    <img
      src="/offerProduct.png"
      alt="offer product"
      class="w-full object-cover flex-1"
    />
  </section>
</template>
