<script setup>
import educationData from "../../assets/data/education-data.json"
</script>

<template>
  <div
      v-for="category in educationData.data"
      :key="category.title"
  >
    <h2 class="text-md lg:text-2xl">{{ category.title }}</h2>
    <NTimeline size="large">
      <NTimelineItem
          v-for="(item, index) in category.data"
          :key="index"
          :title="item.title"
          :content="item.content"
          :time="item.time"
          :type="item.type || undefined"
          :line-type="item['line-type'] || undefined"
      />
    </NTimeline>
  </div>
</template>