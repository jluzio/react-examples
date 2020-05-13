import React from 'react'
import { Tabs } from 'antd'
import ExampleListTabbedCard from 'components/common/ExampleListTabbedCard'
import FormikBasic from './FormikBasic'
import FormikSimplified from './FormikSimplified'

const { TabPane } = Tabs

const FormikExampleList: React.FC = () => {
  return (
    <ExampleListTabbedCard title="Formik" tabKey="fe-key">
      <TabPane key="basic" tab="Basic">
        <FormikBasic />
      </TabPane>
      <TabPane key="simplified" tab="Simplified">
        <FormikSimplified />
      </TabPane>
      <TabPane key="more" tab="More">
        ... TODO ...
      </TabPane>
    </ExampleListTabbedCard>
  )
}
export default FormikExampleList
