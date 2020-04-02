import React from 'react'
import { connect } from 'react-redux'
import { ToastsContainer, ToastsStore } from 'react-toasts';
import { createProduct, editProduct } from '../actions/products'
import { Link } from "react-router-dom";
import { deleteSeSion } from '../actions/users'
import  * as SC  from './StyledComponents'

class ProductsCreate extends React.Component {

    state = {
        name: '',
        price: '',
        icon: {}
    } 

    componentDidMount = () => {
        if( this.props.createOrEdit == 1 && this.props.product ){
            this.setState({
                name:  this.props.product.name,
                price:  this.props.product.price,
                icon:  this.props.product.icon,
                id: this.props.product.id
            })
        }
    }

    handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        })
    }

    saveFile = (file) => {
        this.setState({
            icon: file
        })
    }

    CreateProduct = async () => {
        try {
            if(this.props.createOrEdit == 1){
                let product = { ...this.state } 
                if(typeof product.icon === 'string')
                    delete product.icon;
                this.props.dispatch(editProduct(product))
                ToastsStore.success("Editado con Exito")
                this.props.history.push('/admin/products')
            } else {
                this.props.dispatch(createProduct(this.state))
                ToastsStore.success("Creado con Exito")
                this.props.history.push('/admin/products')
            } 
        } catch (error) {
            if(error.message.includes("401") !== -1){
                ToastsStore.error("Sesion Expired") 
                setTimeout(() => this.props.dispatch(deleteSeSion()), 2000 )
            } else{
                ToastsStore.error(error) 
            }   
        }
    }

    render(){

        if (this.props.createOrEdit == 1 && !this.props.product) {
            return (
                <SC.DivContainer fllexDirection="column" fullWidth>
                    <SC.DivBlock>  
                        <SC.CenterBlock>
                            the product you are trying to edit doesn't exist    
                        </SC.CenterBlock>
                        <SC.DivRowHorizontal>
                            <SC.ButtonBtn>
                                <Link to="/admin/products">Back</Link>
                            </SC.ButtonBtn>
                        </SC.DivRowHorizontal>
                    </SC.DivBlock>
                </SC.DivContainer>
            )
        }

        return (
            <SC.DivContainer fllexDirection="column" fullWidth>
                <SC.DivBlock>  
                    <SC.CenterBlock>
                        <SC.DivRow>
                            <h1>{ this.props.createOrEdit == 1 ? 'Edit' : 'Create'} Products</h1>
                        </SC.DivRow>
                        <SC.DivRow>
                            <label>Name</label>
                            <SC.Input 
                                type="text" 
                                id="name"
                                name="name"
                                autoComplete="off"
                                value={this.state.name}
                                onChange={this.handleChange}
                            />
                        </SC.DivRow>
                        <SC.DivRow>
                            <label>Price</label>
                            <SC.Input 
                                type="text" 
                                id="price"
                                name="price"
                                autoComplete="off"
                                value={this.state.price}
                                onChange={this.handleChange}
                            />
                        </SC.DivRow>
                        <SC.DivRow>
                            <label>Icon</label>
                            <SC.Input 
                                type="file" 
                                id="icon"
                                name="icon"
                                onChange={(file) => this.saveFile (file.target.files[0])}
                            />
                        </SC.DivRow>
                        <SC.DivRow>
                            <SC.ButtonBtn type="button" onClick={() => this.CreateProduct()}>
                                { this.props.createOrEdit == 1 ? 'Edit' : 'Create'} 
                            </SC.ButtonBtn>
                        </SC.DivRow>
                    </SC.CenterBlock>
                    <SC.DivRowHorizontal>
                        <SC.ButtonBtn>
                            <Link to="/admin/products">Back</Link>
                        </SC.ButtonBtn>
                    </SC.DivRowHorizontal>
                </SC.DivBlock>
                <ToastsContainer store={ToastsStore}/>
            </SC.DivContainer>
        )
    }
}

function mapStateToProps ({ products}, { match }) {
    const { id } = match.params
    
    if(!id){
        return {
            createOrEdit : 0,
        }
    }

    const product = products.find((p) => p.id == id)

    
    return {
        createOrEdit : 1, 
        product
    }
    
}


export default connect(mapStateToProps)(ProductsCreate)