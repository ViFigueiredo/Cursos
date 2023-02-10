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
    ADD_PRODUCT(state, payload) {
      const existingProducts = state.cart.find((o) => o.id === payload.id);
      if (existingProducts) return (existingProducts.qty += 1);
      payload.qty = 1;
      state.cart.push(payload);
    },
    REMOVE_PRODUCT(state, payload) {
      const existingProducts = state.cart.find((o) => o.id === payload.id);
      if (existingProducts && existingProducts.qty > 1) {
        return (existingProducts.qty -= 1);
      } else {
        const idx = state.cart.findIndex((o) => o.id === payload.id);
        state.cart.splice(idx);
      }
    },

    /* User */
    SAVE_FIRST_NAME(state, payload) {
      state.user.first_name = payload;
      // console.log("state: ", state);
      // console.log("payload mutation: ", payload);
    },
    SAVE_LAST_NAME(state, payload) {
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
  getters: {
    fullName(state) {
      return `${state.user.first_name} ${state.user.last_name}`;
    },
  },
  modules: {},
});
