import React from 'react'
import * as SC from './StyledComponents'
import { connect } from 'react-redux'
import { logout as actionLogOut } from '../actions/users'

class Logout extends React.Component { 

    logout = () => {
        this.props.dispatch(actionLogOut())
    }

    render() {  
        return (
            <SC.DivHeader>
                <SC.Links href="javascript:void(0)" onClick={this.logout} >Logout</SC.Links>
            </SC.DivHeader>
      )
    }
}

function mapStateToProps ({users}){
    return {
      users
    }
}

export default connect(mapStateToProps)(Logout)