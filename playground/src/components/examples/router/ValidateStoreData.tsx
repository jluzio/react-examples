/* eslint-disable react-hooks/exhaustive-deps */
import React, { PropsWithChildren, useEffect } from 'react'
import _ from 'lodash'
import {
  connectorList as connector,
  ReduxPropsList as ReduxProps
} from './redux'

type Props = ReduxProps & PropsWithChildren<{}>

const ValidateStoreData: React.FC<Props> = ({
  children,
  users,
  fetchAllUsers
}: Props) => {
  useEffect(() => {
    if (!_.size(users)) {
      fetchAllUsers()
    }
  }, [])

  return <>{children}</>
}

export default connector(ValidateStoreData)
