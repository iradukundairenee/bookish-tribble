import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Cards from '../views/Cards'


function index() {
  return (
    <Switch>
      <Route path="/" component={Cards} />
      <Route exact path="/login" component={login} />
    </Switch>
  )
}

export default index