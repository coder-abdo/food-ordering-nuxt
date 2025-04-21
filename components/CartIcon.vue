<script setup lang="ts">
import { useCart } from "@/stores/useCart";
const store = useCart();
const totalItems = computed(() => store.cart.totalItems);
</script>
<template>
  <NuxtLink to="/cart" class="flex items-center gap-2">
    <div class="relative w-8 h-8">
      <img src="/cart.png" alt="cart icon" />
    </div>
    <span>cart {{ totalItems }}</span>
  </NuxtLink>
</template>
