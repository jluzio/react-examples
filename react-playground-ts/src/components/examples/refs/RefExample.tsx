import React from 'react'
import { logProps } from '../hoc/LogProps'

class RefExample extends React.Component {
  ref!: React.RefObject<HTMLButtonElement>

  constructor(props: any) {
    super(props)
    this.ref = React.createRef()
  }

  onClick = () => {
    console.log(`Button: ${this.ref.current?.id}`)
  }

  render() {
    return (
      <button
        id="button-ref-id"
        type="button"
        ref={this.ref}
        onClick={this.onClick}
      >
        ref button
      </button>
    )
  }
}

export default logProps(RefExample)
