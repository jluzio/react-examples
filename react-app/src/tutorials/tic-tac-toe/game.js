import React, { Component } from 'react';
import Board from './board';

export default class Game extends Component {
    render() {
        return (
            <div className="tutorial">
                <h3>Tic-tac-toe</h3>
                <div className="game">
                    <Board />
                </div>
            </div>
        );
    }
}