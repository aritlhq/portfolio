<script setup lang="ts">
import NavigationMenu from "../components/NavigationMenu.vue";
import Footer from "../components/Footer.vue";
</script>

<template>
  <div class="flex justify-between flex-col min-h-screen">
    <NavigationMenu/>
    <div class="px-4 md:px-20 lg:px-72 py-8 lg:py-15">
      <slot/>
    </div>
    <Footer/>
  </div>
</template>
