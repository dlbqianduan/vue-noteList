import Vue from 'vue'
import Vuex from 'vuex'
require('@/mock')
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    showInput: false,
    inputArr: []
  },
  getters: {
  },
  mutations: {
    addInfo (state, inputInfo) {
      state.inputArr.push({cParagraph: inputInfo, delShow: false, id: state.inputArr.length})
      state.showInput = false
      console.log(state.inputArr)
    },
    dell (state, index) {
      console.log(index)
      state.inputArr.splice(parseInt(index), 1)
      console.log(state.inputArr)
    }
  },
  actions: {

  }

})
