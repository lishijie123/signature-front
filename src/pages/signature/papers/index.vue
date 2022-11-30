<script setup>
  import { ref } from 'vue';
  let activeKey = ref('1');
</script>

<template>
  <a-tabs v-model:activeKey="activeKey">
    <a-tab-pane key="1" tab="本地文件发起签署/模板发起签署">Content of Tab Pane 1</a-tab-pane>
  </a-tabs>
</template>
