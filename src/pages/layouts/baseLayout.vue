<script setup>
  import Menu from '@/components/menu/Menu.vue'
</script>

<template>
  <a-layout style="min-height: 100vh">
    <Menu></Menu>
  <a-layout>
      <a-layout-header style="background: #fff; padding: 0" />
      <a-layout-content style="margin: 0 16px">
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>