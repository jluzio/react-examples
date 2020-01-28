/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/button-has-type */
/* eslint-disable react/prefer-stateless-function */
import React from 'react'

export default class Square extends React.Component {
  render() {
    return (
      <button className="square" onClick={() => this.props.onClick()}>
        {this.props.value}
      </button>
    )
  }
}

/* functional component */
/*
import React from 'react';

export default function Square(props) {
    return (
        <button className="square" onClick={props.onClick()}>
            {props.value}
        </button>
    );
}
*/
