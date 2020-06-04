import * as types from '../mutation-types'

const state = {
  current: null,
  inLandpage: true
}

const mutations = {
  [types.SET_CURRENT_TRACE] (state, current) {
    state.current = current
    state.inLandpage = current === '/home'
  }
}

export default {
  state,
  mutations
}
