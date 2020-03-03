import React from 'react'
import { Card } from 'antd'
// import BlogEntryList from './DefaultBlogEntryList'
import BlogEntryList from './CodeSplitBlogEntryList'

const BlogExample: React.FC = () => {
  return (
    <Card title="Blog" className="learning">
      <BlogEntryList />
    </Card>
  )
}

export default BlogExample
