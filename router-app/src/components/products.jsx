import React, { Component } from "react";

class Products extends Component {
  state = {
    products: [
      { id: 1, name: "Product 1" },
      { id: 2, name: "Product 2" },
      { id: 3, name: "Product 3" }
    ]
  };

  render() {
    return (
      <div>
        <h1>Products</h1>
        <ul>
          {this.state.products.map(product => (
            <li key={product.id}>
              <a href={`/products/${product.id}`}>{product.name}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Products;
