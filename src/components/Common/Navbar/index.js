import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Grid, Navbar } from 'react-bootstrap'

export default class NavbarContainer extends Component {
  render () {
    return (
      <Navbar inverse>
        <Grid>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">React App</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
        </Grid>
      </Navbar>
    )
  }
}
