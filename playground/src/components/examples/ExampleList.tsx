import './examples.scss'

import { Tabs } from 'antd'
import React from 'react'

import ExampleListTabbedCard from 'components/common/ExampleListTabbedCard'
import BlankExample from './BlankExample'
import DataBindingExampleList from './data-binding/DataBindingExampleList'
import StateExamples from './state/StateExamples'
import Game from './tic-tac-toe/Game'
import Variables from './variables/Variables'
import I18nExampleList from './i18n/I18nExampleList'
import ValidatorExampleList from './validators/ValidatorExampleList'
import RxjsExampleList from './rxjs/RxjsExampleList'
import ErrorBoundaryExample from './error-boundary/ErrorBoundaryExample'
import ContextExampleList from './context/ContextExampleList'
import RefExample from './refs/RefExample'
import HocExample from './hoc/HocExample'
import FragmentsExample from './fragments/FragmentsExample'
import RenderPropsExample from './render-props/RenderPropsExample'
import ReduxExampleList from './redux/ReduxExampleList'
import CacheExampleList from './cache/CacheExampleList'
import OAuth2ExampleList from './oauth2/OAuth2ExampleList'
import MiscExample from './misc/MiscExample'
import PortalExampleList from './portal/PortalExampleList'
import HooksExampleList from './hooks/HooksExampleList'
import LifecycleExampleList from './lifecycle/LifecycleExampleList'
import RouterExample from './router/RouterExample'
import AnimationsExampleList from './animations/AnimationsExampleList'

const { TabPane } = Tabs

const ExampleList: React.FC = () => {
  return (
    <ExampleListTabbedCard
      title="Examples"
      tabKey="ex-key"
      className="example-list"
    >
      <TabPane key="blank" tab="Blank">
        <BlankExample />
      </TabPane>
      <TabPane key="game" tab="TicTacToe">
        <Game />
      </TabPane>
      <TabPane key="state" tab="State">
        <StateExamples />
      </TabPane>
      <TabPane key="variables" tab="Variables">
        <Variables usernameId="var_uId" passwordId="var_pId" />
      </TabPane>
      <TabPane key="databinding" tab="Data Binding">
        <DataBindingExampleList />
      </TabPane>
      <TabPane key="i18n" tab="I18n">
        <I18nExampleList />
      </TabPane>
      <TabPane key="validators" tab="Validators">
        <ValidatorExampleList />
      </TabPane>
      <TabPane key="rxjs" tab="RxJs">
        <RxjsExampleList />
      </TabPane>
      <TabPane key="error-bound" tab="Error Bound">
        <ErrorBoundaryExample />
      </TabPane>
      <TabPane key="context" tab="Context">
        <ContextExampleList />
      </TabPane>
      <TabPane key="ref" tab="Ref">
        <RefExample />
      </TabPane>
      <TabPane key="HOC" tab="HOC">
        <HocExample />
      </TabPane>
      <TabPane key="fragments" tab="Fragments">
        <FragmentsExample />
      </TabPane>
      <TabPane key="render-props" tab="Render Props">
        <RenderPropsExample />
      </TabPane>
      <TabPane key="redux" tab="Redux">
        <ReduxExampleList />
      </TabPane>
      <TabPane key="cache" tab="Cache">
        <CacheExampleList />
      </TabPane>
      <TabPane key="oauth2" tab="OAuth2">
        <OAuth2ExampleList />
      </TabPane>
      <TabPane key="misc" tab="Misc">
        <MiscExample />
      </TabPane>
      <TabPane key="portal" tab="Portal">
        <PortalExampleList />
      </TabPane>
      <TabPane key="hooks" tab="Hooks">
        <HooksExampleList />
      </TabPane>
      <TabPane key="lifecycle" tab="Lifecycle">
        <LifecycleExampleList />
      </TabPane>
      <TabPane key="router" tab="Router">
        <RouterExample />
      </TabPane>
      <TabPane key="animations" tab="Animations">
        <AnimationsExampleList />
      </TabPane>
    </ExampleListTabbedCard>
  )
}

export default ExampleList
