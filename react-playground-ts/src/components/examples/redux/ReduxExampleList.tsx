import React from 'react'
import ActiveTabBySearchParamTabs from 'components/common/ActiveTabBySearchParamTabs'
import { Tabs } from 'antd'
import _ from 'lodash'
import TodoListExample from './todo-list/TodoListExample'

const { TabPane } = Tabs

const ReduxExampleList: React.FC = () => {
  const unsortedTabPanes = [
    <TabPane key="todo" tab="ToDo">
      <TodoListExample />
    </TabPane>
  ]
  const tabPanes = _.sortBy(unsortedTabPanes, t =>
    t.props.tab.toString().toLowerCase()
  )

  return (
    <ActiveTabBySearchParamTabs tabKey="rdx-key">
      {tabPanes}
    </ActiveTabBySearchParamTabs>
  )
}

export default ReduxExampleList