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
                  @click="ADD_PRODUCT(product)">Adicionar</button>
                <button v-if="!!showQty(product.id)" type="button" class="btn btn-sm btn-outline-secondary"
                  @click="REMOVE_PRODUCT(product)">Remover</button>
              </div>
              <small v-if="!!showQty(product.id)" class="text-muted">{{ showQty(product.id) }}</small>
            </div>
          </div>
        </div>
      </div>
    </div>

    <br>
    <br>

    <pre> Carrinho: {{ cart }} </pre>

    <br>

    <div>
      <label for=""> Primeiro Nome </label><br>
      <input class="form-control" type="text" name="" id="" v-model="firstName"><br>

      <label for=""> Sobrenome </label><br>
      <input class="form-control" type="text" name="" id="" v-model="lastName"><br>

      <button class="btn btn-primary" @click.prevent.stop="saveName"> Save </button>

      <br>
      <br>

      State: {{ fullName }} <br><br>
      <pre> Usuários {{ users }}</pre>
      
    </div>

  </div>
</template>

<script>
/* importa o mapeanento do vuex */
import { mapState, mapActions, mapMutations, mapGetters } from 'vuex'
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
    /* mapeando do vuex */
    ...mapState({
      users: state => state.users,
      cart: state => state.cart,
    }),
    ...mapGetters(['fullName']),

    firstName: {
      get() {
        /* pega dados do vuex */
        return this.users.first_name
      },
      set(value) {
        /* pega dados do input */
        this.SAVE_FIRST_NAME(value)
      }
    },
    lastName: {
      get() {
        return this.users.last_name
      },
      set(value) {
        this.SAVE_LAST_NAME(value)
      }
    },
  },
  methods: {
    ...mapMutations(['ADD_PRODUCT', 'REMOVE_PRODUCT', 'SAVE_FIRST_NAME', 'SAVE_LAST_NAME']),
    ...mapActions(['saveFirstName']), // sem uso

    showQty(id) {
      return this.cart.content.find(o => o.id === id)?.qty || 0
    }
  }
}
</script>

<style>

</style>
