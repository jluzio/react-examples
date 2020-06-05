import userService from 'services/placeholder/user-service'
import { ofType, combineEpics, Epic } from 'redux-observable'
import { map, delay, mergeMap, catchError } from 'rxjs/operators'
import { from, of } from 'rxjs'
import { Action } from 'redux'
import { userActions } from './user'
import { RootState } from '.'

const fetchUserEpic: Epic<Action, Action, RootState> = (action$, state$) =>
  action$.pipe(
    ofType(userActions.fetchUser.type),
    delay(1000),
    map(action => action as ReturnType<typeof userActions.fetchUser>),
    mergeMap(action =>
      from(userService.get(action.payload.id)).pipe(
        map(response =>
          userActions.fetchUserSuccessful({ user: response.data })
        ),
        catchError(error =>
          of(userActions.fetchUserFailed({ message: error.toString() }))
        )
      )
    )
  )

const rootEpic = combineEpics(fetchUserEpic)

export default rootEpic
