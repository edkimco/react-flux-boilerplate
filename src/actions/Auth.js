import request from 'superagent'

import AppDispatcher from '../AppDispatcher'
import * as types from '../constants'
import APIS from '../apis'

export default {
  logIn: () => {
    AppDispatcher.dispatch({
      type: types.LOGIN,
      user: { id: 1, name: 'hoony' }
    })
  }
}
