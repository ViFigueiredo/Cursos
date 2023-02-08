<template>
  <div>
    <div>
      <div class="container mx-auto">
        <h1 class="text-lg font-bold">
          Produtos
        </h1>
        <NuxtLink to="/produtos/produto-a">
          Produto A
        </NuxtLink>
        <NuxtLink to="/produtos/produto-b">
          Produto B
        </NuxtLink>

        <br><br>

        <div v-for="post in posts" :key="post.id" class="border-b border-gray-400 py-3">
          {{ post.title }}
        </div>

        <!-- <br><br>

        <pre>
          {{ posts }}
        </pre> -->

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi magni molestias praesentium rem tenetur!
          Aliquid aperiam at dicta error est eum iste magni minus nihil non quisquam sit, unde voluptate.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',

  /* mesclado com data() e não acessa o this -> executa antes do componente ser carregado (bloqueia a rota) */
  async asyncData ({ $axios }) {
    const posts = await $axios.$get('/posts?_limit=5')

    // async asyncData (context) {
    //   console.log(context)

    //   /* ex. de ajax */
    //   await new Promise((resolve) => {
    //     setTimeout(() => {
    //       resolve()
    //       console.log('promise resolvida')
    //     }, 3000)
    //   })

    return {
      posts
    }
  },

  data () {
    return {}
  }

}
</script>
