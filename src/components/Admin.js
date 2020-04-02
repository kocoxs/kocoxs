import React from 'react'
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import { logout as actionLogOut } from '../actions/users'
import  * as SC  from './StyledComponents'

class Admin extends React.Component {
    
    logout = () => {
        this.props.dispatch(actionLogOut())
    }

    render(){
        const { users } = this.props
        return (
            <SC.DivContainer>
                <SC.CenterBlock>
                    <SC.DivRowHorizontal>
                        <SC.Title>Welcome</SC.Title>
                    </SC.DivRowHorizontal>
                    <SC.DivRowHorizontal>
                        <Link to="/admin/products" className="links">Products</Link>
                    </SC.DivRowHorizontal>
                    <SC.DivRowHorizontal>
                        <Link to="/admin/orders" className="links">Orders</Link>
                    </SC.DivRowHorizontal>
                </SC.CenterBlock>
            </SC.DivContainer>
        )
    }
}

function mapStateToProps ({users}){
    return {
      users
    }
}

export default connect(mapStateToProps)(Admin)