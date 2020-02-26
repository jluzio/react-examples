import imageApi from './image-api'
import { JsonPlaceholderPhotos } from './models'

// can also add other key params

class ImageApi {
  api = imageApi

  pageSize = 10

  async photos(
    query: string,
    page: number = 1
  ): Promise<JsonPlaceholderPhotos> {
    return this.api
      .get(`/photos?title_like=${query}&_page=${page}&_limit=${this.pageSize}`)
      .then(response => response.data)
  }
}

export default new ImageApi()
