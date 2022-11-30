<script setup>
    import { ref } from 'vue'
    const msg = ref('我是Test组件')
</script>

<template>
    <h1>{{msg}}</h1>
</template>