import React from 'react'
import { Link, withRouter, RouteComponentProps } from 'react-router-dom'
import { Menu, Icon } from 'antd'
import { ClickParam } from 'antd/lib/menu'
import logo from 'assets/images/logo.svg'

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
          <Link to="/">
            <img src={logo} className="ant-menu-item App-logo" alt="logo" />
          </Link>
        </Item>
        <Item key="home">
          <Link to="/">
            <Icon type="setting" /> Home
          </Link>
        </Item>
        <Item key="learning">
          <Link to="/learning">
            <Icon type="setting" /> Learning
          </Link>
        </Item>
        <Item key="examples">
          <Link to="/examples">
            <Icon type="setting" /> Examples
          </Link>
        </Item>
        <Item key="bootstrap">
          <Link to="/page/bootstrap">
            <Icon type="setting" /> Bootstrap
          </Link>
        </Item>
        <Item key="ant-design-layout">
          <Link to="/page/ant-design-layout">
            <Icon type="setting" /> Ant Design Layout
          </Link>
        </Item>
      </Menu>
    )
  }
}

export default withRouter(AppMenu)
