/* eslint-disable react/button-has-type */
/* eslint-disable react/prefer-stateless-function */
import React from 'react'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Game from './tic-tac-toe/game'
import CounterExamples from './state/counter-examples'
import './tutorial.css'

export default class TutorialList extends React.Component {
  render() {
    return (
      <div className="tutorial-list">
        <h2>Tutorials</h2>
        <Tabs variant="pills">
          <Tab eventKey="home" title="TicTacToe">
            <Game />
          </Tab>
          <Tab eventKey="profile" title="Counter">
            <CounterExamples />
          </Tab>
        </Tabs>
      </div>
    )
  }
}
