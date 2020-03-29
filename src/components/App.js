import React, { Component } from 'react'
import Login from './Login'
import Products from './Products'
import { BrowserRouter as Router, Route } from 'react-router-dom'

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

export default App