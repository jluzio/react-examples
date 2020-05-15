import React from 'react'
import { Link, withRouter, RouteComponentProps } from 'react-router-dom'
import * as history from 'history'
import { Menu, Modal, Form, Input } from 'antd'
import { SettingOutlined } from '@ant-design/icons'
import { ClickParam } from 'antd/lib/menu'
import logo from 'assets/images/logo.svg'
import historyService from 'services/history-service'
import DebugSessionModal from './DebugSessionModal'

const { Item } = Menu

interface State {
  current: string
  debugSessionModalVisible: boolean
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
      current: defaultTabName,
      debugSessionModalVisible: false
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
    const debugSessionParam = historyService.getDebugSessionParam(
      previousLocation
    )
    if (debugSessionParam == null) {
      return to
    }
    return historyService.getLocationWithDebugSession(to, debugSessionParam)
  }

  setDebugSessionModalVisible = (debugSessionModalVisible: boolean) =>
    this.setState({ debugSessionModalVisible })

  handleOpenDebugSessionModalClick = (event: React.SyntheticEvent) => {
    event.preventDefault()
    this.setDebugSessionModalVisible(true)
  }

  render() {
    const { current, debugSessionModalVisible } = this.state
    const { location } = this.props
    return (
      <>
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
          <Item key="debugSession">
            <Link to={location} onClick={this.handleOpenDebugSessionModalClick}>
              <SettingOutlined /> Debug Session
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
        <DebugSessionModal
          visible={debugSessionModalVisible}
          onVisibleChange={this.setDebugSessionModalVisible}
        />
      </>
    )
  }
}

export default withRouter(AppMenu)
