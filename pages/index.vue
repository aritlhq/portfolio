<script setup>
import Educations from "~/components/landing-page/Educations.vue";
import Programming from "~/components/landing-page/Programming.vue";
import WelcomeMessage from "~/components/landing-page/WelcomeMessage.vue";

if (import.meta.server) {
  /**
   * Reference: https://nuxt.com/docs/api/composables/use-seo-meta
   */
  // These meta tags will only be added during server-side rendering
  useSeoMeta({
    robots: 'index, follow',
    description: 'Static description that does not need reactivity',
    ogImage: 'https://example.com/image.png',
  })
}

const dynamicTitle = ref('Personal Portfolio')
/**
 * Reference: https://nuxt.com/docs/api/composables/use-seo-meta
 */
// Only use reactive meta tags outside the condition when necessary
useSeoMeta({
  title: () => dynamicTitle.value,
  ogTitle: () => dynamicTitle.value,
});
</script>

<template>
  <div class="py-15">
    <!--Welcome Message-->
    <WelcomeMessage/>

    <!--Programming-->
    <div>
      <Programming/>
    </div>

    <!--Educations-->
    <Educations/>
  </div>
</template>
