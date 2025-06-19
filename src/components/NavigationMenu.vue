<script setup>
import personalData from '../assets/data/personal-data.json'
import {ref} from 'vue'
import Development from "../assets/icones/Development.vue";
import MenuOpenRound from "../assets/icones/MenuOpenRound.vue";
import Alert from "./navigation-menu/Alert.vue";

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
  {label: 'Projects', to: '/projects'},
  {label: 'About', to: '/about'},
]
</script>

<template>
  <div class="w-full sticky top-0 relative z-50">
    <Alert/>
    <!-- Navbar -->
    <div class="flex items-center justify-between bg-[#101014] px-4 py-3 md:px-20 md:py-8 lg:px-72 mx-auto">
      <!-- Logo -->
      <RouterLink class="color-white no-underline flex items-center gap-2" to="/">
        <NIcon class="text-4xl">
          <Development/>
        </NIcon>
        <div class="flex items-center space-x-sm">
          <p class="text-xl font-bold">{{ personalData.data[0]["navbar-title"] }}</p>
        </div>
      </RouterLink>

      <!-- Desktop menu -->
      <div class="hidden md:flex gap-5 lg:gap-10">
        <RouterLink
            v-for="item in navItems"
            :key="item.to"
            :to="item.to"
            class="text-white no-underline"
        >
          <NButton text class="text-md lg:text-xl">
            {{ item.label }}
          </NButton>
        </RouterLink>
      </div>

      <!-- Hamburger (mobile only) -->
      <div class="md:hidden">
        <NButton @click="toggleDrawer" class="py-6" dashed color="#ffffff57">
          <NIcon color="white" size="25">
            <MenuOpenRound/>
          </NIcon>
        </NButton>
      </div>
    </div>

    <!-- Mobile Drawer -->
    <transition name="slide-down">
      <div
          v-if="showDrawer"
          class="absolute w-full min-h-screen bg-[#101014] border-t -z-1 top-0 shadow-md md:hidden"
      >
        <div class="flex flex-col text-center gap-4 py-60">
          <RouterLink
              v-for="item in navItems"
              :key="item.to"
              :to="item.to"
              @click="closeDrawer"
              class="text-2xl font-bold text-white no-underline py-10"
          >
            <NButton class="text-3xl" text>
              {{ item.label }}
            </NButton>
          </RouterLink>
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