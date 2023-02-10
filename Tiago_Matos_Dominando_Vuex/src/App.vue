<template>
  <div id="app" class="container mt-5">

    <div class="row">
      <div class="col" v-for="product in products" :key="product.id">
        <div class="card shadow-sm">
          <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg"
            role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef"
              dy=".3em">Foto</text>
          </svg>
          <div class="card-body">
            <p class="card-text">{{ product.title }}</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <button type="button" class="btn btn-sm btn-outline-secondary"
                  @click="addToCart(product)">Adicionar</button>
              </div>
              <small v-if="!!showQty(product.id)" class="text-muted">{{ showQty(product.id) }}</small>
            </div>
          </div>
        </div>
      </div>
    </div>

    <br>

    <pre> {{ $store.state.cart }}</pre>

    <br>
    <br>
    <br>
    <br>

    <!-- cenário 1: v-model chama o method{saveName} e salva os dados ao clicar no <button>save</button> -->
    <!-- cenário 2: v-model chama o computed{firstName / lastName} e salva os dados automaticamente-->

    State -> {{ $store.state.user.first_name }} {{ $store.state.user.last_name }} <br><br>
    <label for=""> Primeiro Nome </label><br>
    <input class="form-control" type="text" name="" id="" v-model="firstName"><br>

    <label for=""> Sobrenome </label><br>
    <input class="form-control" type="text" name="" id="" v-model="lastName"><br>

    <button class="btn btn-primary" @click.prevent.stop="saveName"> Save </button>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {},
  data() {
    return {
      myName: '',

      /* dados devem retornar de uma API */
      products: [
        {
          id: 1,
          title: 'Produto 1',
        },
        {
          id: 2,
          title: 'Produto 2',
        },
        {
          id: 3,
          title: 'Produto 3',
        },
      ]
    }
  },
  computed: {
    firstName: {
      get() {
        /* pega dados do vuex */
        return this.$store.state.user.first_name
      },
      set(value) {
        /* pega dados do input */
        this.$store.commit('saveFirstName', value)
      }
    },
    lastName: {
      get() {
        return this.$store.state.user.last_name
      },
      set(value) {
        this.$store.commit('saveLastName', value)
      }
    }
  },
  methods: {
    saveName() {

      /* action */
      // this.$store.dispatch('saveFirstName', this.myName);

      /* mutation */
      this.$store.commit('saveFirstName', this.myName);
    },

    addToCart(product) {
      this.$store.commit('addProduct', product)
    },

    showQty(id) {
      return this.$store.state.cart.find(o => o.id === id)?.qty || 0
    }
  }
}
</script>

<style>

</style>
