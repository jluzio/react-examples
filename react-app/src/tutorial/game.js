import React, { Component } from 'react';
import Board from './board';

export default class Game extends Component {
    render() {
        return (
            <div className="game">
                <Board />
            </div>
        );
    }

    handleNewGame() {
        console.log("new game");
    }
}