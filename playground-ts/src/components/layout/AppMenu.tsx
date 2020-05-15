import React from 'react'
import { Link, withRouter, RouteComponentProps } from 'react-router-dom'
import * as history from 'history'
import { Menu } from 'antd'
import { SettingOutlined } from '@ant-design/icons'
import { ClickParam } from 'antd/lib/menu'
import logo from 'assets/images/logo.svg'
import _ from 'lodash'

const { Item } = Menu

interface State {
  current: string
}
type LocalProps = {}
type Props = RouteComponentProps<LocalProps>

const defaultMenuKey = 'home'

class AppMenu extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)

    const { location } = this.props
    const defaultTabName = location.pathname.substring(1)

    this.state = {
      current: defaultTabName
    }
  }

  handleClick = (e: ClickParam) => {
    const key = e.key === 'logo' ? defaultMenuKey : e.key
    this.setState({
      current: key
    })
  }

  getLink = (to: history.LocationDescriptor) =>
    this.maintainDebugSessionLink(to)

  maintainDebugSessionLink = (to: history.LocationDescriptor) => (
    previousLocation: history.Location
  ): history.LocationDescriptor => {
    const previousParams = new URLSearchParams(previousLocation.search)
    const debugSessionParam = 'debug_session'
    if (!previousParams.has(debugSessionParam)) {
      return to
    }

    let toLocationObject: history.LocationDescriptorObject
    if (typeof to === 'string') {
      const [pathname, search] = _.split(to, '?')
      toLocationObject = { pathname, search }
    } else {
      toLocationObject = { ...to }
    }
    const newParams = new URLSearchParams(toLocationObject.search)
    newParams.append(
      debugSessionParam,
      previousParams.get(debugSessionParam) as string
    )
    return {
      ...toLocationObject,
      search: newParams.toString()
    }
  }

  render() {
    const { current } = this.state
    return (
      <Menu
        theme="dark"
        onClick={this.handleClick}
        selectedKeys={[current]}
        mode="horizontal"
      >
        <Item key="logo">
          <Link to={this.getLink('/')}>
            <img src={logo} className="ant-menu-item App-logo" alt="logo" />
          </Link>
        </Item>
        <Item key="home">
          <Link to={this.getLink('/')}>
            <SettingOutlined /> Home
          </Link>
        </Item>
        <Item key="learning">
          <Link to={this.getLink('/learning')}>
            <SettingOutlined /> Learning
          </Link>
        </Item>
        <Item key="examples">
          <Link to={this.getLink('/examples')}>
            <SettingOutlined /> Examples
          </Link>
        </Item>
        <Item key="bootstrap">
          <Link to={this.getLink('/page/bootstrap')}>
            <SettingOutlined /> Bootstrap
          </Link>
        </Item>
        <Item key="ant-design-layout">
          <Link to={this.getLink('/page/ant-design-layout')}>
            <SettingOutlined /> Ant Design Layout
          </Link>
        </Item>
      </Menu>
    )
  }
}

export default withRouter(AppMenu)
