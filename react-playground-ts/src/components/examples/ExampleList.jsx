/* eslint-disable react/button-has-type */
/* eslint-disable react/prefer-stateless-function */
import React from 'react'
import { Tabs } from 'antd'
import Game from './tic-tac-toe/Game'
import CounterExamples from './state/CounterExamples'
import Variables from './variables/Variables'
import BlankExample from './BlankExample'
import './examples.scss'

const { TabPane } = Tabs

export default class ExampleList extends React.Component {
  render() {
    return (
      <div className="examples container">
        <h2>Examples</h2>
        <Tabs defaultActiveKey="blank">
          <TabPane key="blank" tab="Blank">
            <BlankExample />
          </TabPane>
          <TabPane key="game" tab="TicTacToe">
            <Game />
          </TabPane>
          <TabPane key="counter" tab="Counter">
            <CounterExamples />
          </TabPane>
          <TabPane key="variables" tab="Variables">
            <Variables usernameId="var_uId" passwordId="var_pId" />
          </TabPane>
        </Tabs>
      </div>
    )
  }
}
