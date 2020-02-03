/* eslint-disable no-console */
/* eslint-disable class-methods-use-this */
export default class Log {
  static log(message?: any, ...optionalParams: any[]) {
    console.log(message, optionalParams)
  }
}
