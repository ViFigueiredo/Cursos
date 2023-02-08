<template>
  <div class="final">
    <div :class="`final-texto ${etapa}`">{{ texto }}</div>
    <button class="final-botao" @click="jogarNovamente">Jogar novamente!</button>
  </div>
</template>

<script>
export default {
  name: 'Final',
  data() {
    return {}
  },
  components: {},
  methods: {},
  props: {
    etapa: String,
    texto: String,
    jogarNovamente: Function,
  },
  emits: [],
}
</script>

<style scoped>
.final-texto {
  margin: 20px 0;
  font-size: 24px;
  font-weight: bold;
}

.final-texto.enforcado {
  color: var(--color-text-error);
}

.final-texto.ganhador {
  color: var(--color-text-success);
}
</style>
