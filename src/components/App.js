import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import Login from './Login'
import Products from './Products'

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path='/' component={Login} />
        <Route path='/products' component={Products} />
      </Router>
    )
  }
}

export default connect()(App)