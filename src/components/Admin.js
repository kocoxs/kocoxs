import React from 'react'
import { connect } from 'react-redux'
import  * as SC  from './StyledComponents'
import { Link } from "react-router-dom";

class Admin extends React.Component {
    render(){
        const { users } = this.props
        return (
            <SC.DivContainer>
                <SC.CenterBlock>
                    <SC.DivRowHorizontal>
                        <h1>Benvenido {users.user.name}</h1>
                    </SC.DivRowHorizontal>
                    <SC.DivRowHorizontal>
                        <Link to="/admin/products">Products</Link>
                    </SC.DivRowHorizontal>
                    <SC.DivRowHorizontal>
                        <Link to="/admin/orders">Orders</Link>
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