import React, { Component } from 'react';

import Game from './tic-tac-toe/game';
import CounterExamples from './state/counter-examples';

export default class TutorialList extends Component {
    render() {
        return (
            <div className="tutorial-list">
                <h2>Tutorials</h2>
                <div className="tutorial-item">
                    <Game />
                </div>
                <div className="tutorial-item">
                    <CounterExamples />
                </div>
            </div>
        );
    }
}