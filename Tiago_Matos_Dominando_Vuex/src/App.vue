<template>
  <div id="app" class="container mt-5">

    <br>
    <br>
    <br>
    <pre>
      {{ $store.state.users }}
    </pre>

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
                <button  v-if="!!showQty(product.id)" type="button" class="btn btn-sm btn-outline-secondary"
                  @click="REMOVE_PRODUCT(product)">Remover</button>
              </div>
              <small v-if="!!showQty(product.id)" class="text-muted">{{ showQty(product.id) }}</small>
            </div>
          </div>
        </div>
      </div>
    </div>

    <br>

    <pre> {{ cart }}</pre>

    <pre> {{ user }}</pre>

    <br>
    <br>
    <br>
    <br>

    <!-- cenário 1: v-model chama o method{saveName} e salva os dados ao clicar no <button>save</button> -->
    <!-- cenário 2: v-model chama o computed{firstName / lastName} e salva os dados automaticamente-->

    State -> {{ fullName }} <br><br>
    <label for=""> Primeiro Nome </label><br>
    <input class="form-control" type="text" name="" id="" v-model="firstName"><br>

    <label for=""> Sobrenome </label><br>
    <input class="form-control" type="text" name="" id="" v-model="lastName"><br>

    <button class="btn btn-primary" @click.prevent.stop="saveName"> Save </button>
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
      user: state => state.user,
      cart: state => state.cart,
    }),
    ...mapGetters(['fullName']),

    firstName: {
      get() {
        /* pega dados do vuex */
        return this.user.first_name
      },
      set(value) {
        /* pega dados do input */
        this.SAVE_FIRST_NAME(value)
      }
    },
    lastName: {
      get() {
        return this.user.last_name
      },
      set(value) {
        this.SAVE_FIRST_NAME(value)
      }
    },
  },
  methods: {
    ...mapMutations(['ADD_PRODUCT', 'REMOVE_PRODUCT', 'SAVE_FIRST_NAME', 'SAVE_LAST_NAME']),
    ...mapActions(['saveFirstName']),
    saveName() {

      /* action */
      // this.saveFirstName(this.myName);

      /* mutation */
      this.SAVE_FIRST_NAME(this.myName); // sem uso
    },

    addToCart(product) { // sem uso
      this.ADD_PRODUCT(product)
    },

    showQty(id) {
      return this.cart.find(o => o.id === id)?.qty || 0
    }
  }
}
</script>

<style>

</style>
