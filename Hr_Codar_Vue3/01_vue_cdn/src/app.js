const MyNameApp = {
    data(){
        return {
            name: 'Vinicius',
            idade: 29
        }
    }
}

Vue.createApp(MyNameApp).mount('#app')