<template>
  <div class="flex flex-col gap-4">
    <h2 class="text-2xl font-bold">${{ total }}</h2>

    <!-- OPTIONS CONTAINER -->
    <div class="flex gap-4">
      <button
        v-for="(option, index) in options"
        :key="option.title"
        class="min-w-[6rem] p-2 ring-1 ring-red-400 rounded-md"
        :style="{
          background: selected === index ? 'rgb(248 113 113)' : 'white',
          color: selected === index ? 'white' : 'red',
        }"
        @click="selected = index"
      >
        {{ option.title }}
      </button>
    </div>

    <!-- QUANTITY AND ADD BUTTON CONTAINER -->
    <div class="flex justify-between items-center">
      <!-- QUANTITY -->
      <div class="flex justify-between w-full p-3 ring-1 ring-red-500">
        <span>Quantity</span>
        <div class="flex gap-4 items-center">
          <button @click="quantity = quantity > 1 ? quantity - 1 : 1">
            &lt;
          </button>
          <span>{{ quantity }}</span>
          <button @click="quantity = quantity < 9 ? quantity + 1 : 9">
            &gt;
          </button>
        </div>
      </div>
      <!-- CART BUTTON -->
      <button
        class="uppercase w-56 bg-red-500 text-white p-3 ring-1 ring-red-500"
      >
        Add to Cart
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
type Option = {
  title: string;
  additionalPrice: number;
};

type Props = {
  price: number;
  id: string;
  options?: Option[];
};

const props = defineProps<Props>();

const quantity = ref(1);
const selected = ref(0);

const total = computed(() => {
  if (props.options && props.options[selected.value]) {
    return (
      quantity.value *
      (props.price + props.options[selected.value].additionalPrice)
    );
  }
  return quantity.value * props.price;
});
</script>
