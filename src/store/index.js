import Vue from 'vue'
import Vuex from 'vuex'
import * as api from "@/api";

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    // fake board
    isViewPost: false,
    isWritePost: false,
    post: {},
    posts: [],

    //resume
    board: []
  },
  mutations: {
    // fake board
    SET_IS_VIEW_POST (state, toggle) {
      state.isViewPost = toggle
    },
    SET_IS_WRITE_POST (state, toggle) {
      state.isWritePost = toggle
    },
    SET_POST (state, data) {
      state.post = data
    },
    SET_POSTS (state, data) {
      state.posts = data
    },

    //resume
    SET_BOARD (state, data) {
      state.board = data
    }
  },
  actions: {
    // fake board
    ADD_POST (context, {title, body, userId}) {
      console.dir(context)
      return api.boardFake.create({title, body, userId})
    },
    FETCH_POST({commit}, id) {
      return api.boardFake.fetch(id).then(data => {
        commit('SET_POST', data)
      })
    },
    FETCH_POSTS({commit}) {
      return api.boardFake.fetch().then(data => {
        commit('SET_POSTS', data)
      })
    },

    //resume
    FETCH_BOARD({commit}) {
      return api.board.fetch('experience').then(data => {
        commit('SET_BOARD', data.reverse())
      })
    }
  }
})

export default store