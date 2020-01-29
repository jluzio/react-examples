import React from 'react'
import faker from 'faker'
import BlogEntry from './BlogEntry'
import ApprovalCard from './ApprovalCard'

const BlogEntryList: React.FC = () => {
  const author = () => faker.name.findName()
  const datetime = () => faker.date.recent().toISOString()
  const avatar = () => faker.image.avatar()
  const content = () => faker.lorem.lines(3)

  return (
    <div>
      <ApprovalCard>
        <BlogEntry
          author={author()}
          datetime={datetime()}
          avatar={avatar()}
          content={content()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <BlogEntry
          author={author()}
          datetime={datetime()}
          avatar={avatar()}
          content={content()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <BlogEntry
          author={author()}
          datetime={datetime()}
          avatar={avatar()}
          content={content()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <BlogEntry
          author={author()}
          datetime={datetime()}
          avatar={avatar()}
          content={content()}
        />
      </ApprovalCard>
    </div>
  )
}

export default BlogEntryList
