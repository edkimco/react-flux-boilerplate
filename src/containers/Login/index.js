import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import LoginComponent from '@/components/Login'

import './style.scss'

export default class LoginContainer extends Component {
  state = {
    username: 'the6thm0nth',
    password: ''
  }

  render () {
    const {
      username,
      password
    } = this.state

    return (
      <Helmet
        key="helmet"
      >
        <title>Login</title>
      </Helmet>,
      <LoginComponent
        key="component"
        username={username}
        password={password}
      />
    )
  }
}

