/* eslint-disable class-methods-use-this */
import React from 'react'
import { Link } from 'react-router-dom'
import { Menu, Icon } from 'antd'

interface State {
  current: string
}
const state: State = {
  current: 'home'
}

export default class AppMenu extends React.Component {
  // temp before using Redux
  tempState = state

  handleClick(e: any) {
    // this.setState({
    //   current: e.key
    // })
    state.current = e.key as any
  }

  render() {
    // const { current } = this.state ?? {}
    const { current } = state
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[current]}
        mode="horizontal"
      >
        <Menu.Item key="home">
          <Link to="/">
            <Icon type="setting" />
            Home
          </Link>
        </Menu.Item>
        <Menu.Item key="learning">
          <Link to="/learning">
            <Icon type="setting" /> Learning
          </Link>
        </Menu.Item>
        <Menu.Item key="examples">
          <Link to="/examples">
            <Icon type="setting" /> Examples
          </Link>
        </Menu.Item>
        <Menu.Item key="bootstrap">
          <Link to="/bootstrap">
            <Icon type="setting" /> Bootstrap
          </Link>
        </Menu.Item>
      </Menu>
    )
  }
}
