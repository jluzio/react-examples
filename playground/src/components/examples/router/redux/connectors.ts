import { connect, ConnectedProps } from 'react-redux'
import { RouteComponentProps } from 'react-router-dom'
import { RootState, userActions } from '../store'
import { userSelector } from '../store/selectors'
import { RouteIdParams } from '../routes'

const mapStateToPropsList = (state: RootState) => ({
  users: state.users
})
const mapStateToPropsDetails = (
  state: RootState,
  props: RouteComponentProps<RouteIdParams>
) => ({
  user: userSelector(state, props)
})

const mapDispatchToProps = {
  fetchAllUsers: userActions.fetchAllUsers,
  fetchUser: userActions.fetchUser
}

export const connectorList = connect(mapStateToPropsList, mapDispatchToProps)
export type ReduxPropsList = ConnectedProps<typeof connectorList>

export const connectorDetails = connect(
  mapStateToPropsDetails,
  mapDispatchToProps
)
export type ReduxPropsDetails = ConnectedProps<typeof connectorDetails>
