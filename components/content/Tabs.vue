<template>
  <NTabs default-value="oasis">
    <template #prefix>
      Prefix
    </template>
    <NTabPane name="oasis" tab="Oasis">
      <slot name="oasis"/>
    </NTabPane>
    <NTabPane name="the beatles" tab="the Beatles">
      <slot/>
    </NTabPane>
    <NTabPane name="jay chou" tab="Jay Chou">
      <slot/>
    </NTabPane>
    <template #suffix>
      <slot/>
    </template>
  </NTabs>
</template>

<script>
import {NTabs, NTabPane} from 'naive-ui';
</script>