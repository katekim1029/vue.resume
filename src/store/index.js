import Vue from 'vue'
import Vuex from 'vuex'
import * as api from "@/api";

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isViewPost: false,
    isWritePost: false,
    post: {},
  },
  mutations: {
    SET_IS_VIEW_POST (state, toggle) {
      state.isViewPost = toggle
    },
    SET_IS_WRITE_POST (state, toggle) {
      state.isWritePost = toggle
    },
    SET_VIEW_POST (state, data) {
      state.post = data
    }
  },
  actions: {
    ADD_POST (context, {title, body, userId}) {
      console.dir(context)
      return api.boardFake.create({title, body, userId})
    },
    FETCH_VIEW_POST({commit}, id) {
      return api.boardFake.fetch(id)
        .then(data => {
          commit('SET_VIEW_POST', data)
      })
    },
  }
})

export default store