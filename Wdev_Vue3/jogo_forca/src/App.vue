<template>
  <div id="app">
    <h1>Jogo da Forca WDEV</h1>
    <section id="inicio" v-if="tela === 'inicio'">
      <Formulario
        v-if="etapa === 'palavra'"
        title="Defina a palavra"
        button="Próximo"
        :action="setPalavra"
        :verificarLetra="verificarLetra"
      />

      <Formulario
        v-if="etapa === 'dica'"
        title="Defina a dica"
        button="Iniciar jogo :)"
        :action="setDica"
      />
    </section>

    <section id="jogo" v-if="tela === 'jogo'">
      <Jogo
        :erros="erros"
        :palavra="palavra"
        :dica="dica"
        :verificarLetra="verificarLetra"
        :etapa="etapa"
        :letras="letras"
        :jogar="jogar"
        :jogarNovamente="jogarNovamente"
      />
    </section>
  </div>
</template>

<script>
import '@/styles/Global.css'
import Formulario from '@/components/Formulario.vue'
import Jogo from '@/components/Jogo.vue'
export default {
  name: 'App',
  data() {
    return {
      tela: 'inicio',
      etapa: 'palavra',
      palavra: '',
      dica: '',
      erros: 0,
      letras: [],
    }
  },
  components: {
    Formulario,
    Jogo,
  },
  methods: {
    setPalavra: function (palavra) {
      this.palavra = palavra
      this.etapa = 'dica'
    },

    setDica: function (dica) {
      this.dica = dica
      this.tela = 'jogo'
      this.etapa = 'jogo'
    },

    verificarLetra: function (letra) {
      return this.letras.find(item => item.toLowerCase() === letra.toLowerCase())
    },

    jogar: function (letra) {
      this.letras.push(letra)
      this.verificarErros(letra)
    },

    verificarErros: function (letra) {
      if (this.palavra.toLowerCase().indexOf(letra.toLowerCase()) >= 0) {
        return this.verificarAcertos()
      }
      this.erros++

      if (this.erros === 6) {
        this.etapa = 'enforcado'
      }
    },

    verificarAcertos: function () {
      let letrasUnicas = [...new Set(this.palavra.split(''))]
      if (letrasUnicas.length === this.letras.length - this.erros) {
        this.etapa = 'ganhador'
      }
    },

    jogarNovamente() {
      this.palavra = ''
      this.dica = ''
      this.erros = 0
      this.letras = []
      this.tela = 'inicio'
      this.etapa = 'palavra'
    },
  },
  props: {},
  emits: [],
}
</script>

<style scoped>
#app {
  width: 100%;
  height: 100%;
  background-color: var(--color-background);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
