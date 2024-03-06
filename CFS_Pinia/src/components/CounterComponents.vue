<script setup>
import { useCounterStore } from "../stores/counter";
const counter = useCounterStore();
</script>

<template>
  <div class="app">
    <h1>Aprendendo Pinia com Context API</h1>
    {{ counter.showCount }}
    <button @click="counter.increment">Incrementar</button>
  </div>
</template>
