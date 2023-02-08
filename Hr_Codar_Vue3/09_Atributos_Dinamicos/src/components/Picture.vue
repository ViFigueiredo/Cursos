<template>
    <div>
        <!-- forma do v-bind resumida -->
        <img :src="avatar" :alt="descricao"> 
    </div>
</template>

<script>
export default {
    name: 'Picture',
    components: {},
    data() {
        return {
            avatar:'perfil.jpg', // dir raiz -> /public
            descricao: 'Vinicius Figueiredo'
        }
    },
};
</script>

<style scoped>

</style>