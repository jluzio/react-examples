import React from 'react'
import ExampleListTabbedCard from 'components/common/ExampleListTabbedCard'
import { Tabs } from 'antd'
import TodoListExample from './todo-list/TodoListExample'

const { TabPane } = Tabs

const ReduxExampleList: React.FC = () => {
  return (
    <ExampleListTabbedCard tabKey="rdx-k">
      <TabPane key="todo" tab="ToDo">
        <TodoListExample />
      </TabPane>
    </ExampleListTabbedCard>
  )
}

export default ReduxExampleList
