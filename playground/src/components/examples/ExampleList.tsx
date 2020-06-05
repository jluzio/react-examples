import './examples.scss'

import { Tabs } from 'antd'
import React from 'react'

import ExampleListTabbedCard from 'components/common/ExampleListTabbedCard'

const ReduxExampleList = React.lazy(() => import('./redux/ReduxExampleList'))
const BlankExample = React.lazy(() => import('./BlankExample'))
const DataBindingExampleList = React.lazy(() =>
  import('./data-binding/DataBindingExampleList')
)
const StateExamples = React.lazy(() => import('./state/StateExamples'))
const Game = React.lazy(() => import('./tic-tac-toe/Game'))
const Variables = React.lazy(() => import('./variables/Variables'))
const I18nExampleList = React.lazy(() => import('./i18n/I18nExampleList'))
const ValidatorExampleList = React.lazy(() =>
  import('./validators/ValidatorExampleList')
)
const RxjsExampleList = React.lazy(() => import('./rxjs/RxjsExampleList'))
const ErrorBoundaryExample = React.lazy(() =>
  import('./error-boundary/ErrorBoundaryExample')
)
const ContextExampleList = React.lazy(() =>
  import('./context/ContextExampleList')
)
const RefExample = React.lazy(() => import('./refs/RefExample'))
const HocExample = React.lazy(() => import('./hoc/HocExample'))
const FragmentsExample = React.lazy(() =>
  import('./fragments/FragmentsExample')
)
const RenderPropsExample = React.lazy(() =>
  import('./render-props/RenderPropsExample')
)
const CacheExampleList = React.lazy(() => import('./cache/CacheExampleList'))
const OAuth2ExampleList = React.lazy(() => import('./oauth2/OAuth2ExampleList'))
const MiscExample = React.lazy(() => import('./misc/MiscExample'))
const PortalExampleList = React.lazy(() => import('./portal/PortalExampleList'))
const HooksExampleList = React.lazy(() => import('./hooks/HooksExampleList'))
const LifecycleExampleList = React.lazy(() =>
  import('./lifecycle/LifecycleExampleList')
)
const RouterExample = React.lazy(() => import('./router/RouterExample'))
const AnimationsExampleList = React.lazy(() =>
  import('./animations/AnimationsExampleList')
)

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
