import React from 'react'
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import { ToastsContainer, ToastsStore } from 'react-toasts';
import { deleteSeSion } from '../actions/users'
import { getOrders, toggleShow } from '../actions/orders'
import  * as SC  from './StyledComponents'

class Orders extends React.Component {

    state = {
        orders: {}
    }

    componentDidMount = () => {
        this.props.dispatch(getOrders())
        .catch((error) => { 
            if(error.message.includes("401") !== -1){
                ToastsStore.error("Sesion Expired") 
                setTimeout(() => this.props.dispatch(deleteSeSion()), 2000 )
            } else{
                ToastsStore.error(error) 
            }   
        })
    }

    showProduct = (order) => {
        this.props.dispatch(toggleShow(order))
    }

    render(){
        const { orders } = this.props
        return (
            <SC.DivContainer>
                <SC.DivBlock>
                    <SC.DivRowHorizontal>
                        <SC.Title>Orders</SC.Title>
                    </SC.DivRowHorizontal>
                    <SC.ListContainer>
                    {
                        orders && orders.length > 0 ? orders.map((order)=> {
                            return (
                                
                            <SC.List key={order.id}  flexDirection="column">
                                <SC.DivRowHorizontal separator>
                                    <SC.ListSection>ID</SC.ListSection>
                                    <SC.ListSection>Subtotal</SC.ListSection>
                                    <SC.ListSection>Tip</SC.ListSection>
                                    <SC.ListSection>Total</SC.ListSection>
                                    <SC.ListSection></SC.ListSection>
                                </SC.DivRowHorizontal>
                                <SC.DivRowHorizontal>
                                    <SC.ListSection><SC.Text>{order.id}</SC.Text></SC.ListSection>
                                    <SC.ListSection>${order.subTotal}</SC.ListSection>
                                    <SC.ListSection><SC.Text>{order.Tip.name} ${parseFloat(order.subTotal * order.Tip.amount).toFixed(2)}</SC.Text></SC.ListSection>
                                    <SC.ListSection>${order.total}</SC.ListSection>
                                    <SC.ListSection>
                                        <SC.ButtonBtn onClick={() => this.showProduct(order)}>
                                            { order.show ? '-' : '+'}
                                        </SC.ButtonBtn>
                                    </SC.ListSection>
                                </SC.DivRowHorizontal>
                                {
                                    order.show &&
                                    <SC.ListContainer>
                                        <SC.List>
                                            <SC.ListSection>Product</SC.ListSection>
                                            <SC.ListSection>Cost</SC.ListSection>
                                            <SC.ListSection>Quantity</SC.ListSection>
                                            <SC.ListSection>Subtotal</SC.ListSection>
                                        </SC.List>

                                        { 
                                            order.OrdersProducts.map((product)=>
                                                <SC.List key={order.id + product.id} vertical hide={product.show = ''}>
                                                    <SC.ListSection  flexDirection="column">
                                                        <img src={`http://localhost:3001/products/${product.Product.icon}`} alt={product.Product.name}/>
                                                        <SC.Text>{product.Product.name}</SC.Text>
                                                    </SC.ListSection>
                                                    <SC.ListSection>
                                                        <SC.Text>${product.Product.price}</SC.Text>
                                                    </SC.ListSection>
                                                    <SC.ListSection>
                                                        <SC.Text>{product.quantity}</SC.Text>
                                                    </SC.ListSection>
                                                    <SC.ListSection>
                                                        <SC.Text>${parseFloat(product.quantity * product.Product.price).toFixed(2)}</SC.Text>
                                                    </SC.ListSection>
                                                </SC.List>
                                            )
                                        }
                                    </SC.ListContainer>
                                }
                            </SC.List>
                            )
                        }
                        ) : undefined
                    }
                    </SC.ListContainer>
                    <SC.DivRowHorizontal>
                        <Link to="/admin">Menu</Link>
                    </SC.DivRowHorizontal>
                </SC.DivBlock>
                <ToastsContainer store={ToastsStore}/>
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