import React from 'react'
import { connect } from 'react-redux'
import { discardOrder } from '../actions/order'
import  * as SC  from './StyledComponents'

class Detail extends React.Component {

    state = {
        tip: {}
    }

    finish = () => {
        this.props.dispatch (discardOrder())
        this.props.history.push('/makeorder')
    }

    render(){
        const { order } = this.props
        const { products } = order
        let subtotal = 0;
        return (
            <SC.DivContainer>
                <SC.DivBlock>
                    <SC.Title>Detail</SC.Title>
                    <SC.SubTitle>Thank for drink here!</SC.SubTitle>
                    <SC.ListContainer>
                    <SC.List>
                        <SC.ListSection>Product</SC.ListSection>
                        <SC.ListSection>Cost</SC.ListSection>
                        <SC.ListSection>Quantity</SC.ListSection>
                        <SC.ListSection>Subtotal</SC.ListSection>
                    </SC.List>
                    {
                        products && products.length > 0 ? products.map((product)=> {
                            subtotal = product.price * product.qty
                            return (
                            <SC.List key={product.id}>
                                <SC.ListSection  flexDirection="column">
                                    <img src={`http://localhost:3001/products/${product.icon}`} alt={product.name}/>
                                    <SC.Text>{product.name}</SC.Text>
                                </SC.ListSection>
                                <SC.ListSection   justifyContent="space-evenly">
                                    <SC.Text>${product.price}</SC.Text>
                                </SC.ListSection>
                                <SC.ListSection   justifyContent="space-evenly">
                                    <SC.Text >{product.qty}</SC.Text>
                                </SC.ListSection>
                                <SC.ListSection  justifyContent="space-evenly">
                                    <label>${subtotal}</label>
                                </SC.ListSection> 
                            </SC.List>)
                        })    : undefined
                    }
                    <SC.List>
                        <SC.ListSection flexGrow="1" justifyContent="flex-end">
                            SubTotal: ${order.subTotal}
                        </SC.ListSection>
                    </SC.List>
                    <SC.List>
                        <SC.ListSection flexGrow="1" justifyContent="flex-end">
                            Tip: {order.Tip.name} { parseFloat(order.subTotal * order.Tip.amount).toFixed(2) }
                        </SC.ListSection>
                    </SC.List>
                    <SC.List>
                        <SC.ListSection flexGrow="1" justifyContent="flex-end">
                            Total: ${order.total}
                        </SC.ListSection>
                    </SC.List>
                </SC.ListContainer>
                <SC.DivRowHorizontal>
                    <SC.ButtonBtn onClick={this.finish}>
                        Finish
                    </SC.ButtonBtn>
                </SC.DivRowHorizontal>
                </SC.DivBlock>
            </SC.DivContainer>
        )
    }
}

function mapStateToProps ({tips, order}){
    return {
      tips, order
    }
}

export default connect(mapStateToProps)(Detail)