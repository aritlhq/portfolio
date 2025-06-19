<script setup lang="ts">
import AlertCirle from "../../assets/icones/AlertCirle.vue";
</script>

<template>
  <div>
    <n-alert class="custom-close-button-alert bg-[#f3ecd5]" :show-icon="false" closable>
      <n-marquee>
        <div class="flex items-center text-black gap-2">
          <NIcon class="text-2xl">
            <AlertCirle/>
          </NIcon>
          <div>
            <span>This website is still under development.</span>
          </div>
        </div>
      </n-marquee>
    </n-alert>
  </div>
</template>

<style>
.custom-close-button-alert .n-base-close {
  color: black;
}
</style>