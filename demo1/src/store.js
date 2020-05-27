import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    plus: function (state, num) {
      state.count += num
    }
  },
  actions: {
    addAsync (context, num) {
      setTimeout(() => {
        context.commit('plus', num)
      }, (1000))
    }
  }
})
