import React from 'react'
import ExampleListTabbedCard from 'components/common/ExampleListTabbedCard'
import { Tabs } from 'antd'

const TodoListExample = React.lazy(() => import('./todo-list/TodoListExample'))
const TodoListAdvCloudExample = React.lazy(() =>
  import('./todo-list-advanced/CloudExample')
)
const TodoListAdvLocalExample = React.lazy(() =>
  import('./todo-list-advanced/LocalExample')
)
const SagaExample = React.lazy(() => import('./saga/SagaExample'))
const ObservableExample = React.lazy(() =>
  import('./observable/ObservableExample')
)

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
      <TabPane key="observable" tab="Observable">
        <ObservableExample />
      </TabPane>
    </ExampleListTabbedCard>
  )
}

export default ReduxExampleList
