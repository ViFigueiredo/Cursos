<template>
    <h1> Meu nome é: {{ nome }} </h1>
</template>
 
<script>
export default {
    name: 'LifeCycle',
    data(){
        return {
            nome: 'Ainda não sei'
        }
    },
  created(){ // ao iniciar o componente
    setTimeout(() => {
        this.nome = "Vinicius"
    },2000)
    },
  mounted(){ // após o termino de carregamento do componente
    setTimeout(() => {
        this.nome = "Vinicius Figueiredo"
    },4000)
  }
};
</script>
 
<style scoped></style>