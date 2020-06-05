import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import userService from 'services/placeholder/user-service'
import { userActions } from './user'

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchUser(action: ReturnType<typeof userActions.fetchUser>) {
  try {
    const user = yield call(
      (v: number) => userService.get(v).then(response => response.data),
      action.payload.id
    )
    yield put(userActions.fetchUserSuccessful({ user }))
  } catch (e) {
    yield put(userActions.fetchUserFailed({ message: e.toString() }))
  }
}

/*
 Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
 Allows concurrent fetches of user.
*/
function* mySaga() {
  yield takeEvery(userActions.fetchUser.type, fetchUser)
}

/*
 Alternatively you may use takeLatest.

 Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
 dispatched while a fetch is already pending, that pending fetch is cancelled
 and only the latest one will be run.
*/
// function* mySaga() {
//   yield takeLatest('USER_FETCH_REQUESTED', fetchUser)
// }

export default mySaga
