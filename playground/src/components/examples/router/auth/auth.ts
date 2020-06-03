import { Observable, timer, BehaviorSubject, Subject } from 'rxjs'
import { tap, mapTo } from 'rxjs/operators'

const LOGIN_TIME = 1500
const LOGOUT_TIME = 500

// export const fakeAuth = {
//   isAuthenticated: false,
//   authenticate(): Observable<void> {
//     fakeAuth.isAuthenticated = true
//     return timer(LOGIN_TIME).pipe(map(v => {}))
//   },
//   signout(): Observable<void> {
//     fakeAuth.isAuthenticated = false
//     return timer(LOGOUT_TIME).pipe(map(v => {}))
//   }
// }

export class AuthenticationService {
  authentication = new BehaviorSubject<boolean>(false)

  authenticate = (): Observable<void> => {
    return timer(LOGIN_TIME).pipe(
      mapTo(undefined),
      tap(() => this.authentication.next(true))
    )
  }

  signout = (): Observable<void> => {
    return timer(LOGOUT_TIME).pipe(
      mapTo(undefined),
      tap(() => this.authentication.next(false))
    )
  }
}
export const authenticationService = new AuthenticationService()
