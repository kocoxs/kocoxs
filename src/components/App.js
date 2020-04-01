import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import Login from './Login'
import MakeOrder from './MakeOrder'
import Tip from './Tip'
import Detail from './Detail'
import Admin from './Admin'
import Orders from './Orders'
import Products from './Products'
import ProductsCreate from './ProductsCreate'

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path='/' component={Login} />
        <Route path='/makeorder' component={MakeOrder} />
        <Route path='/tip' component={Tip} />
        <Route path='/detail' component={Detail} />
        <Route exact path='/admin' component={Admin} />
        <Route exact path='/admin/orders' component={Orders} />
        <Route exact path='/admin/products' component={Products} />
        <Route exact path='/admin/products/create' component={ProductsCreate} />
        <Route exact path='/admin/products/edit/:id' component={ProductsCreate} />
      </Router>
    )
  }
}

export default connect()(App)