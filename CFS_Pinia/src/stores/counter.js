import { defineStore } from "pinia";

/* option api */
export const useCounterStore = defineStore("counter", {
  /* propriedades reativas - data() */
  state() {
    return {
      count: 0,
    };
  },

  /* methods{} */
  actions: {
    increment() {
      this.count = this.count + 1;
    },
  },

  /* propriedades computadas - computed{} */
  getters: {
    showCount() {
      return "O valor do count é : " + this.count;
    },
  },
});
