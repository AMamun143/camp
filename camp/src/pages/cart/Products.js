import React, { Component } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../shop/Context";
import "../cart/Products.css";

export class Products extends Component {
    static contextType = DataContext;
  
    render() {
      const { products, addCart } = this.context;
      return (
        <>
          <h1 id="title">Shop Camping & Hiking Gear</h1>
          <h4 id="pageDesc">
            From overnighting to day camping CAMP can get you the right gear to
            get you out there in no time.
          </h4>
          <div id="product">
            <div id="productWrapper">
              {products.map((product) => (
                <div className="card" key={product._id}>
                  <img src={product.src} alt="" />
  
                  <div className="content">
                    <h3 id="productTitle">{product.title}</h3>
                    <p id="productDescription">{product.description}</p>
                    <p id="productPrice">${product.price}</p>
                    <button onClick={() => addCart(product._id)}>
                      Add to cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      );
    }
  }
  
  export default Products;
