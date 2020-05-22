import { Tabs } from 'antd'
import React, { PropsWithChildren } from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'

type Key = string | undefined

type OwnProps = PropsWithChildren<{
  tabKey: string
  defaultActiveKey?: Key
  activeKey: Key
  onChange: (activeKey: Key) => void
  tabBarExtraContent?: React.ReactNode
}>

type Props = OwnProps & RouteComponentProps
type State = {
  defaultActiveKey: string | undefined
}

class ActiveTabBySearchParamTabs extends React.Component<Props, State> {
  state: State = {
    defaultActiveKey: undefined
  }

  componentDidMount() {
    const { defaultActiveKey, onChange, activeKey } = this.props
    const { activeKeyParam } = this

    this.setState({
      defaultActiveKey: activeKeyParam ?? defaultActiveKey
    })
    if (activeKeyParam !== activeKey) {
      onChange(activeKeyParam)
    }
  }

  componentDidUpdate() {
    this.validateActiveKeyUpdate()
  }

  get activeKeyParam() {
    const { location, tabKey } = this.props
    const params = new URLSearchParams(location.search)
    return params.get(tabKey) ?? undefined
  }

  changeLocation = (key: Key) => {
    const { tabKey, history, location } = this.props
    const searchParams = new URLSearchParams(location.search)
    if (key != null) {
      searchParams.set(tabKey, key)
    } else {
      searchParams.delete(tabKey)
    }
    history.push({
      pathname: location.pathname,
      search: searchParams.toString()
    })
  }

  handleChange = (key: Key) => {
    const { onChange } = this.props
    this.changeLocation(key)
    onChange(key)
  }

  validateActiveKeyUpdate() {
    const { activeKey } = this.props
    const { activeKeyParam } = this
    if (activeKey !== activeKeyParam) {
      this.changeLocation(activeKey)
    }
  }

  render() {
    const { activeKey, tabBarExtraContent, children } = this.props
    const { defaultActiveKey } = this.state
    return (
      <Tabs
        defaultActiveKey={defaultActiveKey}
        activeKey={activeKey}
        onChange={this.handleChange}
        tabBarExtraContent={tabBarExtraContent}
      >
        {children}
      </Tabs>
    )
  }
}

export default withRouter(ActiveTabBySearchParamTabs)
