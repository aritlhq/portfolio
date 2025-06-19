<script setup>
import {darkTheme} from 'naive-ui';
import AppLayout from "./layouts/AppLayout.vue";
</script>

<template>
  <NConfigProvider :theme="darkTheme">
    <NGlobalStyle/>
    <div class="font-popp">
      <AppLayout>
        <RouterView/>
      </AppLayout>
    </div>
  </NConfigProvider>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Anton&family=Caprasimo&family=Comfortaa:wght@300..700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

.font-popp {
  font-family: 'Poppins', sans-serif;
}
</style>