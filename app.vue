<script setup>
import {NConfigProvider, darkTheme} from 'naive-ui'
import "@fontsource/montserrat/index.css"


useHead({
  titleTemplate: 'Faqih Alharits - %s',
})
</script>

<template>
  <NConfigProvider :theme="darkTheme">
    <n-global-style/>
    <div class="font-sans">
      <NuxtLayout>
        <div class="px-6">
          <NuxtPage/>
        </div>
      </NuxtLayout>
    </div>
  </NConfigProvider>
</template>
