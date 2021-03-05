import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import HomePage from './pages/Home'

function App () {
  return (
   <BrowserRouter>
    <Switch>
      <Route path="/" exact>
        <HomePage />
      </Route>
    </Switch>
   </BrowserRouter>
  )
}

export default App
