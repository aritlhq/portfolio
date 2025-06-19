<script setup>
import {useRoute} from "vue-router";

const route = useRoute();
const fullUrl = window.location.origin + route.fullPath;
</script>

<template>
  <div>
    <p>Current URL: {{ fullUrl }}</p>
  </div>
</template>
