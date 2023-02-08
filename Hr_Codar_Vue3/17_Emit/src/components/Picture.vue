<template>
    <div>
        <!-- forma do v-bind resumida -->
        <img :src="avatar" :alt="descricao">
        <MudarAvatar @mudar-imagem="trocarImagem" />
    </div>
</template>

<script>
import MudarAvatar from './MudarAvatar.vue';
export default {
    name: 'Picture',
    components: {
        MudarAvatar
    },
    methods: {
        trocarImagem() {
            console.log('Mudando imagem...');
            this.avatar = 'img/perfil2.jpg'; // dir raiz -> /public
        }
    },
    data() {
        return {
            avatar: 'img/perfil.jpg', // dir raiz -> /public
            descricao: 'Vinicius Figueiredo'
        }
    },
};
</script>

<style scoped>
img {
    width: 20%;
    border-radius: 50%;
}
</style>