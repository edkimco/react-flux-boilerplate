import React, { Component } from 'react'
import { Helmet } from 'react-helmet'

import AuthActions from '@/actions/Auth'
import LoginComponent from '@/components/Login'

import './style.scss'

export default class LoginContainer extends Component {
  state = {
    username: '',
    password: ''
  }

  handleChange = e => {
    const updatedState = {}
    updatedState[e.target.name] = e.target.value
    this.setState(updatedState)
  }

  login = () => {
    AuthActions.logIn()
      .then(result => {
        // success
      })
      .catch(err => {
        // fail
      })
  }

  render() {
    const { username, password } = this.state

    return (
      (
        <Helmet key="helmet">
          <title>Login</title>
        </Helmet>
      ),
      (
        <LoginComponent
          key="component"
          username={username}
          password={password}
          handleChange={this.handleChange}
          login={this.login}
        />
      )
    )
  }
}
