<template>
  <main class="flex flex-col text-red-500 lg:flex-row gap-4">
    <div
      class="h-1/2 p-4 flex flex-col overflow-scroll mb-2 md:h-full md:w-2/3 lg:w-1/2 lg:px-20 xl:px-40 gap-4"
    >
      <div class="flex items-center justify-between">
        <img
          src="/temporary/p1.png"
          alt=""
          class="object-contain w-16 h-16 md:w-20 md:h-20"
        />
        <div class="flex flex-col">
          <h1 class="uppercase text-xl font-bold">sicilian</h1>
          <span>Large</span>
        </div>
        <h2 class="font-bold">$79.90</h2>
        <span class="cursor-pointer">X</span>
      </div>
      <div class="flex items-center justify-between">
        <img
          src="/temporary/p1.png"
          alt=""
          class="object-contain w-16 h-16 md:w-20 md:h-20"
        />
        <div class="">
          <h1 class="uppercase text-xl font-bold">sicilian</h1>
          <span>Large</span>
        </div>
        <h2 class="font-bold">$79.90</h2>
        <span class="cursor-pointer">X</span>
      </div>
      <div class="flex items-center justify-between">
        <img
          src="/temporary/p1.png"
          alt=""
          class="object-contain w-16 h-16 md:w-20 md:h-20"
        />
        <div class="">
          <h1 class="uppercase text-xl font-bold">sicilian</h1>
          <span>Large</span>
        </div>
        <h2 class="font-bold">$79.90</h2>
        <span class="cursor-pointer">X</span>
      </div>
    </div>
    <div
      class="h-1/2 p-4 bg-fuchsia-50 flex flex-col gap-4 justify-center lg:h-full lg:w-1/3 2xl:w-1/2 lg:px-20 xl:px-40 2xl:text-xl 2xl:gap-6"
    >
      <div class="flex justify-between">
        <span>Subtotal (3 items)</span>
        <span>$81.70</span>
      </div>
      <div class="flex justify-between">
        <span>Service Cost</span>
        <span>$0.00</span>
      </div>
      <div class="flex justify-between">
        <span>Delivery Cost</span>
        <span class="text-green-500">FREE!</span>
      </div>
      <hr class="my-2" />
      <div class="flex justify-between">
        <span>TOTAL(INCL. VAT)</span>
        <span class="font-bold">$81.70</span>
      </div>
      <button class="bg-red-500 text-white p-3 rounded-md self-end">
        CHECKOUT
      </button>
    </div>
  </main>
</template>
