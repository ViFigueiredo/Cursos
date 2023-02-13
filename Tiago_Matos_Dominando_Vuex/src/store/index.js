import { createStore } from "vuex";
import getters from './getters'
import actions from './actions'
import mutations from './mutations'
import users from './modules/usuarios'
import cart from './modules/carrinho'

export default createStore({
  mutations,
  actions,
  getters,
  modules: {
    users,
    cart,
  },
});
