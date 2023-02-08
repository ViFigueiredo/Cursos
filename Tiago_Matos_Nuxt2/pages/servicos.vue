<template>
  <div>
    <h1 class="text-lg font-bold">
      Serviços
    </h1>

    <NuxtLink to="/servicos/desenvolvimento-de-sites">
      Desenvolvimento de sites
    </NuxtLink>

    <NuxtLink to="/servicos/marketing-digital">
      Marketing digital
    </NuxtLink>

    <br><br>

    <pre>
      {{ $fetchState }}
    </pre>

    <div v-if="$fetchState.pending">
      Carregando...
    </div>

    <div v-else>
      <div v-for="user in users" :key="user.id" class="border-b border-gray-400 py-4">
        {{ user.username }}
      </div>
    </div>

    <br><br>

    <NuxtChild />
  </div>
</template>

<script>
export default {
  name: '',

  data () {
    return {
      users: [],
      title: []
    }
  },

  /* acessa o this  e carrega as informações após o carregamento do componente */
  async fetch () {
    // await new Promise((resolve) => {
    //   setTimeout(() => {
    //     resolve()
    //   }, 3000)
    // })

    // console.log(this)

    this.users = await this.$axios.$get('/users?_limit=3')
  },

  // middleware () {
  //   console.log('middleware serviços')
  // },

  /* SEO */
  head () {
    return {
      title: this.title,
      meta: [
        {
          hid: 'Minha descrição',
          name: 'Minha descrição',
          content: 'Minha descrição do serviço.'
        }
      ],
      bodyAttrs: {
        class: 'bg-gray-400'
      }
    }
  },

  created () {
    this.getTitle()
  },

  methods: {
    getTitle () {
      setTimeout(() => {
        this.title = 'Serviços'
      }, 3000)
    }
  }
}
</script>
