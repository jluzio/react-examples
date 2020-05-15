import React from 'react'
import { Card } from 'antd'
import { Subject, Subscription, Observable, from } from 'rxjs'
import {
  debounceTime,
  distinctUntilChanged,
  switchMap,
  delay
} from 'rxjs/operators'
import { ajax } from 'rxjs/ajax'
import { ResourceStatus } from 'models/core'
import { resourceStatusOperator } from 'services/rx/operators'
import ListContentLoader from 'components/common/ListContentLoader'
import ImageList from './ImageList'
import SearchBar from './SearchBar'
import {
  ImageResults,
  ImageSearchFilter,
  JsonPlaceholderPhotos
} from './models'
import imageService from './image-service'

type Props = {}
interface State {
  results: ImageResults
  resourceStatus: ResourceStatus
}

export default class ImageSearchExample extends React.Component<Props, State> {
  searchSubject = new Subject<string>()

  subscriptions: Subscription[] = []

  imageService = imageService

  constructor(props: Props) {
    super(props)
    this.state = {
      results: [],
      resourceStatus: ResourceStatus.UNDEFINED
    }
  }

  componentDidMount() {
    // const resourceHandler = this.getImagesJsonPlaceholderAxios
    const resourceHandler = this.getImagesJsonPlaceholder
    const throttledSearch$ = this.searchSubject.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(query =>
        resourceHandler(query).pipe(
          delay(1000),
          resourceStatusOperator(status =>
            this.setState({ resourceStatus: status })
          )
        )
      )
    )
    const searchSubscription$ = throttledSearch$.subscribe(photos => {
      this.setState({
        results: photos
      })
    })
    this.subscriptions = [searchSubscription$]
  }

  componentWillUnmount() {
    this.subscriptions.forEach(s => s.unsubscribe())
  }

  handleSearchBarSubmit = (f: ImageSearchFilter) => {
    this.searchSubject.next(f.searchText)
  }

  getImagesJsonPlaceholderObservableAjax = (
    query: string
  ): Observable<JsonPlaceholderPhotos> =>
    ajax.getJSON(
      `https://jsonplaceholder.typicode.com/photos?title_like=${query}`
    )

  getImagesJsonPlaceholder = (
    query: string
  ): Observable<JsonPlaceholderPhotos> => from(this.imageService.photos(query))

  render() {
    const { results, resourceStatus } = this.state
    return (
      <Card title="Image Search" className="learning">
        <SearchBar onSubmit={this.handleSearchBarSubmit} />
        <p>Status: {resourceStatus}</p>
        {resourceStatus === ResourceStatus.PENDING && <ListContentLoader />}
        {resourceStatus === ResourceStatus.DEFINED && (
          <ImageList images={results} />
        )}
      </Card>
    )
  }
}
