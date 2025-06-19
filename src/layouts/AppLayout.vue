<script setup lang="ts">
import NavigationMenu from "../components/NavigationMenu.vue";
import Footer from "../components/Footer.vue";
</script>

<template>
  <div class="flex justify-between flex-col min-h-screen">
    <NavigationMenu/>
    <div class="px-4 py-3 md:px-20 lg:px-72">
      <div>
        <slot/>
      </div>
    </div>
    <Footer/>
  </div>
</template>
