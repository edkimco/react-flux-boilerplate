import React from 'react'
import { Switch } from 'react-router-dom'
import Loadable from 'react-loadable'

/* Import the components */
import AppliedRoute from './components/AppliedRoute'
import LoadingComponent from './components/LoadingComponent'

const AsyncHome = Loadable({
  loader: () => import('./containers/Home'),
  loading: LoadingComponent
})
const AsyncLogin = Loadable({
  loader: () => import('./containers/Login'),
  loading: LoadingComponent
})

/* Use components to define routes */
export default ({ childProps }) =>
  <Switch>
    <AppliedRoute exact path='/' component={AsyncHome} props={childProps} />
    <AppliedRoute exact path='/login' component={AsyncLogin} props={childProps} />

    {/* Finally, catch all unmatched routes */}
    {/* <Route component={AsyncNotFound} /> */}
  </Switch>
