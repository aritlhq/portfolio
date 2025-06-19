<script setup>
import skillData from "../../assets/data/programming-data.json"
</script>

<template>
  <div class="mt-15">
    <!--Title-->
    <div
        v-for="category in skillData.data"
        :key="category.title"
    >
      <h2 class="text-md lg:text-2xl">{{ category.title }}</h2>

      <!--Subtitle-->
      <div
          v-for="sub in category.data"
          :key="sub.subtitle"
      >
        <p class="mb-1 text-md lg:text-lg">{{ sub.subtitle }}</p>

        <!--Items-->
        <NScrollbar x-scrollable>
          <div class="flex gap-3" style="white-space: nowrap; padding: 12px">
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