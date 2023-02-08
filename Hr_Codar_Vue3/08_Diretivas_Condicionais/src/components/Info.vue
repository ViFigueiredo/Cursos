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
    </div>
</template>
 
<script>
export default {
    name: 'Info',
    data() {
        return {
            esta_trabalhando: false,
            mostrar_email: true,
            email: 'vifigcode@gmail.com'
        }
    },
};
</script>
 
<style scoped>

</style>