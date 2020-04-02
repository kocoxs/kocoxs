import React from 'react'
import * as SC from './StyledComponents'
import { ToastsContainer, ToastsStore } from 'react-toasts';
import { connect } from 'react-redux'
import { logout as actionLogOut, deleteSeSion } from '../actions/users'

class Logout extends React.Component { 

    logout = () => {
        this.props.dispatch(actionLogOut())
        .then((data)=> this.props.histoy.push('/'))
        .catch((error) => { 
            if(error.message.includes("401") !== -1){
                ToastsStore.error("Sesion Expired") 
                setTimeout(() => this.props.dispatch(deleteSeSion()), 2000 )
            } else{
                ToastsStore.error(error) 
            } 
        })
    }

    render() {  
        return (
            <SC.DivHeader>
                <SC.Links href="javascript:void(0)" onClick={this.logout} >Logout</SC.Links>
                <ToastsContainer store={ToastsStore}/>
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