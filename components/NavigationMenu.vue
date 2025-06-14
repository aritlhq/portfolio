<script setup>
import {GridOutline, InvertModeOutline} from '@vicons/ionicons5'
import personalData from "~/assets/data/personal.json"
import {ref} from 'vue'

const showDrawer = ref(false)

function toggleDrawer() {
  showDrawer.value = !showDrawer.value
}

function closeDrawer() {
  showDrawer.value = false
}

const navItems = [
  {label: 'Home', to: '/'},
  {label: 'Blog', to: '/blog'},
  {label: 'Projects', to: '/projetcs'},
  {label: 'About', to: '/about'},
]
</script>

<template>
  <div class="w-full sticky top-0 bg-[#101014] relative z-50">
    <!-- Navbar -->
    <div class="flex items-center justify-between px-4 py-3 mx-auto">
      <!-- Logo -->
      <NuxtLink class="color-white no-underline flex items-center space-x-lg" to="/">
        <NIcon size="40" :component="InvertModeOutline"></NIcon>
        <div class="flex items-center space-x-sm">
          <p class="text-xl font-bold">{{ personalData.data[0]["navbar-title"]}}</p>
        </div>
      </NuxtLink>

      <!-- Desktop menu -->
      <div class="hidden md:flex gap-5">
        <NuxtLink
            v-for="item in navItems"
            :key="item.to"
            :to="item.to"
            class="hover:underline"
        >
          {{ item.label }}
        </NuxtLink>
      </div>

      <!-- Hamburger (mobile only) -->
      <div class="md:hidden">
        <NButton class="py-6" dashed>
          <NIcon @click="toggleDrawer" color="white" size="25" :component="GridOutline"></NIcon>
        </NButton>
      </div>
    </div>

    <!-- Mobile Drawer -->
    <transition name="slide-down">
      <div
          v-if="showDrawer"
          class="absolute w-full min-h-screen bg-[#101014] border-t z-40 top-20 shadow-md md:hidden"
      >
        <div class="flex flex-col text-center gap-4 py-40">
          <NuxtLink
              v-for="item in navItems"
              :key="item.to"
              :to="item.to"
              @click="closeDrawer"
              class="text-2xl font-bold text-white no-underline py-10"
          >
            <NButton class="text-3xl" text>
              {{ item.label }}
            </NButton>
          </NuxtLink>
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease;
}

.slide-down-enter-from {
  transform: translateY(-20px);
  opacity: 0;
}

.slide-down-enter-to {
  transform: translateY(0);
  opacity: 1;
}

.slide-down-leave-from {
  transform: translateY(0);
  opacity: 1;
}

.slide-down-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}
</style>
