import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    /* data */
    user: {
      first_name: "Jon",
      last_name: "Snow",
      email: "jon@snow.com",
    },
  },
  getters: {},
  mutations: {
    /* responsanvel por manipular o state (não podemos manipular o state diretamente) */
    /* sync */

    saveFirstName(state, payload) {
      state.user.first_name = payload
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
