import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import _api from '../utils/api/config'

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
    const { users } = this.props

    if(users && users.token  && users.token !== ''){ 
      _api.defaults.headers.common = {'Authorization': `Bearer ${this.props.users.token}`}
      
      if(users.user.RolId == 1){
        return (
          <Router>
            <Route exact path='/' component={Login} />
            <Route exact path='/admin' component={Admin} />
            <Route exact path='/admin/orders' component={Orders} />
            <Route exact path='/admin/products' component={Products} />
            <Route exact path='/admin/products/create' component={ProductsCreate} />
            <Route exact path='/admin/products/edit/:id' component={ProductsCreate} />
            <Route path="*">
              <Redirect to={{ pathname: "/admin" }} />
            </Route>
          </Router>
        )
      }else if(users.user.RolId == 2){
        return (
          <Router>
            <Route exact path='/' component={Login} />
            <Route exact path='/makeorder' component={MakeOrder} />
            <Route exact path='/tip' component={Tip} />
            <Route exact path='/detail' component={Detail} />
            <Route path="*">
              <Redirect to={{ pathname: "/makeorder" }} />
            </Route>
          </Router>
        )
      }


    }else{
      return <Login />
    }

  }
}

function mapStateToProps ({users}){
  return {
    users
  }
}

export default connect(mapStateToProps)(App)