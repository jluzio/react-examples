import { useEffect, useState } from 'react'

export type PositionData = {
  position?: Position
  positionError?: PositionError
}

export default function usePosition() {
  const [positionData, setPositionData] = useState<PositionData>()

  useEffect(() => {
    const handlePositionSuccess: PositionCallback = position => {
      setPositionData({
        position,
        positionError: undefined
      })
    }
    const handlePositionError: PositionErrorCallback = positionError => {
      setPositionData({
        position: undefined,
        positionError
      })
    }
    window.navigator.geolocation.getCurrentPosition(
      handlePositionSuccess,
      handlePositionError
    )
  }, [])

  return positionData
}
