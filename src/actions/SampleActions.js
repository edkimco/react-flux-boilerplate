import request from 'superagent'

import AppDispatcher from '../AppDispatcher'
import * as types from '../constants'
import APIS from '../apis'

export default {
  getUsers: async function ({ page, pageSize }) {
    return new Promise((resolve, reject) => (
      request(APIS.USERS.GET_USERS.METHOD, APIS.USERS.GET_USERS.PATH())
        .end((err, res) => {
          if (err) reject(err)
          else {
            AppDispatcher.dispatch({
              type: types.GET_USERS,
              users: res.body
            })

            resolve(res)
          }
        })
    ))
  }
}
