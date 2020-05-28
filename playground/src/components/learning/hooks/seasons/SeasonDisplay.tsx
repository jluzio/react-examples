/* eslint-disable react/prefer-stateless-function */
import React from 'react'
import moment from 'moment'
import { FireOutlined, CloudOutlined } from '@ant-design/icons'

interface Props {
  latitude: number
}

type Season = 'summer' | 'winter'
type SeasonConfig = Record<
  Season,
  {
    iconName: string
    text: string
  }
>
const config: SeasonConfig = {
  summer: {
    iconName: 'fire',
    text: `Let's hit the beach`
  },
  winter: {
    iconName: 'cloud',
    text: `Burr, it is chilly`
  }
}

type SeasonIconProps = { type: Season; className?: string }
const SeasonIcon: React.FC<SeasonIconProps> = (props: SeasonIconProps) => {
  const { type, className } = props
  return type === 'summer' ? (
    <FireOutlined className={className} />
  ) : (
    <CloudOutlined className={className} />
  )
}

const SeasonDisplay: React.FC<Props> = ({ latitude }: Props) => {
  const getSeason = (): Season => {
    const month = moment().month()
    const summerPeriod1 = month >= 3 && month <= 8
    const northHemisphere = latitude > 0
    return (summerPeriod1 && northHemisphere) ||
      (!summerPeriod1 && !northHemisphere)
      ? 'summer'
      : 'winter'
  }

  const season = getSeason()
  const seasonData = config[season]
  return (
    <div className={`season-display ${season}`}>
      <SeasonIcon type={season} className="icon icon-left" />
      <p className="text">{seasonData.text}</p>
      <SeasonIcon type={season} className="icon icon-right" />
    </div>
  )
}

export default SeasonDisplay
