import React from 'react'
import { connect } from 'react-redux'
import { getProducts } from '../actions/products'
import { addProducToOrder, removeProducfromOrder, edditProducInOrder, discardOrder } from '../actions/order'
import  * as SC  from './StyledComponents'

class Products extends React.Component {
    state = {
    }

    componentDidMount = async () =>{
        this.props.dispatch(getProducts())
        .catch((error) => this.props.history.push('/'))
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

        this.props.dispatch (edditProducInOrder({
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

    render() {
        let total = 0;
        return (
        <SC.DivContainer fllexDirection="column" fullWidth>
            <SC.DivBlock>    
                <h1>Products</h1>
                <SC.ListContainer>
                {
                    this.props.products && this.props.products.length > 0 ? this.props.products.map((product)=> 
                        <SC.List key={product.id}>
                            <SC.ListSection flexGrow="1">
                                <img src={`http://localhost:3001/products/${product.icon}`} alt={product.name}/>
                            </SC.ListSection>
                            <SC.ListSection  flexGrow="3" justifyContent="space-evenly">
                                <SC.Text flexGrow="1"><b>{product.name}</b></SC.Text>
                                <SC.Text flexGrow="3">Cost: ${product.price}</SC.Text>
                            </SC.ListSection>
                            <SC.ListSection flexGrow="4" justifyContent="space-evenly">
                                <label>Quantity: </label>
                                <SC.Input 
                                    type="text" 
                                    placeholder="ej: 1"
                                    name={`cantidad-${product.id}`}
                                    value={this.state[`cantidad-${product.id}`]}
                                    onChange={this.handleChange}
                                />
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
                    <h1>Order</h1>
                    <SC.DivRowHorizontal justifyContent="flex-end">
                        <SC.ButtonBtn color="#ff7272" margin="0px 15px" onClick={this.discard}>
                            Discard
                        </SC.ButtonBtn>
                        <SC.ButtonBtn margin="0px 15px">
                            Finish
                        </SC.ButtonBtn>
                    </SC.DivRowHorizontal>
                </SC.DivRowHorizontal>
                <SC.ListContainer>
                {
                    this.props.order && this.props.order.products ? this.props.order.products.map((product)=> {
                        total += product.price * product.qty
                        return (
                        <SC.List key={product.id}>
                            <SC.ListSection flexGrow="1">
                                <img src={`http://localhost:3001/products/${product.icon}`} alt={product.name}/>
                            </SC.ListSection>
                            <SC.ListSection  flexGrow="3" justifyContent="space-evenly">
                                <SC.Text flexGrow="1"><b>{product.name}</b></SC.Text>
                                <SC.Text flexGrow="3">Cost: ${product.price}</SC.Text>
                            </SC.ListSection>
                            <SC.ListSection flexGrow="4" justifyContent="space-evenly">
                                <label>Quantity: {product.qty}</label>
                                <SC.Input 
                                    type="text" 
                                    placeholder="Edit Quantity"
                                    ref={input => this[`countEdit${product.id}`] = input}
                                />
                                <SC.ButtonBtn onClick={() => this.editQuantity(product)}>
                                    Edit
                                </SC.ButtonBtn>
                                <SC.ButtonBtn color="#ff7272" onClick={() => this.removeFromOrder(product)}>
                                    Remove
                                </SC.ButtonBtn>
                                <label>
                                    Amount: ${ product.price * product.qty } 
                                </label>
                            </SC.ListSection> 
                        </SC.List>
                        )
                    }

                    ) : undefined
                }
                    <SC.List>
                        <SC.ListSection flexGrow="1" justifyContent="flex-end">
                            <label>Total: ${total}</label>
                        </SC.ListSection>
                    </SC.List>
                </SC.ListContainer>
            </SC.DivBlock>
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

export default connect(mapStateToProps)(Products)