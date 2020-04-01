import React from 'react'
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import { getOrders } from '../actions/orders'
import  * as SC  from './StyledComponents'

class Orders extends React.Component {

    state = {
        orders: {}
    }

    componentDidMount = () => {
        this.props.dispatch(getOrders())
        .catch((error) => this.props.history.push('/'))
    }

    render(){
        const { orders } = this.props
        return (
            <SC.DivContainer>
                <SC.DivBlock>
                    <SC.DivRowHorizontal>
                        <h1>Orders</h1>
                    </SC.DivRowHorizontal>
                    <SC.ListContainer>
                    {
                        orders && orders.length > 0 ? orders.map((order)=> 
                            <SC.List key={order.id} vertical>
                                <SC.ListSection flexGrow="1">
                                    <SC.Text><b>{order.id}</b></SC.Text>
                                    <SC.Text>${order.subTotal}</SC.Text>
                                    <SC.Text>{order.Tip.name} ${order.subTotal * order.Tip.amount}</SC.Text>
                                    <SC.Text>${order.total}</SC.Text>
                                    <SC.Text>Cant Prod:{order.OrdersProducts.length}</SC.Text>
                                </SC.ListSection>
                                <h2>Products</h2>
                                <SC.ListContainer>
                                    { 
                                        order.OrdersProducts.map((product)=> {
                                            if(!product.show)
                                                product.show = 'none'
                                            return (<SC.List key={order.id + product.id} vertical hide={product.show = ''}>
                                                <SC.ListSection flexGrow="1">
                                                    <img src={`http://localhost:3001/products/${product.Product.icon}`} alt={product.Product.name}/>
                                                    <SC.Text><b>{product.Product.name}</b></SC.Text>
                                                    <SC.Text>${product.Product.price}</SC.Text>
                                                    <SC.Text>{product.quantity}</SC.Text>
                                                    <SC.Text>${product.quantity * product.Product.price}</SC.Text>
                                                </SC.ListSection>
                                            </SC.List>)}
                                        )
                                    }
                                </SC.ListContainer>
                            </SC.List>
                        ) : undefined
                    }
                    </SC.ListContainer>
                    <SC.DivRowHorizontal>
                        <Link to="/admin">Menu</Link>
                    </SC.DivRowHorizontal>
                </SC.DivBlock>
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