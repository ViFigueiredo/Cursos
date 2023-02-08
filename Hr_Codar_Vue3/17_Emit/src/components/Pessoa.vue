<template>
    <div>
        <h2> Esta é a descrição da pessoa: {{ nome }} </h2>
        <Info :propEmail="propEmail" :propTrabalhando=false />
    </div>
</template>
 
<script>
import Info from './Info.vue';
export default {
    name: 'Pessoa',
    components: {
        Info
    },
    data() {
        return {
            nome: "Vinicius",
            propEmail: "email_dinamico@email.com",
        }
    },
};
</script>
 
<style scoped>

</style>