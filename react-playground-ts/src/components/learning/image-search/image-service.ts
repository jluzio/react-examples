import imageApi from './image-api'
import { JsonPlaceholderPhotos } from './models'

// can also add other key params

class ImageApi {
  api = imageApi

  async photos(query: string): Promise<JsonPlaceholderPhotos> {
    return this.api
      .get(`/photos?title_like=${query}`)
      .then(response => response.data)
  }
}

export default new ImageApi()
