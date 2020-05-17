import React from 'react'
import ExampleListTabbedCard from 'components/common/ExampleListTabbedCard'
import { Tabs } from 'antd'
import RhfBasicExample from './RhfBasicExample'
import RhfCustomInputControllerExample from './RhfCustomInputControllerExample'
import RhfCustomInputEffectsExample from './RhfCustomInputEffectsExample'
import RhfValidationSchemaExample from './RhfValidationSchemaExample'

const { TabPane } = Tabs

const ReactHookFormExampleList: React.FC = () => (
  <ExampleListTabbedCard title="React Hook Form" tabKey="rhf-k">
    <TabPane key="basic" tab="Basic">
      <RhfBasicExample />
    </TabPane>
    <TabPane key="ci-ctrl" tab="Custom Input Controller">
      <RhfCustomInputControllerExample />
    </TabPane>
    <TabPane key="ci-effects" tab="Custom Input Effects">
      <RhfCustomInputEffectsExample />
    </TabPane>
    <TabPane key="val-schema" tab="Validation Schema">
      <RhfValidationSchemaExample />
    </TabPane>
  </ExampleListTabbedCard>
)

export default ReactHookFormExampleList
