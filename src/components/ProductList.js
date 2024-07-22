import React from 'react';
import { Link } from 'react-router-dom';

const products = [
  { id: 1, name: 'Product 1', price: 19.99 },
  { id: 2, name: 'Product 2', price: 29.99 },
  { id: 3, name: 'Product 3', price: 39.99 },
];

const ProductList = () => {
  return (
    <div className="product-list">
      <h2>Our Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`}>
              <h3>{product.name}</h3>
              <p>${product.price.toFixed(2)}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;