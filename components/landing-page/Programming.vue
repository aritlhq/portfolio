<script setup>
import skillData from "~/assets/data/programming-data.json"
</script>

<template>
  <div class="mt-20">
    <!--Title-->
    <div
        v-for="category in skillData.data"
        :key="category.title"
    >
      <h2>{{ category.title }}:</h2>

      <!--Subtitle-->
      <div
          v-for="sub in category.data"
          :key="sub.subtitle"
          class="mb-6"
      >
        <p class="mb-2">{{ sub.subtitle }}</p>

        <!--Items-->
        <NScrollbar x-scrollable>
          <div class="flex gap-4" style="white-space: nowrap; padding: 12px">
            <NButton
                v-for="item in sub.items"
                :key="item"
                tertiary>
              {{ item }}
            </NButton>
          </div>
        </NScrollbar>
      </div>
    </div>
  </div>
</template>