/* eslint-disable react/prop-types */
import { Card } from 'antd'
import React, { PropsWithChildren } from 'react'
import _ from 'lodash'
import ActiveTabBySearchParamTabs from './ActiveTabBySearchParamTabs'

type Props = PropsWithChildren<{
  title?: React.ReactNode
  tabKey: string
  defaultTab?: string
  className?: string
  sortTabsByName?: boolean
}>

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
  if (Array.isArray(children) && (sortTabsByName ?? true)) {
    tabPanes = _.sortBy(children, (t: React.ReactElement) =>
      t.props.tab.toString().toLowerCase()
    )
  }
  return (
    <Card title={title} className={className}>
      <ActiveTabBySearchParamTabs tabKey={tabKey} defaultTab={defaultTab}>
        {tabPanes}
      </ActiveTabBySearchParamTabs>
    </Card>
  )
}

export default ExampleList
