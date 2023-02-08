<template>
    <div v-if="esta_trabalhando">
        <p> Estou trabalhando no momento. </p>
        <p> Utilizo as seguintes tecnologias: </p>
        <ul>
            <li> Javascript </li>
            <li> TypeScript </li>
            <li> NodeJS </li>
            <li> VueJS </li>
            <li> NuxtJS </li>
        </ul>
    </div>
    <div v-else>
        <p> Estou em busca de novas oportunidades. </p>
        <p v-show="mostrar_email"> Mande uma mensagem para: {{ email }}</p>
        <p> Para acessar meu portifólio basta <a v-bind:href="meu_link" target="_blank">clicar aqui</a>. </p>
        <Picture/>
    </div>
</template>
 
<script>
import Picture from './Picture.vue';
export default {
    name: 'Info',
    components: {
        Picture
    },
    data() {
        return {
            esta_trabalhando: false,
            mostrar_email: true,
            email: 'vifigcode@gmail.com',
            meu_link: 'https://google.com.br'
        }
    },
};
</script>
 
<style scoped>

</style>