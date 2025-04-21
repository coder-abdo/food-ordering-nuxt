<script setup lang="ts">
definePageMeta({
  ssr: false,
});
const { stripe } = useClientStripe();
const router = useRouter();
watch(
  stripe,
  async () => {
    if (stripe.value) {
      const { data: clientSecret, error } = await useFetch(
        "/api/create-intent/" + router.currentRoute.value.params.id
      );
      if (error) {
        console.error(error);
        return;
      }

      const elements = stripe.value.elements({
        clientSecret: clientSecret.value as string,
      });
      const linkAuthenticationElement = elements.create("linkAuthentication");
      linkAuthenticationElement.mount("#linkAuthenticationElement");
    }
  },
  {
    immediate: true,
  }
);
</script>
<template>
  <div>
    {{ stripe ? stripe : "loading...." }}
  </div>
</template>
