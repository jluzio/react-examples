import React, { Component } from 'react';
import Board from './board';

/*
class GameState {
    constructor(squares, xIsNextMove, winner) {
        this.squares = squares;
        this.xIsNextMove = xIsNextMove;
        this.winner = winner;
    }
}
*/

export default class Game extends Component {
    /*
    constructor(props) {
        super(props);

        let newGameState = this.createNewGameState();
        this.state = {
            history: [ newGameState ],
        }
    }

    createNewGameState() {
        return new GameState(
            Array(9).fill(null),
            true,
            null
        );
    }
    */

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