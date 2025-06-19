<script setup>
import { darkTheme } from 'naive-ui'
import AppLayout from "./layouts/AppLayout.vue"
</script>

<template>
  <NConfigProvider :theme="darkTheme">
    <NGlobalStyle />
    <div class="font-popp">
      <AppLayout>
        <NModalProvider>
          <RouterView />
        </NModalProvider>
      </AppLayout>
    </div>
  </NConfigProvider>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Anton&family=Caprasimo&family=Comfortaa:wght@300..700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

.font-popp {
  font-family: 'Poppins', sans-serif;
}

/* Timeline Title | Default (Mobile First) */
.n-timeline-item-content__title {
  font-size: 16px !important;
  color: rgba(255, 255, 255, 0.9) !important;
  font-weight: 500 !important;
}

/* Timeline Content */
.n-timeline-item-content__content {
  font-size: 14px !important;
  color: rgba(255, 255, 255, 0.8) !important;
}

/* Timeline Meta */
.n-timeline-item-content__meta {
  font-size: 12px !important;
  color: rgba(255, 255, 255, 0.6) !important;
  font-style: italic;
}

/* Tablet (≥640px) */
@media (min-width: 640px) {
  .n-timeline-item-content__title {
    font-size: 18px !important;
  }
  .n-timeline-item-content__content {
    font-size: 15px !important;
  }
  .n-timeline-item-content__meta {
    font-size: 13px !important;
  }
}

/* Desktop (≥768px) */
@media (min-width: 768px) {
  .n-timeline-item-content__title {
    font-size: 20px !important;
  }
  .n-timeline-item-content__content {
    font-size: 16px !important;
  }
  .n-timeline-item-content__meta {
    font-size: 14px !important;
  }
}

@media (min-width: 1024px) {
  .n-timeline-item-content__title {
    font-size: 20px !important;
  }
  .n-timeline-item-content__content {
    font-size: 16px !important;
  }
  .n-timeline-item-content__meta {
    font-size: 14px !important;
  }
}
</style>
