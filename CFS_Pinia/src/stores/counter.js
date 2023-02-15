import { defineStore } from "pinia";
import { ref, computed } from "vue";

/* composition api */
export const useCounterStore = defineStore("counter", () => {
  /* propriedades reativas - data() */
  const count = ref(0);
  // state() {
  //   return {
  //     count: 0,
  //   };
  // },

  /* methods{} */
  function increment() {
    count.value++;
  }
  // actions: {
  //   increment() {
  //     this.count = this.count + 1;
  //   },
  // },

  /* propriedades computadas - computed{} */
  const showCount = computed(() => "O valor do count é: " + count.value);
  // getters: {
  //   showCount() {
  //     return "O valor do count é : " + this.count;
  //   },
  // },

  /* deixa público tudo que queremos utilizar */
  return {
    count,
    increment,
    showCount,
  };
});
