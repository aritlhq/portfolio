<script setup>
import ArrowUpRight from "~/assets/icones/ArrowUpRight.vue";
import personalData from "~/assets/data/personal.json";
</script>

<template>
  <div
      v-for="personal in personalData.data"
      :key="personal"
  >
    <div>
      <h2 class="text-xl italic">{{ personal.welcome }}</h2>
      <h1 class="text-3xl font-bold mt-2">{{ personal.name }}</h1>
      <p class="mt-4 text-base max-w-xl">{{ personal.description }}</p>
    </div>

    <div class="mt-6">
      <a :href="`mailto:${ personal.email }`" class="no-underline">
        <NButton size="large" class="py-6" type="primary" dashed>
          <div class="flex items-center gap-2">
            <p class="text-lg text-white font-bold">{{ personal.button }}</p>
            <NIcon class="text-white pb-2">
              <ArrowUpRight class="text-2xl"/>
            </NIcon>
          </div>
        </NButton>
      </a>
    </div>
  </div>
</template>
