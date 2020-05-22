/* eslint-disable import/prefer-default-export */
import { notification } from 'antd'
import log from 'utils/log-test'

export const notifyFormValues = (
  values: any,
  message: string = 'Form Values'
) => {
  log.info(message, { values })
  notification.open({
    message,
    description: JSON.stringify(values, null, 2),
    duration: 3.0
  })
}
