import React from 'react'
import ExampleListTabbedCard from 'components/common/ExampleListTabbedCard'
import { Tabs } from 'antd'
import FormikExampleList from './formik/FormikExampleList'
import ReactHookFormExampleList from './react-hook-form/ReactHookFormExampleList'
import ReduxFormExampleList from './redux-form/ReduxFormExampleList'

const { TabPane } = Tabs

const DataBindingExampleList: React.FC = () => (
  <ExampleListTabbedCard title="Data Binding" tabKey="db-k">
    <TabPane key="formik" tab="Formik">
      <FormikExampleList />
    </TabPane>
    <TabPane key="rhf" tab="React Hook Form">
      <ReactHookFormExampleList />
    </TabPane>
    <TabPane key="rdxf" tab="Redux Form">
      <ReduxFormExampleList />
    </TabPane>
  </ExampleListTabbedCard>
)

export default DataBindingExampleList
