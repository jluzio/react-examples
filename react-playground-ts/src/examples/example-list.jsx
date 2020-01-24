/* eslint-disable react/button-has-type */
/* eslint-disable react/prefer-stateless-function */
import React from 'react'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Game from './tic-tac-toe/game'
import CounterExamples from './state/counter-examples'
import Variables from './variables/variables'
import './examples.scss'

export default class TutorialList extends React.Component {
  render() {
    return (
      <div className="examples container">
        <h2>Examples</h2>
        <Tabs variant="pills">
          <Tab eventKey="game" title="TicTacToe">
            <Game />
          </Tab>
          <Tab eventKey="counter" title="Counter">
            <CounterExamples />
          </Tab>
          <Tab eventKey="variables" title="Variables">
            <Variables usernameId="var_uId" passwordId="var_pId" />
          </Tab>
        </Tabs>
      </div>
    )
  }
}
