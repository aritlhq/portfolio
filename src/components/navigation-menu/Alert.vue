<script setup lang="ts">
import AlertCirle from "../../assets/icones/AlertCirle.vue";
</script>

<template>
  <div>
    <n-alert class="bg-orange text-white" :show-icon="false" closable>
      <n-marquee>
        <div class="flex items-center gap-2">
          <NIcon class="text-2xl">
            <AlertCirle/>
          </NIcon>
          <div>
            This website is still under development.
          </div>
        </div>
      </n-marquee>
    </n-alert>
  </div>
</template>
