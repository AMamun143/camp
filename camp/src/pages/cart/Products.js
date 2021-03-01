import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { DataContext } from "../shop/Context";
import "../cart/Products.css";

export class Products extends Component {

    static contextType = DataContext;

    render() {
        const {products,addCart} = this.context;
        return (
            <div id="product">
               {
                   products.map(product =>(
                       
                      
                       <div className="card" key={product._id}>
                           
                               <img src={product.src} alt=""/>
                          
                           <div className="content">
                               <h3>
                                   {product.title}
                               </h3>
                              
                               <p>{product.description}</p>
                               <span>${product.price}</span>
                               <button onClick={()=> addCart(product._id)}>Add to cart</button>
                             
                           </div>
                          
                       </div>
                       
                   ))
               }
            </div>
        )
    }
}

export default Products
