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
        this.props.history.push('/products')
    }

    render(){
        const { order } = this.props
        const { products } = order
        let subtotal = 0;
        return (
            <SC.DivContainer>
                <SC.DivBlock>
                    <h1>Detail</h1>
                    <h2>Thank for drink here!</h2>
                    <SC.ListContainer>
                    {
                        products && products.length > 0 ? products.map((product)=> {
                            subtotal = product.price * product.qty
                            return (
                            <SC.List key={product.id}>
                                <SC.ListSection flexGrow="1">
                                    <img src={`http://localhost:3001/products/${product.icon}`} alt={product.name}/>
                                </SC.ListSection>
                                <SC.ListSection  flexGrow="1" justifyContent="space-evenly">
                                    <SC.Text><b>{product.name}</b></SC.Text>
                                </SC.ListSection>
                                <SC.ListSection  flexGrow="1" justifyContent="space-evenly">
                                    <SC.Text>${product.price}</SC.Text>
                                </SC.ListSection>
                                <SC.ListSection  flexGrow="1" justifyContent="space-evenly">
                                    <SC.Text flexGrow="3">Qty:{product.qty}</SC.Text>
                                </SC.ListSection>
                                <SC.ListSection flexGrow="1" justifyContent="space-evenly">
                                    <label>Amount: ${subtotal} </label>
                                </SC.ListSection> 
                            </SC.List>)
                        }
                        
                    ) : undefined
                }
                    <SC.List>
                        <SC.ListSection flexGrow="1" justifyContent="flex-end">
                            SubTotal: ${order.subTotal}
                        </SC.ListSection>
                    </SC.List>
                    <SC.List>
                        <SC.ListSection flexGrow="1" justifyContent="flex-end">
                            Tip: {order.Tip.name} { order.subTotal * order.Tip.amount }
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