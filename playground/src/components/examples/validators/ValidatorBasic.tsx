import React from 'react'
import { Input, Button, Form, Card } from 'antd'
import * as yup from 'yup'
import Log from 'utils/log-test'

const { Item } = Form

const schema = yup.object<LoginData>().shape({
  email: yup
    .string()
    .email()
    .required(),
  password: yup
    .string()
    .min(2)
    .max(8)
    .required()
})

interface LoginData {
  email: string
  password: string
}
interface State {
  loginData: LoginData
  errors: Record<string, yup.ValidationError | undefined>
}

export default class ValidatorBasic extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props)
    this.state = {
      loginData: {
        email: '',
        password: ''
      },
      errors: {}
    }
  }

  onEmailChange = (
    e: React.ChangeEvent<HTMLInputElement> | React.FocusEvent<HTMLInputElement>
  ) => {
    const { value } = e.target
    const { loginData } = this.state

    this.setState({
      loginData: { ...loginData, email: value }
    })
    // this.onLoginDataChange()
    this.onLoginDataPropChange('email')
  }

  onPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement> | React.FocusEvent<HTMLInputElement>
  ) => {
    const { value } = e.target
    const { loginData } = this.state
    this.setState({
      loginData: { ...loginData, password: value }
    })
    // this.onLoginDataChange()
    this.onLoginDataPropChange('password')
  }

  onLoginDataChange = () => {
    const { loginData } = this.state
    schema.validate(loginData).catch(errors => {
      Log.log('errors', errors)
      this.setState({
        errors
      })
    })
  }

  onLoginDataPropChange = (path: string) => {
    const { loginData, errors } = this.state
    schema
      .validateAt(path, loginData)
      .then(() => {
        this.setState({
          errors: { ...errors, [path]: undefined }
        })
      })
      .catch(err => {
        this.setState({
          errors: { ...errors, [err.path]: err }
        })
      })
  }

  onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  render() {
    const { loginData, errors } = this.state
    Log.log('validator-basic', {
      loginData,
      errors
    })
    return (
      <Card title="Basic">
        <Form onSubmitCapture={this.onSubmit} layout="inline">
          <Item>
            <Input
              type="email"
              name="email"
              placeholder="Email"
              onChange={this.onEmailChange}
              onBlur={this.onEmailChange}
              value={loginData.email}
            />
            {errors.email && errors.email?.message}
          </Item>
          <Item>
            <Input
              type="password"
              name="password"
              placeholder="Password"
              onChange={this.onPasswordChange}
              onBlur={this.onPasswordChange}
              value={loginData.password}
            />
            {errors.password && errors.password?.message}
          </Item>
          <Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Item>
        </Form>
      </Card>
    )
  }
}
