<script setup>
import personalData from "../../assets/data/personal-data.json"
import Github from "../../assets/icones/Github.vue";
import Twitter from "../../assets/icones/Twitter.vue";
import Facebook from "../../assets/icones/Facebook.vue";
import Linkedin from "../../assets/icones/Linkedin.vue";

const iconsMap = {
  github: Github,
  twitter: Twitter,
  facebook: Facebook,
  linkedin: Linkedin,
}
</script>

<template>
  <div v-for="personal in personalData.data" :key="personal.name" class="flex gap-3">
    <div v-for="social in personal.socials" :key="social.label">
      <a :href="social.link">
        <NButton text>
          <NIcon class="text-2xl">
            <component :is="iconsMap[social.label]"/>
          </NIcon>
        </NButton>
      </a>
    </div>
  </div>
</template>