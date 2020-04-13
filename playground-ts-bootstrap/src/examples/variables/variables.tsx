/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'

interface Props {
  usernameId: string
  passwordId: string
}

const Variables: React.FC<Props> = (props: Props) => {
  const buttonText = 'Click me!'
  const { usernameId, passwordId } = props
  return (
    <div className="example">
      <form>
        <div className="form-group">
          <label htmlFor={usernameId}>Username:</label>
          <input id={usernameId} type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor={passwordId}>Password:</label>
          <input id={passwordId} type="password" className="form-control" />
        </div>
        <button
          className="btn btn-primary"
          type="submit"
          style={{ borderColor: 'blue', color: 'white' }}
        >
          {buttonText}
        </button>
      </form>
    </div>
  )
}

export default Variables
