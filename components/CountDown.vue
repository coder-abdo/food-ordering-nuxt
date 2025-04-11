<template>
  <span class="font-bold text-5xl text-yellow-300">
    {{ days }}:{{ hours }}:{{ minutes }}:{{ seconds }}
  </span>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";

const targetDate = new Date("2025-04-12"); // Update as needed
const delay = ref(+targetDate - +new Date());

const days = computed(() => Math.floor(delay.value / (1000 * 60 * 60 * 24)));
const hours = computed(() => Math.floor((delay.value / (1000 * 60 * 60)) % 24));
const minutes = computed(() => Math.floor((delay.value / 1000 / 60) % 60));
const seconds = computed(() => Math.floor((delay.value / 1000) % 60));

let timer = null;

onMounted(() => {
  timer = setInterval(() => {
    delay.value = delay.value - 1000;
    if (delay.value <= 0) {
      delay.value = 0;
      clearInterval(timer);
    }
  }, 1000);
});

onUnmounted(() => {
  clearInterval(timer);
});
</script>
