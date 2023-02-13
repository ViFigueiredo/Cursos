export default {
  /* logica que permite que as mutations manipulem o state */
  /* async */

  saveFirstName(context, payload) {
    /* context -> puxar dados do state, mutations, etc */
    context.commit("saveFirstName", payload);
    // console.log("payload action: ", payload);
  },
};
