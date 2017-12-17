import React, { Component } from 'react'
import { Grid } from 'react-bootstrap'
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
      <Grid id="login">
        <h1>{username}</h1>
      </Grid>
    )
  }
}

