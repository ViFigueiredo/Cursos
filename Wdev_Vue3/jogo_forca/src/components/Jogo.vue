<template>
  <div class="jogo">
    <Forca :erros="erros" />

    <Palavra :palavra="palavra" :dica="dica" :verificarLetra="verificarLetra" :etapa="etapa" />

    <Teclado
      v-if="etapa === 'jogo'"
      :letras="letras"
      :verificarLetra="verificarLetra"
      :jogar="jogar"
    />

    <Final
      v-if="etapa != 'jogo'"
      :etapa="etapa"
      :texto="etapa === 'ganhador' ? 'Parabéns :)' : 'Perdeu :('"
      :jogarNovamente="jogarNovamente"
    />
  </div>
</template>

<script>
import Forca from '@/components/Forca.vue'
import Palavra from '@/components/Palavra.vue'
import Teclado from '@/components/Teclado.vue'
import Final from '@/components/Final.vue'
export default {
  name: 'Formulario',
  data() {
    return {}
  },
  components: {
    Forca,
    Palavra,
    Teclado,
    Final,
  },
  methods: {},
  props: {
    erros: Number,
    palavra: String,
    dica: String,
    verificarLetra: Function,
    etapa: String,
    letras: Array,
    jogar: Function,
    jogarNovamente: Function,
  },
  emits: [],
}
</script>

<style scoped>
.jogo {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
