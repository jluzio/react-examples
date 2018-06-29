import React, { Component } from 'react';
import Square from './square';

export default class Board extends Component {
    render() {
        const winner = this.props.winner;
        let status = winner 
            ? `Winner: ${winner}`
            : 'Next player: ' + this.playerToken(this.props.xIsNextMove);
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
        return <Square value={this.props.squares[i]} onClick={() => this.props.onSquareClick(i)} />;
    }

    playerToken(xIsNextMove) {
        return xIsNextMove ? "X" : "O";
    }

}