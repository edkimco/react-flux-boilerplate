import React, { Component } from 'react'
import { number, string } from 'prop-types'

export default class SampleComponent extends Component {
  static propTypes = {
    foo: number.isRequired,
    bar: string
  }

  render () {
    return (
      <div>
        <p>{this.props.foo}</p>
      </div>
    )
  }
}
