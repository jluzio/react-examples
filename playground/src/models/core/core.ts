/* eslint-disable no-useless-constructor */
export enum ResourceStatus {
  UNDEFINED = 'UNDEFINED',
  PENDING = 'PENDING',
  DEFINED = 'DEFINED',
  ERROR = 'ERROR'
}

export class ResourceStatusData {
  constructor(public status: ResourceStatus = ResourceStatus.UNDEFINED) {
    //
  }

  static valueOf(
    resourceStatusType: ResourceStatus | ResourceStatusData
  ): ResourceStatusData {
    const resourceStatus =
      resourceStatusType instanceof ResourceStatusData
        ? resourceStatusType.status
        : resourceStatusType
    return new ResourceStatusData(resourceStatus)
  }

  static promiseHandler<T>(
    resourceStatus: ResourceStatusData,
    promise: Promise<T>
  ): Promise<T> {
    resourceStatus.setPending()
    return promise
      .then(v => {
        resourceStatus.setDefined()
        return v
      })
      .finally(() => {
        resourceStatus.setErrorIfPending()
      })
  }

  get undefined() {
    return this.status === ResourceStatus.PENDING
  }

  get pending() {
    return this.status === ResourceStatus.PENDING
  }

  get defined() {
    return this.status === ResourceStatus.DEFINED
  }

  get error() {
    return this.status === ResourceStatus.ERROR
  }

  setUndefined() {
    this.status = ResourceStatus.UNDEFINED
  }

  setPending() {
    this.status = ResourceStatus.PENDING
  }

  setDefined() {
    this.status = ResourceStatus.DEFINED
  }

  setError() {
    this.status = ResourceStatus.ERROR
  }

  setErrorIfPending() {
    if (this.pending) {
      this.setError()
    }
  }
}
