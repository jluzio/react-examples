import React from 'react'
import { Tabs } from 'antd'
import ExampleListTabbedCard from 'components/common/ExampleListTabbedCard'
import FormikDefaultExample from './FormikDefaultExample'
import FormikValidationSchemaExample from './FormikValidationSchemaExample'
import FormikFieldExample from './FormikFieldExample'

const { TabPane } = Tabs

const FormikExampleList: React.FC = () => {
  return (
    <ExampleListTabbedCard title="Formik" tabKey="fe-key">
      <TabPane key="default" tab="Default">
        <FormikDefaultExample />
      </TabPane>
      <TabPane key="field" tab="Field">
        <FormikFieldExample />
      </TabPane>
      <TabPane key="val-schema" tab="Validation Schema">
        <FormikValidationSchemaExample />
      </TabPane>
    </ExampleListTabbedCard>
  )
}
export default FormikExampleList
