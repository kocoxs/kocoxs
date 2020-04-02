import React from 'react'
import { connect } from 'react-redux'
import { getProducts, deleteProduct } from '../actions/products'
import { Link } from "react-router-dom";
import  * as SC  from './StyledComponents'

class Products extends React.Component {

    componentDidMount = () => {
        this.props.dispatch(getProducts())
        .catch((error) => {
            if(error.message.includes("401") !== -1)
                this.props.history.push('/')
        })
    }

    removeProduct = (product) => {
        try {
            this.props.dispatch(deleteProduct(product))
        } catch (error) {
            this.props.history.push('/')
        }
    }

    render(){
        return (
            <SC.DivContainer fllexDirection="column" fullWidth>
                <SC.DivBlock>    
                    <SC.Title>Products</SC.Title>
                    <SC.DivRowHorizontal>
                        <Link to="/admin" className="links"> &#60; Menu </Link>
                    </SC.DivRowHorizontal>
                    <SC.ListContainer>
                        <SC.List>
                            <SC.ListSection width="33%">Product</SC.ListSection>
                            <SC.ListSection width="33%">Cost</SC.ListSection>
                            <SC.ListSection width="33%">&nbsp;</SC.ListSection>
                        </SC.List>
                        {
                            this.props.products && this.props.products.length > 0 ? this.props.products.map((product)=> 
                                <SC.List key={product.id}>
                                    <SC.ListSection width="33%" flexDirection="column">
                                        <SC.Img src={`http://localhost:3001/products/${product.icon}`} alt={product.name}/>
                                        <SC.Text>{product.name}</SC.Text>
                                    </SC.ListSection>
                                    <SC.ListSection width="33%">   
                                        <SC.Text>${product.price}</SC.Text>
                                    </SC.ListSection>
                                    <SC.ListSection width="33%">  
                                        <SC.ButtonBtn>
                                            <Link to={`/admin/products/edit/${product.id}`}>Edit</Link>
                                        </SC.ButtonBtn>
                                        <SC.ButtonBtn onClick={() => this.removeProduct(product)} color="#ff7272">
                                            Remove
                                        </SC.ButtonBtn>
                                    </SC.ListSection>
                                </SC.List>
                            ) : undefined
                        }
                    </SC.ListContainer>
                    <SC.DivRowHorizontal>
                        <SC.ButtonBtn>
                            <Link to="/admin/products/create">Create</Link>
                        </SC.ButtonBtn>
                    </SC.DivRowHorizontal>
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