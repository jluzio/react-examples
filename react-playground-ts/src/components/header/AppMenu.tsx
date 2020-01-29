import React from 'react'
import { Link } from 'react-router-dom'
import { Menu, Icon } from 'antd'
import { ClickParam } from 'antd/lib/menu'
import logo from 'assets/images/logo.svg'

const { Item } = Menu

interface State {
  current: string
}
type Props = {}

const defaultMenuKey = 'home'

export default class AppMenu extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      current: defaultMenuKey
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
          <Link to="/bootstrap">
            <Icon type="setting" /> Bootstrap
          </Link>
        </Item>
      </Menu>
    )
  }
}
