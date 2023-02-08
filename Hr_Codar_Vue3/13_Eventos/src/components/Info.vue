<template>
    <div v-if="esta_trabalhando">
        <p> Estou trabalhando no momento. </p>

        <p> Utilizo as seguintes tecnologias para frontend: </p>
        <ul>
            <li v-for="technology in frontend_technologies" :key="technology.id"> {{ technology.language }} </li>
        </ul>

        <p> Utilizo as seguintes tecnologias para backend: </p>
        <ul>
            <li v-for="(technology) in backend_technologies" v-bind:key=index> {{ technology }} </li>
        </ul>
    </div>
    <div v-else>
        <p> Estou em busca de novas oportunidades. </p>
        <div>
            <button @click="showEmail"> {{ textoBotao }} </button>
        </div>
        <p v-show="mostrar_email"> Mande uma mensagem para: {{ email }}</p>
        <p class="teste"> Para acessar meu portifólio basta <a v-bind:href="meu_link" target="_blank">clicar aqui</a>.
        </p>
        <Picture />
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
            esta_trabalhando: true,
            mostrar_email: false,
            email: 'vifigcode@gmail.com',
            meu_link: 'https://google.com.br',
            textoBotao: 'Mostrar e-mail',
            backend_technologies: [
                'TypeScript',
                'NestJS',
                'TypeORM',
                'Swagger'
            ],
            frontend_technologies: [
                { id: 1, language: 'NuxtJS' },
                { id: 2, language: 'TypeScript' },
                { id: 3, language: 'Axios' }
            ]
        }
    },
    methods: {
        showEmail() {
            this.mostrar_email = !this.mostrar_email;
            console.log('Mostrando email...');
            if (!this.mostrar_email) {
                this.textoBotao = 'Mostrar e-mail'
            } else this.textoBotao = 'Esconder e-mail'
        }
    }
};
</script>
 
<style>
.paragrafo-pai {
    color: red;
}
</style>