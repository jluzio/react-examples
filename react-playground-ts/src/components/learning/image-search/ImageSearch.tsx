import React from 'react'
import { Card } from 'antd'
import { Subject, Subscription, Observable } from 'rxjs'
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators'
import { ajax } from 'rxjs/ajax'
import ImageList from './ImageList'
import SearchBar from './SearchBar'
import {
  ImageResults,
  ImageSearchFilter,
  JsonPlaceholderPhotos
} from './models'

type Props = {}
interface State {
  results: ImageResults
}

export default class ImageSearch extends React.Component<Props, State> {
  searchSubject = new Subject<string>()

  subscriptions: Subscription[] = []

  constructor(props: Props) {
    super(props)
    this.state = {
      results: []
    }
  }

  componentDidMount() {
    const throttledSearch$ = this.searchSubject.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(query => this.getImagesJsonPlaceholder(query))
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

  getImagesJsonPlaceholder = (
    query: string
  ): Observable<JsonPlaceholderPhotos> =>
    ajax.getJSON(
      `https://jsonplaceholder.typicode.com/photos?title_like=${query}`
    )

  render() {
    const { results } = this.state
    return (
      <Card title="Image Search" className="learning">
        <SearchBar onSubmit={this.handleSearchBarSubmit} />
        <ImageList images={results} />
      </Card>
    )
  }
}
