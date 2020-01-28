/* eslint-disable no-plusplus */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/button-has-type */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/sort-comp */
/* eslint-disable max-classes-per-file */
import React from 'react'
import { Button } from 'antd'
import Board from './Board'

class GameState {
  constructor(squares, xIsNextMove, winner) {
    this.squares = squares
    this.xIsNextMove = xIsNextMove
    this.winner = winner
  }
}

export default class Game extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      history: [this.createNewGameState()]
    }
    this.handleSquareClick = this.handleSquareClick.bind(this)
  }

  render() {
    const gameState = this.currentGameState()
    return (
      <div className="example tictactoe">
        <h3>Tic-tac-toe</h3>
        <div className="game">
          <Board
            squares={gameState.squares}
            xIsNextMove={gameState.xIsNextMove}
            winner={gameState.winner}
            onSquareClick={this.handleSquareClick}
          />
        </div>
        <div className="btn-group">
          {this.renderHistoryItem(this.state.history.length - 2, 'Previous')}
        </div>
        <div>{this.renderHistory()}</div>
      </div>
    )
  }

  renderHistory() {
    const history = this.state.history.map((_gameState, index) => {
      return this.renderHistoryItem(index, `Goto ${index}`)
    })
    return (
      <div>
        <p>History</p>
        <div className="btn-group">{history}</div>
      </div>
    )
  }

  renderHistoryItem(index, label) {
    return (
      <Button
        type="default"
        key={index}
        onClick={() => this.handleGotoGameState(index)}
      >
        {label}
      </Button>
    )
  }

  createNewGameState() {
    return new GameState(Array(9).fill(null), true, null)
  }

  currentGameState() {
    return this.state.history[this.state.history.length - 1]
  }

  handleSquareClick(i) {
    const gameState = this.currentGameState()
    if (!gameState.winner && !gameState.squares[i]) {
      const squares = gameState.squares.slice()
      squares[i] = this.playerToken(gameState.xIsNextMove)
      const winner = this.calculateWinner(squares)

      const nextGameState = this.newGameState(gameState, {
        squares,
        xIsNextMove: !gameState.xIsNextMove,
        winner
      })

      this.setState({
        history: this.state.history.concat(nextGameState)
      })
    }
  }

  handleGotoGameState(toIndex) {
    const sliceEnd = toIndex + 1
    const maxIndex = this.state.history.length - 1
    if (sliceEnd > 0 && sliceEnd <= maxIndex) {
      this.setState({
        history: this.state.history.slice(0, sliceEnd)
      })
    }
  }

  newGameState(gameState, newValues) {
    const newGameState = Object.setPrototypeOf(
      { ...gameState, ...newValues },
      GameState.prototype
    )
    return newGameState
  }

  playerToken(xIsNextMove) {
    return xIsNextMove ? 'X' : 'O'
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
      [2, 4, 6]
    ]
    let winner = null
    for (let i = 0; i < lines.length; i++) {
      const [p1, p2, p3] = lines[i]
      winner = winner || this.calculateLineWinner(p1, p2, p3, squares)
    }
    return winner
  }

  calculateLineWinner(p1, p2, p3, squares) {
    if (
      squares[p1] &&
      squares[p1] === squares[p2] &&
      squares[p1] === squares[p3]
    ) {
      return squares[p1]
    }
    return null
  }
}
