import React, { Component } from 'react';
import Square from './square';

export default class Board extends Component {
    constructor(props) {
        super(props);
        this.state = this.newGameState();
    }

    newGame() {
        this.setState(this.newGameState);
    }

    newGameState() {
        return {
            squares: Array(9).fill(null),
            xIsNextMove: true,
            winner: null,
        };
    }

    render() {
        const winner = this.state.winner;
        let status = winner 
            ? `Winner: ${winner}`
            : 'Next player: ' + this.playerToken(this.state.xIsNextMove);
        return (
            <div className="board">
                <div className="status">{status}</div>
                <div className="board-row">
                    { this.renderSquare(0) }
                    { this.renderSquare(1) }
                    { this.renderSquare(2) }
                </div>
                <div className="board-row">
                    { this.renderSquare(3) }
                    { this.renderSquare(4) }
                    { this.renderSquare(5) }
                </div>
                <div className="board-row">
                    { this.renderSquare(6) }
                    { this.renderSquare(7) }
                    { this.renderSquare(8) }
                </div>
            </div>
        );
    }

    renderSquare(i) {
        return <Square value={this.state.squares[i]} onClick={() => this.handleClick(i)} />;
    }

    playerToken(xIsNextMove) {
        return xIsNextMove ? "X" : "O";
    }

    handleClick(i) {
        if (!this.state.winner && !this.state.squares[i]) {
            var squares = this.state.squares.slice();
            squares[i] = this.playerToken(this.state.xIsNextMove);
            const winner = this.calculateWinner(squares);

            this.setState({
                squares: squares, 
                xIsNextMove: !this.state.xIsNextMove,
                winner: winner,
            });
        }
    }

    calculateWinner(squares) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        var winner = null;
        for (let i=0; i<lines.length; i++) {
            const [p1, p2, p3] = lines[i];
            winner = winner || this.calculateLineWinner(p1, p2, p3, squares);
        }
        return winner;
    }

    calculateLineWinner(p1, p2, p3, squares) {
        if (squares[p1] && squares[p1] === squares[p2] && squares[p1] === squares[p3]) {
            return squares[p1];
        }
        return null;
    }

}