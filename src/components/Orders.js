import React from 'react'
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import { getOrders } from '../actions/orders'
import  * as SC  from './StyledComponents'

class Orders extends React.Component {

    componentDidMount = () => {
        this.props.dispatch(getOrders())
        .catch((error) => this.props.history.push('/'))
    }

    render(){
        const {orders} = this.props
        return (
            <SC.DivContainer>
                <SC.CenterBlock>
                    <SC.DivRowHorizontal>
                        <h1>Orders</h1>
                    </SC.DivRowHorizontal>
                    <SC.ListContainer>
                    {
                        orders && orders.length > 0 ? orders.map((order)=> 
                            <SC.List key={order.id}>
                                <SC.ListSection flexGrow="1">
                                    <SC.Text><b>{order.id}</b></SC.Text>
                                    <SC.Text>${order.subTotal}</SC.Text>
                                    <SC.Text>{order.Tip.name} ${order.subTotal * order.Tip.amount}</SC.Text>
                                    <SC.Text>${order.total}</SC.Text>
                                    <SC.Text>Cant Prod:{order.OrdersProducts.length}</SC.Text>
                                </SC.ListSection>
                            </SC.List>
                        ) : undefined
                    }
                    </SC.ListContainer>
                    <SC.DivRowHorizontal>
                        <Link to="/admin">Menu</Link>
                    </SC.DivRowHorizontal>
                </SC.CenterBlock>
            </SC.DivContainer>
        )
    }
}

function mapStateToProps ({orders}){
    return {
        orders
    }
}

export default connect(mapStateToProps)(Orders)