import { Tabs } from 'antd'
import React from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'

export interface Props extends RouteComponentProps<{}> {
  tabKey: string
  defaultTab?: string
}

class TabsUsingParamKey<
  P extends Props = Props,
  S = {},
  SS = any
> extends React.Component<P, S, SS> {
  onChange = (activeKey: string) => {
    const { history, location, tabKey } = this.props
    history.push({
      pathname: location.pathname,
      search: new URLSearchParams({ [tabKey]: activeKey }).toString()
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

export default withRouter(TabsUsingParamKey)
