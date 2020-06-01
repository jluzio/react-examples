/* eslint-disable react/prop-types */
import { Card } from 'antd'
import { TabPaneProps } from 'rc-tabs/lib/sugar/TabPane'
import React, { PropsWithChildren, useState } from 'react'
import _ from 'lodash'
import ActiveTabBySearchParamTabs from './ActiveTabBySearchParamTabs'
import AutoCompleteListValues, { Option } from './AutoCompleteListValues'

type Props = PropsWithChildren<{
  title?: React.ReactNode
  tabKey: string
  defaultActiveKey?: string
  className?: string
  sortTabsByName?: boolean
}>

type TabPaneElement = React.ReactElement<TabPaneProps>

const ExampleList: React.FC<Props> = ({
  children,
  title,
  tabKey,
  defaultActiveKey,
  className,
  sortTabsByName
}: Props) => {
  const [
    selectedTabAutoComplete,
    setSelectedTabAutoComplete
  ] = useState<Option | null>(null)
  const [activeKey, setActiveKey] = useState<string | undefined>()

  const handleSelectTabAutoComplete = (selected: Option | null) => {
    setSelectedTabAutoComplete(selected)
    setActiveKey(selected?.value)
  }

  const handleSelectActiveKey = (key: string | undefined) => {
    setActiveKey(key)
  }

  let tabPanes: React.ReactNode = children
  let autoCompleteValues: Option[] = []
  const sortFunc = (tabPane: TabPaneElement) =>
    tabPane.props.tab?.toString().toLowerCase()

  const typedChildren = (Array.isArray(children)
    ? children
    : [children]) as TabPaneElement[]
  const sortedTabPanes = _.sortBy(typedChildren, sortFunc)
  if (sortTabsByName ?? true) {
    tabPanes = sortedTabPanes
  }
  autoCompleteValues = sortedTabPanes.map(
    tabPane => ({ value: tabPane.key, label: tabPane.props.tab } as Option)
  )

  return (
    <Card title={title} className={className}>
      <ActiveTabBySearchParamTabs
        defaultActiveKey={defaultActiveKey}
        activeKey={activeKey}
        onChange={handleSelectActiveKey}
        tabKey={tabKey}
        tabBarExtraContent={
          <AutoCompleteListValues
            values={autoCompleteValues}
            defaultValue={selectedTabAutoComplete}
            onSelect={handleSelectTabAutoComplete}
            style={{ width: '200px' }}
            placeholder="Go to..."
          />
        }
      >
        {tabPanes}
      </ActiveTabBySearchParamTabs>
    </Card>
  )
}

export default ExampleList
