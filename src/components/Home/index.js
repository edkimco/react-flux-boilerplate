import React, { Component } from 'react'
import { Grid, Button } from 'react-bootstrap'

export default class HomeComponent extends Component {
  render () {
    return (
      <Grid>
        <h1>Welcome to React</h1>
        <p>
          <Button
            bsStyle="success"
            bsSize="large"
            href="http://react-bootstrap.github.io/components.html"
            target="_blank"
          >
            View React Bootstrap Docs
          </Button>
        </p>
      </Grid>
    )
  }
}

