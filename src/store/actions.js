import * as api from "@/api";

const actions = {
  //resume
  FETCH_BOARD({commit}) {
    return api.board.fetch('experience').then(data => {
      commit('SET_BOARD', data.reverse())
    })
  },

  // fake board
  LOGIN({commit}, {email, password}) {
    return api.authFake.login(email, password).then(data => {
      console.log(data)
      commit('LOGIN', data.token)
    })
  },
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
  }
}

export default actions