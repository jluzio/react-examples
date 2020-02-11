import { Tabs } from 'antd'
import React from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'

export interface Props extends RouteComponentProps<{}> {
  tabKey: string
  defaultTab?: string
}

class ActiveTabBySearchParamTabs<
  P extends Props = Props,
  S = {},
  SS = any
> extends React.Component<P, S, SS> {
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
    const { location, tabKey, defaultTab, children } = this.props
    const params = new URLSearchParams(location.search)
    const defaultActiveKey =
      (params.get(tabKey) as string | undefined) || defaultTab
    return (
      <Tabs defaultActiveKey={defaultActiveKey} onChange={this.onChange}>
        {children}
      </Tabs>
    )
  }
}

export default withRouter(ActiveTabBySearchParamTabs)
