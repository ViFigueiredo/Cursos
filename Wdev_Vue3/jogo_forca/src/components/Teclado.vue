<template>
  <div class="teclado">
    <button
      class="teclado-botao"
      v-for="(letra, key) in 'abcdefghijklmnopqrstuvwxyz'"
      :key="key"
      :disabled="verificarLetra(letra)"
      @click="jogar(letra)"
    >
      {{ letra }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'Teclado',
  data() {
    return {}
  },
  components: {},
  methods: {},
  props: {
    letras: Array,
    verificarLetra: Function,
    jogar: Function,
  },
  emits: [],
}
</script>

<style scoped>
.teclado {
  max-width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.teclado-botao {
  width: 50px;
  margin: 5px;
  text-transform: uppercase;
  justify-content: center;
  text-align: center;
}
</style>
