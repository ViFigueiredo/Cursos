<template>
    <div>
        <h2> Meu Formulário </h2>
        <form action="" @submit="enviarFormulario($event)">
            <div><input type="text" placeholder="Seu nome..." v-model="name"></div>
            <div><input type="text" placeholder="Seu e-mail..." v-model="email"></div>
            <div><button type="submit">Enviar</button></div>
        </form>
    </div>
</template>

<script>
export default {
    name: 'Form',
    components: {},
    data() {
        return {
            name: '',
            email: ''
        }
    },
    methods: {
        enviarFormulario(e){
            e.preventDefault();
            const name = this.name;
            const email = this.email;
            console.log('Formulário enviado!');
            console.log('Nome é: ' + name);
            console.log('E-mail é: ' + email);
        }
    },
};
</script>

<style scoped>

</style>