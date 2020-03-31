import React from 'react'
import { connect } from 'react-redux'
import { getProducts } from '../actions/products'
import { addProducToOrder } from '../actions/order'
import  * as SC  from './StyledComponents'

class Products extends React.Component {
    state = {}

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
        console.log("Cantidad es: ", this.state[`cantidad-${product.id}`])
        product.qty = this.state[`cantidad-${product.id}`]
        this.props.dispatch (addProducToOrder({
            ...product,
            qty: this.state[`cantidad-${product.id}`]
        }))

        this.setState({
            [`cantidad-${product.id}`]: 0
        })
    }

    render() {
        return (
        <SC.DivContainer>
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
                        <SC.ButtonBtn color="#ff7272" margin="0px 15px">
                            Discard
                        </SC.ButtonBtn>
                        <SC.ButtonBtn margin="0px 15px">
                            Finish
                        </SC.ButtonBtn>
                    </SC.DivRowHorizontal>
                </SC.DivRowHorizontal>
                <SC.ListContainer>
                {
                    this.props.order && this.props.order.products.length > 0 ? this.props.order.products.map((product)=> 
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
                                <SC.ButtonBtn color="#ff7272">
                                    Remove
                                </SC.ButtonBtn>
                            </SC.ListSection> 
                        </SC.List>
                    ) : undefined
                }
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