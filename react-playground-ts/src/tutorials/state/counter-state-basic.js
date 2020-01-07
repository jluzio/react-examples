import React, { Component } from 'react';

export default class CounterStateBasic extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: props.count,
        }
    }

    render() {
        return (
            <span className="counter">
                Count: {this.state.count}
            </span>
        );
    }

    setCount(count) {
        this.setState({count: count});
    }
    
}
