import * as types from './mutation-types'

export const setCurrentTrace = ({ commit }, current) => {
  commit(types.SET_CURRENT_TRACE, current)
}
