import React, { Component } from 'react'
import LoginComponent from '@/components/Login'

export default class LoginContainer extends Component {
  state = {
    username: ''
  }

  render () {
    const {
      username
    } = this.state

    return (
      <LoginComponent
        username={username}
      />
    )
  }
}

