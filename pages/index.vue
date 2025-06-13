<script setup lang="ts">
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

const dynamicTitle = ref('My title')
/**
 * Reference: https://nuxt.com/docs/api/composables/use-seo-meta
 */
// Only use reactive meta tags outside the condition when necessary
useSeoMeta({
  title: () => dynamicTitle.value,
  ogTitle: () => dynamicTitle.value,
})
</script>

<template>
  <h1>Hello</h1>
</template>
