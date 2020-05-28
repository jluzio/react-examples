/* eslint-disable no-useless-constructor */
import jsonPlaceholderApi from 'api/json-placeholder-api'
import StandardGenericResourceService from '../standard-generic-resource-service'

class GenericResourceService extends StandardGenericResourceService {
  constructor() {
    super(jsonPlaceholderApi)
  }
}

export default new GenericResourceService()
