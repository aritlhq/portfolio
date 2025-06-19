<script setup lang="ts">
import AvatarLarge from "../components/about/AvatarLarge.vue";
import MyJourney from "../components/about/MyJourney.vue";
</script>

<template>
  <div>
    <div class="justify-center flex w-auto">
      <div class="items-center flex flex-col">
        <AvatarLarge/>
        <h1>About Me</h1>
      </div>
    </div>
    <div class="mt-10">
      <MyJourney/>
    </div>
  </div>
</template>
