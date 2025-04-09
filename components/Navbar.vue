<script setup lang="ts">
const isAuthenticated = ref(false);
</script>
<template>
  <nav
    class="flex justify-between items-center border-b-2 border-red-500 uppercase p-4 text-red-500 h-12 md:h-24 lg:px-20 xl:px-40"
  >
    <div class="hidden md:flex md:gap-4 md:flex-1">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/menu">Menu</NuxtLink>
      <NuxtLink to="/">contact</NuxtLink>
    </div>
    <NuxtLink class="text-xl md:font-bold md:flex-1 md:text-center" to="/"
      >Massimo</NuxtLink
    >
    <div class="md:hidden">
      <Menu />
    </div>
    <!-- right links -->
    <div
      class="hidden md:flex md:gap-4 md:items-center md:flex-1 md:justify-end"
    >
      <div
        class="flex items-center gap-2 bg-orange-300 px-1 rounded absolute top-3 r-2 lg:static"
      >
        <img src="/phone.png" alt="phone icon" width="20" height="20" />
        <span>123-456-789</span>
      </div>
      <NuxtLink v-if="!isAuthenticated" to="/login">Login</NuxtLink>
      <NuxtLink v-else to="/orders">Orders</NuxtLink>
      <CartIcon />
    </div>
  </nav>
</template>

<script setup></script>
