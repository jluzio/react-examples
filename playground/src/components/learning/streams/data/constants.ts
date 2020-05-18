/* eslint-disable import/prefer-default-export */
import { FormProps, FormItemProps } from 'antd/lib/form'

interface FormLayoutProps {
  form?: Partial<FormProps>
  formActionsItemProps?: Partial<FormItemProps>
}

export const defaultFormLayout: FormLayoutProps = {
  form: {
    labelCol: { span: 4 },
    wrapperCol: { span: 16 }
  },
  formActionsItemProps: {
    wrapperCol: { offset: 4, span: 16 }
  }
}

export const BASE_PATH = '/streams'
