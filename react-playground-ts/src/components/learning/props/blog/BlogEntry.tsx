import React from 'react'
import { Comment, Avatar } from 'antd'
import { BlogEntryData } from './models'

interface BlogEntryProps extends BlogEntryData {}

const BlogEntry: React.FC<BlogEntryProps> = (props: BlogEntryProps) => {
  const { author, avatar, content, datetime } = props
  return (
    <Comment
      author={author}
      datetime={datetime}
      avatar={<Avatar src={avatar} />}
      content={<p>{content}</p>}
    />
  )
}

export default BlogEntry
