import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: 'Vue测试项目',
    count: 0
  },
  mutations: {
    plus: function (state, num) {
      state.count += num
    },
    subtract: function (state, num) {
      state.count -= num
    },
    clear: function (state) {
      state.count = 0
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
