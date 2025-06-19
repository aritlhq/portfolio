<script setup>
import personalData from "../../assets/data/personal-data.json"
import DownloadOutline from "../../assets/icones/DownloadOutline.vue";
import SocialBadges from "./SocialBadges.vue";
import ArrowUpRight from "../../assets/icones/ArrowUpRight.vue";
import AvatarSmall from "./AvatarSmall.vue";
</script>

<template>
  <div
      v-for="personal in personalData.data"
      :key="personal"
  >
    <div>
      <div class="flex items-center gap-4">
        <AvatarSmall/>
        <p class="text-lg">{{ personal.welcome }}</p>
      </div>
      <h1 class="text-3xl lg:text-5xl font-bold mt-2">{{ personal.name }}</h1>
      <p class="mt-4 text-base lg:text-xl">{{ personal.description }}</p>
    </div>

    <SocialBadges/>

    <div class="mt-6">
      <a :href="`mailto:${ personal.email }`" class="no-underline flex gap-3">
        <NButton size="large" class="py-6" color="#f3ecd5">
          <div class="flex items-center gap-2">
            <p class="text-lg text-black font-bold">{{ personal['button-1'] }}</p>
            <NIcon class="pb-2">
              <ArrowUpRight class="text-2xl"/>
            </NIcon>
          </div>
        </NButton>
        <NButton size="large" class="py-6" dashed color="#ffffff">
          <div class="flex items-center gap-2">
            <p class="text-lg text-white font-bold">{{ personal['button-2'] }}</p>
            <NIcon class="text-white pb-3">
              <DownloadOutline class="text-2xl"/>
            </NIcon>
          </div>
        </NButton>
      </a>
    </div>
  </div>
</template>