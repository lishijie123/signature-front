<script setup>
import { ref } from 'vue'
import { useStore } from '@/store'

defineProps({
  msg: String
})

const count = ref(0)
const store = useStore()

</script>

<template>
  <h1>{{ msg }}</h1>
  <h1>我是Hello组件{{store.message}}</h1>
    
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
