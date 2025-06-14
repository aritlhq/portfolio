<script setup>
const slug = useRoute().params.slug
const {data: post} = await useAsyncData(`blog-${slug}`, () => {
  return queryCollection('blog').path(`/blog/${slug}`).first()
});

useSeoMeta({
  title: post.value?.title,
  description: post.value?.description
})
</script>

<template>
  <!-- Render the blog post as Prose & Vue components -->
  <ContentRenderer :value="post"/>
</template>
