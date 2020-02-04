/* eslint-disable react/prefer-stateless-function */
import React from 'react'
import moment from 'moment'
import { Icon } from 'antd'

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
interface State {
  config: SeasonConfig
}

class SeasonDisplay extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
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

    this.state = {
      config
    }
  }

  getSeason = (): Season => {
    const { latitude } = this.props
    const month = moment().month()
    const summerPeriod1 = month >= 3 && month <= 8
    const northHemisphere = latitude > 0
    return (summerPeriod1 && northHemisphere) ||
      (!summerPeriod1 && !northHemisphere)
      ? 'summer'
      : 'winter'
  }

  render() {
    const { config } = this.state
    const season = this.getSeason()
    const seasonData = config[season]
    return (
      <div className={`season-display ${season}`}>
        <Icon type={seasonData.iconName} className="icon icon-left" />
        <p className="text">{seasonData.text}</p>
        <Icon type={seasonData.iconName} className="icon icon-right" />
      </div>
    )
  }
}

export default SeasonDisplay
