import { api } from './config'

const API_PATH = `${api.host}:${api.port}/${api.prefix}`

export default {
  USERS: {
    GET_USERS: {
      METHOD: 'GET',
      PATH: () => `${API_PATH}/users`
    }
  }
};
