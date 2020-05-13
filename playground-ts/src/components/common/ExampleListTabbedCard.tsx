/* eslint-disable react/prop-types */
import { Card } from 'antd'
import React, { PropsWithChildren } from 'react'
import _ from 'lodash'
import ActiveTabBySearchParamTabs from './ActiveTabBySearchParamTabs'

type Props = React.HTMLAttributes<{}> &
  PropsWithChildren<{
    title?: React.ReactNode
    tabKey: string
    defaultTab?: string
    className?: string
  }>

const ExampleList: React.FC<Props> = (props: Props) => {
  const { children, title, tabKey, defaultTab, className } = props
  const unsortedTabPanes = children as any[]
  const tabPanes = _.sortBy(unsortedTabPanes, t =>
    t.props.tab.toString().toLowerCase()
  )
  return (
    <Card title={title} className={className}>
      <ActiveTabBySearchParamTabs tabKey={tabKey} defaultTab={defaultTab}>
        {tabPanes}
      </ActiveTabBySearchParamTabs>
    </Card>
  )
}

export default ExampleList
