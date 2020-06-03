/* eslint-disable react/react-in-jsx-scope */
import React, { useState } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { DeleteOutlined } from '@ant-design/icons'
import { Card, Button, Form, Radio, List } from 'antd'
import './transition-group.css'
import { v4 as uuid } from 'uuid'

const TransitionGroupExample: React.FC = () => {
  const [items, setItems] = useState([
    { id: uuid(), text: 'Buy eggs' },
    { id: uuid(), text: 'Pay bills' },
    { id: uuid(), text: 'Invite friends over' },
    { id: uuid(), text: 'Fix the TV' }
  ])
  return (
    <Card
      actions={[
        <Button
          onClick={() => {
            const text = prompt('Enter some text')
            if (text) {
              setItems([...items, { id: uuid(), text }])
            }
          }}
        >
          Add Item
        </Button>
      ]}
    >
      <div className="main">
        <TransitionGroup className="todo-list">
          <List>
            {items.map(({ id, text }) => (
              <CSSTransition key={id} timeout={500} classNames="item">
                <List.Item
                  key={id}
                  actions={[
                    <Button
                      danger
                      onClick={() =>
                        setItems(items.filter(item => item.id !== id))
                      }
                      icon={<DeleteOutlined />}
                    />
                  ]}
                >
                  <p>{text}</p>
                </List.Item>
              </CSSTransition>
            ))}
          </List>
        </TransitionGroup>
      </div>
    </Card>
  )
}

export default TransitionGroupExample
