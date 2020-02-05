import React from 'react'
import { Tabs, Card } from 'antd'
import FormikBasic from './FormikBasic'
import FormikSimplified from './FormikSimplified'

const { TabPane } = Tabs

const FormikExample: React.FC = () => {
  return (
    <Card title="Formik" className="example">
      <Tabs>
        <TabPane key="basic" tab="Basic">
          <FormikBasic />
        </TabPane>
        <TabPane key="simplified" tab="Simplified">
          <FormikSimplified />
        </TabPane>
      </Tabs>
    </Card>
  )
}
export default FormikExample
