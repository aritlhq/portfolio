<script setup lang="ts">
const {data: allPosts} = await useAsyncData('blog', () => queryCollection('blog').order('date', 'DESC').all())
</script>

<template>
  <div v-for="post in allPosts" :key="post.id">
    <NuxtLink :to="post.path">
      <h1>{{ post.title }}</h1>
      <p>{{ post.description }}</p>
    </NuxtLink>
  </div>
</template>