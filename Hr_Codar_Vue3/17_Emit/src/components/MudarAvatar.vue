<template>
    <div>
        <button @click="$emit('mudarImagem')"> Trocar imagem do perfil </button>
    </div>
</template>

<script>
export default {
    name: 'MudarAvatar',
    components: {},
    methods: {},
    props: {},
    emits: ['mudarImagem'],
    data() {
        return {}
    },
};
</script>

<style scoped>

</style>