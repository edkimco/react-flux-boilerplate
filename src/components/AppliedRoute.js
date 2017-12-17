import React from 'react'
import { Route } from 'react-router-dom'
import NavbarContainer from '@/containers/Common/Navbar'

export default ({ component: C, props: cProps, ...rest }) => (
  <Route {...rest} render={props => (
    [
      <NavbarContainer key="navbar" />,
      <C key="body" {...props} {...cProps} />
    ]
  )} />
)
