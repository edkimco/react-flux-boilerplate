import config from './config'

const API_PATH = `${config.api.host}:${config.api.port}/${config.api.prefix}`

export const normal = {
  AUTH: {
    LOGIN: {
      method: 'POST',
      path: () => `${API_PATH}/v1.0/login`
    }
  }
}
