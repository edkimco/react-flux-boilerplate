import React, { Component } from 'react'
import { Grid } from 'react-bootstrap'
import PropTypes from 'prop-types'

export default class LoginComponent extends Component {
  static propTypes = {
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired
  }

  render() {
    const {
      username,
      password,

      handleChange,
      login
    } = this.props

    return (
      <Grid id="login">
        <h1>username</h1>
        <input
          type="text"
          name="username"
          value={username}
          onChange={handleChange}
        />

        <h1>password</h1>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />

        <button onClick={login}>로그인</button>
      </Grid>
    )
  }
}
