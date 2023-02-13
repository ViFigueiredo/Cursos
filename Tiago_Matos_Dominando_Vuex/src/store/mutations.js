export default {
  /* responsanvel por manipular o state (não podemos manipular o state diretamente) */
  /* sync */

  /* Cart */
  ADD_PRODUCT(state, payload) {
    console.log(state.cart);
    const existingProducts = state.cart.content.find((o) => o.id === payload.id);
    if (existingProducts) return (existingProducts.qty += 1);
    payload.qty = 1;
    state.cart.content.push(payload);
  },
  REMOVE_PRODUCT(state, payload) {
    const existingProducts = state.cart.content.find((o) => o.id === payload.id);
    if (existingProducts && existingProducts.qty > 1) {
      return (existingProducts.qty -= 1);
    } else {
      const idx = state.cart.content.findIndex((o) => o.id === payload.id);
      state.cart.content.splice(idx);
    }
  },

  /* User */
  SAVE_FIRST_NAME(state, payload) {
    state.users.first_name = payload;
    // console.log("state: ", state);
    // console.log("payload mutation: ", payload);
  },
  SAVE_LAST_NAME(state, payload) {
    state.users.last_name = payload;
    // console.log("state: ", state);
    // console.log("payload mutation: ", payload);
  },
};
