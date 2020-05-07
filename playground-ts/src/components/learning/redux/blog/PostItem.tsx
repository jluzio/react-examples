import React from 'react'
import { Card, Row, Col, Avatar } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import { Post } from './models'
import UserDetails from './UserDetails'

type Props = {
  post: Post
}
const PostItem: React.FC<Props> = (props: Props) => {
  const { post } = props
  return (
    <Card>
      <Row>
        <Col span={4}>
          <Avatar icon={<UserOutlined />} size="large" />
        </Col>
        <Col span={20}>
          <p>{post.body}</p>
          <UserDetails userId={post.userId} />
        </Col>
      </Row>
    </Card>
  )
}

export default PostItem
