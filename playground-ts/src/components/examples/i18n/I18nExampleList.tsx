import React from 'react'
import { Card, Tabs } from 'antd'
import ActiveTabBySearchParamTabs from 'components/common/ActiveTabBySearchParamTabs'
import { useTranslation } from 'react-i18next'

const { TabPane } = Tabs

const I18nExampleList: React.FC = () => {
  const { t } = useTranslation()
  return (
    <Card title="I18N" className="example">
      <ActiveTabBySearchParamTabs tabKey="i18n-key">
        <TabPane key="basic" tab="Basic">
          {t('hello')} | {t('Welcome to React')}
        </TabPane>
        <TabPane key="more" tab="More">
          ... TODO ...
        </TabPane>
      </ActiveTabBySearchParamTabs>
    </Card>
  )
}

export default I18nExampleList
