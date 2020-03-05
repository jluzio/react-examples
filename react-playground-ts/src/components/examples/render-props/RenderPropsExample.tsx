/* eslint-disable react/prop-types */
/* eslint-disable max-classes-per-file */
/* eslint-disable react/prefer-stateless-function */
import React from 'react'
import logo from 'assets/images/logo.svg'

interface MousePos {
  x: number
  y: number
}

interface CatProps {
  mouse: MousePos
}

class Cat extends React.Component<CatProps> {
  render() {
    const { mouse } = this.props
    return (
      <img
        src={logo}
        alt="Cat"
        style={{
          position: 'absolute',
          left: mouse.x,
          top: mouse.y,
          height: '32px',
          width: '32px'
        }}
      />
    )
  }
}

interface MouseState {
  x: number
  y: number
}
interface MouseProps {
  render: (state: MouseState) => React.ReactElement
}

class Mouse extends React.Component<MouseProps, MouseState> {
  constructor(props: any) {
    super(props)
    this.handleMouseMove = this.handleMouseMove.bind(this)
    this.state = { x: 0, y: 0 }
  }

  handleMouseMove(event: React.MouseEvent) {
    // const target = event.target
    // TODO: remove offsets from parent
    this.setState({
      x: event.clientX,
      y: event.clientY
    })
  }

  render() {
    const { render } = this.props
    return (
      <div
        style={{
          height: '100%',
          border: '1px solid green'
          // position: 'relative'
        }}
        onMouseMove={this.handleMouseMove}
      >
        {/*
          Instead of providing a static representation of what <Mouse> renders,
          use the `render` prop to dynamically determine what to render.
        */}
        {render(this.state)}
      </div>
    )
  }
}

class MouseTracker extends React.Component {
  render() {
    return (
      <div style={{ border: '1px solid red', height: '300px', width: '300px' }}>
        <h1>Move the mouse around!</h1>
        <Mouse render={mouse => <Cat mouse={mouse} />} />
      </div>
    )
  }
}

class RenderPropsExample extends React.Component {
  render() {
    return <MouseTracker />
  }
}

export default RenderPropsExample
