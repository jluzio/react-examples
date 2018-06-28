import React, { Component } from 'react';
import CouterStateProps from './counter-state-props';
import CouterStateBasic from './counter-state-basic';
import CounterProps from './counter-props';

export default class CounterExamples extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
        this.counterStateBasic = React.createRef();
    }

    render() {
        return (
            <div className="tutorial">
                <h3>State propagation examples</h3>
                <ul>
                    <li>CountProps: <CounterProps count={this.state.count} /></li>
                    <li>CouterStateProps: <CouterStateProps count={this.state.count} /></li>
                    <li>CouterStateBasic: <CouterStateBasic count={this.state.count} ref={this.counterStateBasic} /></li>
                </ul>
                <button onClick={() => this.handleCountSet(this.state.count+1)}>Inc Count</button>
                <button onClick={() => this.handleCountSet(0)}>Reset Count</button>
            </div>
        );
    }

    handleCountSet(value) {
        this.setState({count: value});
        this.counterStateBasic.current.setState({count: value});
    }
}
