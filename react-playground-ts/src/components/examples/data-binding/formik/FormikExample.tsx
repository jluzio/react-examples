import React from 'react'
import { Tabs, Card } from 'antd'
import TabsUsingParamKey from 'components/common/TabsUsingParamKey'
import FormikBasic from './FormikBasic'
import FormikSimplified from './FormikSimplified'

const { TabPane } = Tabs

const FormikExample: React.FC = () => {
  return (
    <Card title="Formik" className="example">
      <TabsUsingParamKey tabKey="fe-key">
        <TabPane key="basic" tab="Basic">
          <FormikBasic />
        </TabPane>
        <TabPane key="simplified" tab="Simplified">
          <FormikSimplified />
        </TabPane>
        <TabPane key="more" tab="More">
          ... TODO ...
        </TabPane>
      </TabsUsingParamKey>
    </Card>
  )
}
export default FormikExample
