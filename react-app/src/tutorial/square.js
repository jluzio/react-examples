/* class component */
import React, { Component } from 'react';

export default class Square extends Component {
    render() {
        return (
            <button className="square" onClick={() => this.props.onClick()}>
                {this.props.value}
            </button>
        );
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