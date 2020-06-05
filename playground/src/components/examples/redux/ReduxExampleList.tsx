import React from 'react'
import ExampleListTabbedCard from 'components/common/ExampleListTabbedCard'
import { Tabs } from 'antd'
import TodoListExample from './todo-list/TodoListExample'
import TodoListAdvCloudExample from './todo-list-advanced/CloudExample'
import TodoListAdvLocalExample from './todo-list-advanced/LocalExample'
import SagaExample from './saga/SagaExample'

const { TabPane } = Tabs

const ReduxExampleList: React.FC = () => {
  return (
    <ExampleListTabbedCard tabKey="rdx-k">
      <TabPane key="todo" tab="ToDo">
        <TodoListExample />
      </TabPane>
      <TabPane key="todo-adv-local" tab="ToDo Adv Local">
        <TodoListAdvLocalExample />
      </TabPane>
      <TabPane key="todo-adv-cloud" tab="ToDo Adv Cloud">
        <TodoListAdvCloudExample />
      </TabPane>
      <TabPane key="saga" tab="Saga">
        <SagaExample />
      </TabPane>
    </ExampleListTabbedCard>
  )
}

export default ReduxExampleList
