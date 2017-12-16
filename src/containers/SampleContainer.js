import React, { Component } from 'react'
import { Container } from 'flux/utils'

class SampleContainer extends Component {
  render () {
    return (
      <div>
        <h1>Login</h1>
      </div>
    )
  }
}

SampleContainer.getStores = () => ([])
SampleContainer.calculateState = (prevState) => ({
})

export default Container.create(LoginContainer)

