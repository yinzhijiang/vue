import Vue from 'vue'
import Vuex from 'vuex'
import actions from './action'
import * as getters from './getter'
Vue.use(Vuex)

const state = {
  count: 0
}

const mutations = {
  increment (state, amount) {
    state.count += amount
  },
  subment (state, amount) {
    state.count -= amount
  }
}

// const actions = {
//   increment ({commit, state}) {
//     commit('increment', 1)
//   },
//   subment ({commit, state}) {
//     commit('subment', 1)
//   }
// }

// const getters = {
//   getCount (state) {
//     return state.count
//   }
// }
export default new Vuex.Store({
  state, mutations, actions, getters
})
