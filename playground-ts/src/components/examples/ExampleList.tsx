import './examples.scss'

import { Tabs } from 'antd'
import React from 'react'

import ActiveTabBySearchParamTabs from 'components/common/ActiveTabBySearchParamTabs'
import _ from 'lodash'
import BlankExample from './BlankExample'
import FormikExample from './data-binding/formik/FormikExampleList'
import StateExamples from './state/StateExamples'
import Game from './tic-tac-toe/Game'
import Variables from './variables/Variables'
import I18nExampleList from './i18n/I18nExampleList'
import ValidatorExampleList from './validators/ValidatorExampleList'
import RxjsExampleList from './rxjs/RxjsExampleList'
import ErrorBoundaryExample from './error-boundary/ErrorBoundaryExample'
import ContextExample from './context/ContextExample'
import RefExample from './refs/RefExample'
import HocExample from './hoc/HocExample'
import FragmentsExample from './fragments/FragmentsExample'
import RenderPropsExample from './render-props/RenderPropsExample'
import ReduxExampleList from './redux/ReduxExampleList'
import CacheExampleList from './cache/CacheExampleList'
import OAuth2Example from './oauth2/OAuth2Example'

const { TabPane } = Tabs

const ExampleList: React.FC = () => {
  const unsortedTabPanes = [
    <TabPane key="blank" tab="Blank">
      <BlankExample />
    </TabPane>,
    <TabPane key="game" tab="TicTacToe">
      <Game />
    </TabPane>,
    <TabPane key="state" tab="State">
      <StateExamples />
    </TabPane>,
    <TabPane key="variables" tab="Variables">
      <Variables usernameId="var_uId" passwordId="var_pId" />
    </TabPane>,
    <TabPane key="formik" tab="Formik">
      <FormikExample />
    </TabPane>,
    <TabPane key="i18n" tab="I18n">
      <I18nExampleList />
    </TabPane>,
    <TabPane key="validators" tab="Validators">
      <ValidatorExampleList />
    </TabPane>,
    <TabPane key="rxjs" tab="RxJs">
      <RxjsExampleList />
    </TabPane>,
    <TabPane key="error-bound" tab="Error Bound">
      <ErrorBoundaryExample />
    </TabPane>,
    <TabPane key="context" tab="Context">
      <ContextExample />
    </TabPane>,
    <TabPane key="ref" tab="Ref">
      <RefExample />
    </TabPane>,
    <TabPane key="HOC" tab="HOC">
      <HocExample />
    </TabPane>,
    <TabPane key="fragments" tab="Fragments">
      <FragmentsExample />
    </TabPane>,
    <TabPane key="render-props" tab="Render Props">
      <RenderPropsExample />
    </TabPane>,
    <TabPane key="redux" tab="Redux">
      <ReduxExampleList />
    </TabPane>,
    <TabPane key="cache" tab="Cache">
      <CacheExampleList />
    </TabPane>,
    <TabPane key="oauth2" tab="OAuth2">
      <OAuth2Example />
    </TabPane>
  ]
  const tabPanes = _.sortBy(unsortedTabPanes, t =>
    t.props.tab.toString().toLowerCase()
  )
  return (
    <div className="example-list">
      <h2>Examples</h2>
      <ActiveTabBySearchParamTabs tabKey="el-key">
        {tabPanes}
      </ActiveTabBySearchParamTabs>
    </div>
  )
}

export default ExampleList
