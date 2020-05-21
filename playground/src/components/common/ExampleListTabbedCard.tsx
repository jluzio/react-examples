/* eslint-disable react/prop-types */
import { Card } from 'antd'
import { TabPaneProps } from 'antd/lib/tabs'
import React, { PropsWithChildren } from 'react'
import _ from 'lodash'
import ActiveTabBySearchParamTabs from './ActiveTabBySearchParamTabs'
import AutoCompleteFixedValues, { Option } from './AutoCompleteFixedValues'

type Props = PropsWithChildren<{
  title?: React.ReactNode
  tabKey: string
  defaultTab?: string
  className?: string
  sortTabsByName?: boolean
}>

type TabPaneElement = React.ReactElement<TabPaneProps>

const ExampleList: React.FC<Props> = (props: Props) => {
  const {
    children,
    title,
    tabKey,
    defaultTab,
    className,
    sortTabsByName
  } = props
  let tabPanes: React.ReactNode = children
  let autoCompleteValues: Option[] = []
  const sortFunc = (t: TabPaneElement) => t.props.tab?.toString().toLowerCase()

  if (Array.isArray(children)) {
    const typedChildren = children as TabPaneElement[]
    if (sortTabsByName ?? true) {
      tabPanes = _.sortBy(typedChildren, sortFunc)
    }
    autoCompleteValues = _.sortBy(typedChildren, sortFunc).map(
      t => ({ value: t.props.key, label: t.props.tab } as Option)
    )
  }

  return (
    <Card title={title} className={className}>
      <ActiveTabBySearchParamTabs
        tabKey={tabKey}
        defaultTab={defaultTab}
        tabBarExtraContent={
          <AutoCompleteFixedValues values={autoCompleteValues} />
        }
      >
        {tabPanes}
      </ActiveTabBySearchParamTabs>
    </Card>
  )
}

export default ExampleList
