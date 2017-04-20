import Vue from 'vue'
import Vuex from 'vuex'
import middlewares from './middlewares'
import login from './login'
import account from './account'
const debug = process.env.NODE_ENV !== 'production'
Vue.use(Vuex)
Vue.config.debug = debug
Vue.config.warnExpressionErrors = false

export default new Vuex.Store({
  modules: {
    login,
    account
  },
  strict: debug,
  middlewares
})