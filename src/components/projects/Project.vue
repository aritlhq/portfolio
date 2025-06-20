<script setup>
import projectData from "../../assets/data/featured-projects-data.json"
</script>

<template>
  <div v-for="project in projectData.data" :key="project.title">
    <h2 class="text-xl font-bold my-4">{{ project.title }}</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
      <div v-for="item in project.data" :key="item.title">
        <NCard :title="item.title">
          {{ item.description }}
          <template #footer>
            <a :href="item.link" target="_blank">
              <NButton color="#f3ecd5" dashed>
                <p class="text-white">Go to Source</p>
              </NButton>
            </a>
          </template>
        </NCard>
      </div>
    </div>
  </div>
</template>
