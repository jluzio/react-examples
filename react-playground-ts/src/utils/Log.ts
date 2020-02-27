/* eslint-disable no-console */
/* eslint-disable class-methods-use-this */
export default class Log {
  static log(message?: any, ...optionalParams: any[]) {
    console.log(message, optionalParams)
  }

  static error(message?: any, ...optionalParams: any[]) {
    console.error(message, optionalParams)
  }

  static info(message?: any, ...optionalParams: any[]) {
    console.info(message, optionalParams)
  }

  static debug(message?: any, ...optionalParams: any[]) {
    console.debug(message, optionalParams)
  }
}
