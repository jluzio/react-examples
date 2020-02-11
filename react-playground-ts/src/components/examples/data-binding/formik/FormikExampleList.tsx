import React from 'react'
import { Tabs, Card } from 'antd'
import ActiveTabBySearchParamTabs from 'components/common/ActiveTabBySearchParamTabs'
import FormikBasic from './FormikBasic'
import FormikSimplified from './FormikSimplified'

const { TabPane } = Tabs

const FormikExampleList: React.FC = () => {
  return (
    <Card title="Formik" className="example">
      <ActiveTabBySearchParamTabs tabKey="fe-key">
        <TabPane key="basic" tab="Basic">
          <FormikBasic />
        </TabPane>
        <TabPane key="simplified" tab="Simplified">
          <FormikSimplified />
        </TabPane>
        <TabPane key="more" tab="More">
          ... TODO ...
        </TabPane>
      </ActiveTabBySearchParamTabs>
    </Card>
  )
}
export default FormikExampleList
