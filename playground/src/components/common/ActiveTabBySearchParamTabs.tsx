import { Tabs } from 'antd'
import React from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'

interface Props extends RouteComponentProps<{}> {
  tabKey: string
  defaultTab?: string
  tabBarExtraContent?: React.ReactNode
}

class ActiveTabBySearchParamTabs extends React.Component<Props> {
  onChange = (activeKey: string) => {
    const { history, location, tabKey } = this.props
    const searchParams = new URLSearchParams(location.search)
    searchParams.set(tabKey, activeKey)
    history.push({
      pathname: location.pathname,
      search: searchParams.toString()
    })
  }

  render() {
    const {
      location,
      tabKey,
      defaultTab,
      children,
      tabBarExtraContent
    } = this.props
    const params = new URLSearchParams(location.search)
    const defaultActiveKey =
      (params.get(tabKey) as string | undefined) || defaultTab
    return (
      <Tabs
        defaultActiveKey={defaultActiveKey}
        onChange={this.onChange}
        tabBarExtraContent={tabBarExtraContent}
      >
        {children}
      </Tabs>
    )
  }
}

export default withRouter(ActiveTabBySearchParamTabs)
