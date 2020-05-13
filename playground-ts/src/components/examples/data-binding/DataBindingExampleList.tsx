import React from 'react'
import ExampleListTabbedCard from 'components/common/ExampleListTabbedCard'
import { Tabs } from 'antd'
import FormikExampleList from './formik/FormikExampleList'
import ReactHookFormExampleList from './react-hook-form/ReactHookFormExampleList'
import ReduxFormExampleList from './redux-form/ReduxFormExampleList'
import AntDesignExampleList from './ant-design/AntDesignExampleList'
import ValidationExampleList from './validation/ValidationExampleList'

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
    <TabPane key="adf" tab="Ant Design">
      <AntDesignExampleList />
    </TabPane>
    <TabPane key="val" tab="Validation">
      <ValidationExampleList />
    </TabPane>
  </ExampleListTabbedCard>
)

export default DataBindingExampleList
