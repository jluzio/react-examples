import React from 'react'
import { Link, withRouter, RouteComponentProps } from 'react-router-dom'
import * as history from 'history'
import { Menu } from 'antd'
import { SettingOutlined } from '@ant-design/icons'
import { ClickParam } from 'antd/lib/menu'
import logo from 'assets/images/logo.svg'
import historyService from 'services/history-service'
import DebugSessionModal from './DebugSessionModal'

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
    const menuIcon = <SettingOutlined />
    return (
      <>
        <Menu
          theme="dark"
          onClick={this.handleClick}
          selectedKeys={[current]}
          mode="horizontal"
        >
          <Menu.Item>
            <Link to={this.getLink('/')}>
              <img src={logo} className="ant-menu-item App-logo" alt="logo" />
            </Link>
          </Menu.Item>
          <Menu.Item key="home">
            <Link to={this.getLink('/')}>{menuIcon} Home</Link>
          </Menu.Item>
          <Menu.Item key="learning">
            <Link to={this.getLink('/learning')}>{menuIcon} Learning</Link>
          </Menu.Item>
          <Menu.Item key="examples">
            <Link to={this.getLink('/examples')}>{menuIcon} Examples</Link>
          </Menu.Item>
          <Menu.Item key="debugSession">
            <Link to={location} onClick={this.handleOpenDebugSessionModalClick}>
              {menuIcon} Debug Session
            </Link>
          </Menu.Item>
          <Menu.Item key="bootstrap">
            <Link to={this.getLink('/page/bootstrap')}>
              {menuIcon} Bootstrap
            </Link>
          </Menu.Item>
          <Menu.Item key="ant-design-layout">
            <Link to={this.getLink('/page/ant-design-layout')}>
              {menuIcon} Ant Design Layout
            </Link>
          </Menu.Item>
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
