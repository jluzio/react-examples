import './examples.scss'

import { Tabs } from 'antd'
import React from 'react'

import ActiveTabBySearchParamTabs from 'components/common/ActiveTabBySearchParamTabs'
import BlankExample from './BlankExample'
import FormikExample from './data-binding/formik/FormikExampleList'
import CounterExamples from './state/CounterExamples'
import Game from './tic-tac-toe/Game'
import Variables from './variables/Variables'
import I18nExampleList from './i18n/I18nExampleList'
import ValidatorExampleList from './validators/ValidatorExampleList'
import RxjsExampleList from './rxjs/RxjsExampleList'

const { TabPane } = Tabs

const ExampleList: React.FC = () => {
  return (
    <div className="example-list container">
      <h2>Examples</h2>
      <ActiveTabBySearchParamTabs tabKey="el-key">
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
        <TabPane key="i18n" tab="I18n">
          <I18nExampleList />
        </TabPane>
        <TabPane key="validators" tab="Validators">
          <ValidatorExampleList />
        </TabPane>
        <TabPane key="rxjs" tab="rxjs">
          <RxjsExampleList />
        </TabPane>
      </ActiveTabBySearchParamTabs>
    </div>
  )
}

export default ExampleList
