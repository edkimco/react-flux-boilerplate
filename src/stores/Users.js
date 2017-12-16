// @flow

import { ReduceStore } from 'flux/utils'

import AppDispatcher from '../AppDispatcher'
import * as types from '../constants'

class AuthStore extends ReduceStore {
  getInitialState () {
    return {
      users: []
    }
  }

  reduce (state, action) {
    switch (action.type) {
      case types.GET_USERS:
        return { ...state, users: action.users }
      default:
        return state
    }
  }
}

export default new AuthStore(AppDispatcher)
