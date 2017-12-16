import React, { Component } from 'react'
import { string } from 'prop-types'

export default class LoginComponent extends Component {
  static propTypes = {
    username: string.isRequired
  }

  render () {
    const {
      username
    } = this.props

    return (
      <div>
        <h1>{username}</h1>
      </div>
    )
  }
}

