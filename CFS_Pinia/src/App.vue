<script setup>
import CounterComponents from "./components/CounterComponents.vue";
import { useCounterStore } from "./stores/counter";
const counter = useCounterStore();
console.log(counter);
</script>

<template>
  <div class="app">
    <h1>Aprendendo Pinia com Context API</h1>
    {{ counter.showCount }}
    <button @click="counter.increment">Incrementar</button>

    <br />
    <br />
    <br />
    <hr />

    <CounterComponents />
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
