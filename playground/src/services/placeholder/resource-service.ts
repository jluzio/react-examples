/* eslint-disable no-useless-constructor */
import jsonPlaceholderApi from 'api/json-placeholder-api'
import StandardResourceService from '../standard-resource-service'
import { ResourceId } from './models'

export default class ResourceService<T, ID> extends StandardResourceService<
  T,
  ID
> {
  constructor(resource: ResourceId) {
    super(jsonPlaceholderApi, resource)
  }
}
