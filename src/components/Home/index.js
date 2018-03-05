import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Grid, Button } from 'react-bootstrap'

export default class HomeComponent extends Component {
  render() {
    return (
      <Grid>
        <h1>Welcome to React</h1>
        <ul>
          <li>
            <Link to="/login">로그인</Link>
          </li>
        </ul>
      </Grid>
    )
  }
}
