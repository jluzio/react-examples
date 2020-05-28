import Spinner from 'components/common/Spinner'
import React from 'react'
import { Card } from 'antd'
import SeasonDisplay from './SeasonDisplay'
import usePosition from './usePosition'

const SeasonExample: React.FC = () => {
  const positionData = usePosition()

  const renderSeasonDisplay = () => {
    return positionData?.position ? (
      <SeasonDisplay latitude={positionData.position.coords.latitude} />
    ) : null
  }

  const renderPositionError = () => {
    return positionData?.positionError ? (
      <p>Error: {positionData.positionError.message}</p>
    ) : null
  }

  const renderLoading = () => {
    return !positionData ? <Spinner /> : null
  }

  return (
    <Card title="Seasons" className="learning">
      {renderLoading()}
      {renderPositionError()}
      {renderSeasonDisplay()}
    </Card>
  )
}

export default SeasonExample
