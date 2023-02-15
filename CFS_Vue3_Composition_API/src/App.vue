<script setup>
import {ref} from 'vue'
const count = ref(0)

function increment() {
  count.value++
}

function decrement() {
  count.value--
}
</script>

<template>
  <h2> APIs </h2>
  {{ count }}
  <button @click="increment"> Add </button>
  <button @click="decrement"> Remove </button>
</template>

<style scoped>

</style>
