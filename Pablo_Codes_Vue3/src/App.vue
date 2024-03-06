<script setup>
import Cabecalho from './components/Cabecalho.vue';
// import Navbar from './components/NavBar.vue';
</script>

<template>
  <header>
    <NavBar></NavBar>
    <component is="NavBar"></component>
    <Cabecalho />
    <Cabecalho></Cabecalho>
    <cabecalho></cabecalho>
  </header>

  <main></main>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

header {
  line-height: 1.5;
}
</style>
