// @flow

import request from 'superagent';

import AppDispatcher from '../AppDispatcher';
import * as types from '../constants';

export default {
  getUsers: async function ({ page, pageSize }: { page: number, pageSize: number }) {
    AppDispatcher.dispatch({
      type: types.GET_USERS,
      users: []
    })
  }
}
