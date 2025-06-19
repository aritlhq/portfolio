<script setup>
import educationData from "../../assets/data/education-data.json"
import DotCircleRegular from "../../assets/icones/DotCircleRegular.vue";
</script>

<template>
  <div
      v-for="category in educationData.data"
      :key="category.title"
  >
    <h2 class="text-md lg:text-2xl">{{ category.title }}</h2>

    <!-- Tambahkan wrapper di sini -->
    <div class="timeline-wrapper">
      <NTimeline size="large">
        <NTimelineItem
            v-for="(item, index) in category.data"
            :key="index"
            :title="item.title"
            :content="item.content"
            :time="item.time"
            :type="item.type || undefined"
            :line-type="item['line-type'] || undefined"
            :color="item.type === 'success' ? '#f3ecd5' : undefined"
        >
          <template v-if="item.type === 'success'" #icon>
            <n-icon>
              <DotCircleRegular/>
            </n-icon>
          </template>
        </NTimelineItem>
      </NTimeline>
    </div>
  </div>
</template>
