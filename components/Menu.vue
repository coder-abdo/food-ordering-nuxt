<script setup lang="ts">
const links = [
  { id: 1, title: "Homepage", url: "/" },
  { id: 2, title: "Menu", url: "/menu" },
  { id: 3, title: "Working Hours", url: "/" },
  { id: 4, title: "Contact", url: "/" },
];
const isOpen = ref(false);
const isAuthenticated = ref(false);
const openMenu = () => {
  isOpen.value = true;
};
const closeMenu = () => {
  isOpen.value = false;
};
</script>
<template>
  <div class="cursor-pointer">
    <img
      v-if="!isOpen"
      @click="openMenu"
      src="~/assets/open.png"
      alt="open menu icon"
      width="20"
      height="20"
    />
    <img
      v-else
      @click="closeMenu"
      src="~/assets/close.png"
      alt="close menu icon"
      width="20"
      height="20"
    />
    <ul
      v-if="isOpen"
      class="absolute top-24 left-0 bg-red-500 text-white h-[calc(100vh-6rem)] flex flex-col justify-center gap-8 items-center w-full text-3xl z-10"
    >
      <li v-for="link in links" :key="link.id">
        <NuxtLink :to="link.url">{{ link.title }}</NuxtLink>
      </li>
      <li v-if="isAuthenticated">
        <NuxtLink to="/orders">Orders</NuxtLink>
      </li>
      <li v-else>
        <NuxtLink to="/login">Login</NuxtLink>
      </li>
    </ul>
  </div>
</template>
