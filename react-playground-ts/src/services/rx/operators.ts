/* eslint-disable import/prefer-default-export */
import { ResourceStatus } from 'models/core'
import { Observable, MonoTypeOperatorFunction } from 'rxjs'

export function resourceStatusOperator<T>(
  setStatus: (status: ResourceStatus) => void
): MonoTypeOperatorFunction<T> {
  return observable =>
    new Observable(observer => {
      // this function will called each time this
      // Observable is subscribed to.
      setStatus(ResourceStatus.PENDING)
      const subscription = observable.subscribe({
        next(value) {
          setStatus(ResourceStatus.DEFINED)
          observer.next(value)
        },
        error(err) {
          observer.error(err)
        },
        complete() {
          observer.complete()
        }
      })
      // the return value is the teardown function,
      // which will be invoked when the new
      // Observable is unsubscribed from.
      return () => {
        subscription.unsubscribe()
      }
    })
}
