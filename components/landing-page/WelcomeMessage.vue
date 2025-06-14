<script setup>
import ArrowUpRight from "~/assets/icones/ArrowUpRight.vue";
import personalData from "assets/data/personal-data.json";
import SocialMediaBadge from "~/components/landing-page/SocialMediaBadge.vue";
import Avatar from "~/components/landing-page/Avatar.vue";
import DownloadOutline from "assets/icones/DownloadOutline.vue";
</script>

<template>
  <div
      v-for="personal in personalData.data"
      :key="personal"
  >
    <div>
      <div class="flex items-center gap-4">
        <Avatar/>
        <h2 class="text-xl italic">{{ personal.welcome }}</h2>
      </div>
      <h1 class="text-3xl font-bold mt-2">{{ personal.name }}</h1>
      <p class="mt-4 text-base max-w-xl">{{ personal.description }}</p>
    </div>

    <SocialMediaBadge/>

    <div class="mt-6">
      <a :href="`mailto:${ personal.email }`" class="no-underline flex gap-3">
        <NButton size="large" class="py-6" type="primary" dashed>
          <div class="flex items-center gap-2">
            <p class="text-lg text-white font-bold">{{ personal['button-1'] }}</p>
            <NIcon class="text-white pb-2">
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
