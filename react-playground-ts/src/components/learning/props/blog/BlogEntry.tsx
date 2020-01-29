import React from 'react'
import { Comment, Avatar } from 'antd'

interface BlogEntryProps {
  author: string
  datetime: string
  avatar: string
  content: string
}

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
