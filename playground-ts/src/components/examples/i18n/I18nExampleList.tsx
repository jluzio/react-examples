import React from 'react'
import { Tabs } from 'antd'
import ExampleListTabbedCard from 'components/common/ExampleListTabbedCard'
import { useTranslation } from 'react-i18next'

const { TabPane } = Tabs

const I18nExampleList: React.FC = () => {
  const { t } = useTranslation()
  return (
    <ExampleListTabbedCard title="I18N" tabKey="i18n-key">
      <TabPane key="basic" tab="Basic">
        {t('hello')} | {t('Welcome to React')}
      </TabPane>
      <TabPane key="more" tab="More">
        ... TODO ...
      </TabPane>
    </ExampleListTabbedCard>
  )
}

export default I18nExampleList
