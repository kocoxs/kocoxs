import React from 'react'
import { connect } from 'react-redux'
import { getProducts } from '../actions/products'
import { ToastsContainer, ToastsStore } from 'react-toasts';

import { deleteSeSion } from '../actions/users'
import { addProducToOrder, removeProducfromOrder, editProducInOrder, discardOrder } from '../actions/order'
import  * as SC  from './StyledComponents'

class MakeOrder extends React.Component {
    state = {
    }

    componentDidMount = async () =>{
        this.props.dispatch(getProducts())
        // .catch((error) => { 
        //     if(error.message.includes("401") !== -1){
        //         ToastsStore.error("Sesion Expired") 
        //         setTimeout(() => this.props.dispatch(deleteSeSion()), 2000 )
        //     } else{
        //         ToastsStore.error(error) 
        //     }   
        // })
    }

    handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        })
    }

    addToOrder = (product) => {
        const qty = parseInt(this.state[`cantidad-${product.id}`],10)

        if(isNaN(qty))
            return alert("Ingresa un Numero")

        this.props.dispatch (addProducToOrder({
            ...product,
            qty 
        }))

        this.setState({
            [`cantidad-${product.id}`]: 0
        }) 
    }

    editQuantity = (product) =>{
        const qty = parseInt(this[`countEdit${product.id}`].value, 10)
        if(isNaN(qty))
            return alert("Ingresa un Numero")

        this.props.dispatch (editProducInOrder({
            ...product,
            qty
        }))
        this[`countEdit${product.id}`].value = ''
    }

    removeFromOrder = (product) => {
        this.props.dispatch (removeProducfromOrder(product))
    }

    discard = () => {
        this.props.dispatch (discardOrder())
    }

    redirectToTip = () => { 
        this.props.history.push('/tip') 
    }

    render() {
        let total = 0;
        return (
        <SC.DivContainer fllexDirection="column" fullWidth>
            <SC.DivBlock>    
                <SC.Title>Products</SC.Title>
                <SC.ListContainer>
                    <SC.List>
                        <SC.ListSection>Product</SC.ListSection>
                        <SC.ListSection>Cost</SC.ListSection>
                        <SC.ListSection>Quantity</SC.ListSection>
                        <SC.ListSection>&nbsp;</SC.ListSection>
                    </SC.List>
                    {
                        this.props.products && this.props.products.length > 0 ? this.props.products.map((product)=> 
                            <SC.List key={product.id}>
                                <SC.ListSection flexDirection="column">
                                    <SC.Img src={`http://localhost:3001/products/${product.icon}`} alt={product.name}/>
                                    <SC.Text>{product.name}</SC.Text>
                                </SC.ListSection>
                                <SC.ListSection>
                                    <SC.Text> ${product.price}</SC.Text>
                                </SC.ListSection>
                                <SC.ListSection>
                                    <SC.Input 
                                        type="text" 
                                        placeholder="ej: 1"
                                        name={`cantidad-${product.id}`}
                                        value={this.state[`cantidad-${product.id}`]}
                                        onChange={this.handleChange}
                                    />
                                </SC.ListSection>
                                <SC.ListSection>
                                    <SC.ButtonBtn onClick={()=> this.addToOrder(product)}>
                                        Add
                                    </SC.ButtonBtn>
                                </SC.ListSection> 
                            </SC.List>
                        ) : undefined
                    }
                </SC.ListContainer>
            </SC.DivBlock>
            <SC.DivBlock>    
                <SC.DivRowHorizontal>
                    <SC.Title>Order</SC.Title>
                    {
                        (this.props.order.products && this.props.order.products.length) > 0 &&
                        <SC.DivRowHorizontal justifyContent="flex-end">
                            <SC.ButtonBtn type="button" color="#ff7272" margin="0px 15px" onClick={ this.discard }>
                                Discard
                            </SC.ButtonBtn>
                            <SC.ButtonBtn type="button" margin="0px 15px" onClick={ this.redirectToTip }>
                                Finish
                            </SC.ButtonBtn>
                        </SC.DivRowHorizontal>
                    }
                </SC.DivRowHorizontal>
                <SC.ListContainer>
                    <SC.List>
                        <SC.ListSection>Product</SC.ListSection>
                        <SC.ListSection>Cost</SC.ListSection>
                        <SC.ListSection>Quantity</SC.ListSection>
                        <SC.ListSection>Subtotal</SC.ListSection>
                    </SC.List>
                    {
                        this.props.order && this.props.order.products ? this.props.order.products.map((product)=> {
                            total += product.price * product.qty
                            return (
                            <SC.List key={product.id} flexDirection="column">
                                <SC.DivRowHorizontal>
                                    <SC.ListSection  flexDirection="column">
                                        <SC.Img src={`http://localhost:3001/products/${product.icon}`} alt={product.name}/>
                                        <SC.Text >{product.name}</SC.Text>
                                    </SC.ListSection>
                                    <SC.ListSection>
                                        <SC.Text>${product.price}</SC.Text>
                                    </SC.ListSection>
                                    <SC.ListSection >
                                        <SC.Text>{product.qty}</SC.Text>
                                    </SC.ListSection>
                                    <SC.ListSection >
                                        <SC.Text>${ parseFloat(product.price * product.qty).toFixed(2)}</SC.Text> 
                                    </SC.ListSection>
                                </SC.DivRowHorizontal>
                                <SC.DivRowHorizontal>
                                    <SC.ListSection >
                                        <SC.Input 
                                            type="text" 
                                            placeholder="Edit Quantity"
                                            ref={input => this[`countEdit${product.id}`] = input}
                                        />
                                        </SC.ListSection>
                                    <SC.ListSection >
                                        <SC.ButtonBtn onClick={() => this.editQuantity(product)}>
                                            Edit
                                        </SC.ButtonBtn>
                                        </SC.ListSection>
                                    <SC.ListSection >
                                        <SC.ButtonBtn color="#ff7272" onClick={() => this.removeFromOrder(product)}>
                                            Remove
                                        </SC.ButtonBtn>
                                    </SC.ListSection> 
                                </SC.DivRowHorizontal>
                                

                            </SC.List>
                            )
                        }

                        ) : undefined
                    }
                    <SC.List>
                        <SC.ListSection justifyContent="space-evenly">
                            {
                                (this.props.order.products && this.props.order.products.length) &&
                                <SC.ButtonBtn type="button" color="#ff7272" margin="0px 15px" onClick={ this.discard }>
                                    Discard
                                </SC.ButtonBtn>
                            }{
                                (this.props.order.products && this.props.order.products.length) &&
                                <SC.ButtonBtn type="button" margin="0px 15px" onClick={ this.redirectToTip }>
                                    Finish
                                </SC.ButtonBtn>
                            }
                            <SC.Text>Total: ${parseFloat(total).toFixed(2)}</SC.Text>
                        </SC.ListSection>
                    </SC.List>
                </SC.ListContainer>
            </SC.DivBlock>
            <ToastsContainer store={ToastsStore}/>
        </SC.DivContainer>
      )
    }
}

function mapStateToProps ({products, order}){
    return {
        products,
        order
    }
}

export default connect(mapStateToProps)(MakeOrder)