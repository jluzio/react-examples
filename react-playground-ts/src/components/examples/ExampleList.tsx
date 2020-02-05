import './examples.scss'

import { Tabs } from 'antd'
import React from 'react'

import TabsUsingParamKey from 'components/common/TabsUsingParamKey'
import BlankExample from './BlankExample'
import FormikExample from './data-binding/formik/FormikExample'
import CounterExamples from './state/CounterExamples'
import Game from './tic-tac-toe/Game'
import Variables from './variables/Variables'

const { TabPane } = Tabs

const ExampleList: React.FC = () => {
  return (
    <div className="example-list container">
      <h2>Examples</h2>
      <TabsUsingParamKey tabKey="el-key">
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
        <TabPane key="formik" tab="Formik">
          <FormikExample />
        </TabPane>
      </TabsUsingParamKey>
    </div>
  )
}

export default ExampleList
