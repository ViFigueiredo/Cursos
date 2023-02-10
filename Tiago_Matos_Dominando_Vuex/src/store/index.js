import { createStore } from "vuex";

export default createStore({
  strict: true, // não permite salvar dados diretamente no state fora de uma mutation
  state: {
    /* data */
    user: {
      first_name: "Jon",
      last_name: "Snow",
      email: "jon@snow.com",
    },
    cart: [],
  },
  mutations: {
    /* responsanvel por manipular o state (não podemos manipular o state diretamente) */
    /* sync */

    /* Cart */
    addProduct(state, payload) {
      const existingProducts = state.cart.find((o) => o.id === payload.id);
      if (existingProducts) {
        existingProducts.qty += 1;
      } else {
        payload.qty = 1;
        state.cart.push(payload);
      }
    },

    /* User */
    saveFirstName(state, payload) {
      state.user.first_name = payload;
      // console.log("state: ", state);
      // console.log("payload mutation: ", payload);
    },
    saveLastName(state, payload) {
      state.user.last_name = payload;
      // console.log("state: ", state);
      // console.log("payload mutation: ", payload);
    },
  },
  actions: {
    /* logica que permite que as mutations manipulem o state */
    /* async */

    saveFirstName(context, payload) {
      /* context -> puxar dados do state, mutations, etc */
      context.commit("saveFirstName", payload);
      // console.log("payload action: ", payload);
    },
  },
  modules: {},
});
