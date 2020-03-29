import React from 'react'
import productsApi from '../utils/api/products.js'

export default class Products extends React.Component {
    state = {
        products: []
    }   

    componentDidMount = async () =>{
        const products = await productsApi()
        
        if(products.erro)
            return console.log("Error")

        this.setState({
            products
        })
    }

    render() {
      return (
        <div>
           {
                this.state.products.length > 0 && this.state.products.map((product)=> 
                    <div key={product.id} className="item">
                        <div className="item-img">
                            <img src={`http://localhost:3001/products/${product.icon}`} alt={product.name}/>
                        </div>
                        <div className="item-content">
                            <p>{product.name}</p>
                            <p>{product.price}</p>
                        </div>
                    </div>
                )
           }
        </div>
      )
    }
  }