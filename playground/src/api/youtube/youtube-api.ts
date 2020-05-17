import axios from 'axios'
import { youtube as YOUTUBE_KEY } from '../api-config.json'

const DEFAULT_PARAMS = {
  key: YOUTUBE_KEY
}

const api = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3'
})

api.interceptors.request.use(cfg => {
  cfg.params = { ...cfg.params, ...DEFAULT_PARAMS }
  return cfg
})

export default api
