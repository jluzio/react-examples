import React, { Component } from 'react';

export default class CounterProps extends Component {
    render() {
        return (
            <span className="counter">
                Count: {this.props.count}
            </span>
        );
    }
}
