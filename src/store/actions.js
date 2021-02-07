import * as api from "@/api";

const actions = {
  //resume
  FETCH_BOARD({commit}, {id}) {
    console.log('board id: ' + id)
    return api.board.fetch('experience').then(data => {
      commit('SET_BOARD', data.reverse())
    })
  },

  // fake board
  LOGIN({commit}, {email, password}) {
    return api.authFake.login(email, password).then(data => {
      commit('LOGIN', data.token)
    })
  },
  ADD_POST ({dispatch}, {title, body, userId}) {
    return api.boardFake.create({title, body, userId}).then(({id}) => {
      console.log('response id :' + id)
      dispatch('FETCH_POSTS')
    })
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