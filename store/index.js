import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'
import * as getters from './getters'

Vue.use(Vuex)

const store = () => new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

export default store