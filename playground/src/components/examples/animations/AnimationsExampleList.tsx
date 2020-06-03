import React from 'react'
import ExampleListTabbedCard from 'components/common/ExampleListTabbedCard'
import { Tabs } from 'antd'
import FadeTransitionExample from './FadeTransitionExample'
import CssTransitionExample from './CssTransitionExample'
import SwitchTransitionExample from './SwitchTransitionExample'
import TransitionGroupExample from './TransitionGroupExample'

const { TabPane } = Tabs

const AnimationsExampleList: React.FC = () => {
  return (
    <ExampleListTabbedCard tabKey="anim-k">
      <TabPane key="transition-fade" tab="Transition (Fade)">
        <FadeTransitionExample />
      </TabPane>
      <TabPane key="css" tab="Css">
        <CssTransitionExample />
      </TabPane>
      <TabPane key="switch" tab="Switch">
        <SwitchTransitionExample />
      </TabPane>
      <TabPane key="group" tab="Group">
        <TransitionGroupExample />
      </TabPane>
    </ExampleListTabbedCard>
  )
}

export default AnimationsExampleList
