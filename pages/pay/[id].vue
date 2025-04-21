<script setup lang="ts">
definePageMeta({
  ssr: false,
});
const { stripe } = useClientStripe();
const router = useRouter();
const isLoading = ref(true);
const errorMessage = ref<string | null>(null);
watch(
  stripe,
  async () => {
    if (stripe.value) {
      const { data: clientSecret, error } = await useFetch(
        "/api/create-intent/" + router.currentRoute.value.params.id
      );
      if (error || !clientSecret.value) {
        isLoading.value = false;
        errorMessage.value =
          error.value?.message || "Error fetching client secret";
        console.error(error);
        return;
      }

      const elements = stripe.value.elements({
        clientSecret: clientSecret.value as string,
      });
      const linkAuthenticationElement = elements.create("linkAuthentication");
      linkAuthenticationElement.mount("#linkAuthenticationElement");
      isLoading.value = false;
    }
  },
  {
    immediate: true,
  }
);
</script>
<template>
  <main>
    <div v-if="isLoading">loading payment from ...</div>
    <div v-else-if="errorMessage">{{ errorMessage }}</div>
    <div else>
      <div id="linkAuthenticationElement"></div>
      <div id="paymentElement"></div>
    </div>
  </main>
</template>
