/* eslint-disable class-methods-use-this */
import YoutubeApi from 'api/youtube/youtube-api'
import * as models from 'api/youtube/models'

class YoutubeService {
  api = YoutubeApi

  search(term: string) {
    return this.api.get<models.SearchListResponse>('/search', {
      params: { part: 'snippet', q: term, maxResults: 5 }
    })
  }

  embeddedVideoUrl(video: models.SearchResource) {
    return `https://www.youtube.com/embed/${video.id.videoId}`
  }
}

export default new YoutubeService()
