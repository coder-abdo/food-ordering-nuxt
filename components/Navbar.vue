<script setup lang="ts">
const { status, signOut, data } = useAuth();
const isAuthenticated = computed(() => status.value === "authenticated");
</script>
<template>
  <nav
    class="flex justify-around items-center border-b-2 border-red-500 uppercase p-4 text-red-500 h-12 md:h-24"
  >
    <div class="hidden md:flex md:gap-4">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/menu">Menu</NuxtLink>
      <NuxtLink to="/">contact</NuxtLink>
    </div>
    <NuxtLink class="text-xl md:font-bold md:text-center" to="/"
      >Massimo</NuxtLink
    >
    <div class="md:hidden">
      <Menu />
    </div>
    <!-- right links -->
    <div class="hidden md:flex md:gap-4 md:items-center md:justify-end">
      <div
        class="flex items-center gap-2 bg-orange-300 px-1 rounded absolute top-3 r-2 lg:static"
      >
        <img src="/phone.png" alt="phone icon" width="20" height="20" />
        <span>123-456-789</span>
      </div>
      <NuxtLink v-if="!isAuthenticated" to="/login">Login</NuxtLink>
      <div v-else class="flex items-center gap-4">
        <NuxtLink to="/orders">Orders</NuxtLink>
        <span class="hidden md:inline text-sm text-red-500 capitalize"
          >hi, {{ data?.user?.name }}</span
        >
        <button
          class="bg-red-500 text-white px-4 py-2 cursor-pointer rounded"
          @click="signOut({ callbackUrl: '/login' })"
        >
          Logout
        </button>
      </div>
      <CartIcon />
    </div>
  </nav>
</template>

<script setup></script>
