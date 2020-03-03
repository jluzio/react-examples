import React from 'react'
import _ from 'lodash'
import fakerService from 'services/faker/lazy-faker-service'
import BlogEntry from './BlogEntry'
import ApprovalCard from './ApprovalCard'
import { BlogEntryData } from './models'

type Props = {}
type State = { entries: BlogEntryData[] }

class BlogEntryList extends React.Component<Props, State> {
  state: State = {
    entries: []
  }

  componentDidMount() {
    fakerService.then(service => {
      this.setState({
        entries: _.range(4).map(() => service.generateBlogEntry())
      })
    })
  }

  render() {
    const { entries } = this.state
    return (
      <div>
        {entries.map(e => (
          <ApprovalCard key={e.datetime}>
            <BlogEntry
              author={e.author}
              datetime={e.datetime}
              avatar={e.author}
              content={e.content}
            />
          </ApprovalCard>
        ))}
      </div>
    )
  }
}

export default BlogEntryList
