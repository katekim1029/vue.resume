const mutations = {
  //resume
  SET_BOARD (state, data) {
    state.board = data
  },
  SET_CARD (state, { id, data}) {
    state.card = data.find(elem => elem.id === id)
  },

  // fake board
  LOGIN (state, token) {
    if(!token) return;
    state.token = token
    localStorage.setItem('token', token)
  },
  LOGOUT (state) {
    state.token = null
    delete localStorage.token
  },
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
  }
}

export default mutations