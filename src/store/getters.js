const getters = {
  // fake board
  isAuth (state) {
    return !!state.token
  }
}

export default getters