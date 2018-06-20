import React, { Component } from 'react';
import Square from './square';

export default class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            nextMove: 'X',
        };
        this.state.squares[3] = 'X';
        this.state.squares[5] = 'O';
    }

    render() {
        const status = 'Next player: ' + this.state.nextMove;
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

    handleClick(i) {
        var squares = this.state.squares.slice();
        squares[i] = this.state.nextMove;
        const nextMove = this.state.nextMove === 'X' ? 'O' : 'X';
        this.setState({
            squares: squares, 
            nextMove: nextMove,
        });
    }
}