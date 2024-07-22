import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HomePage.module.css';

const products = [
  { id: 1, name: 'Product 1', price: 19.99 },
  { id: 2, name: 'Product 2', price: 29.99 },
  { id: 3, name: 'Product 3', price: 39.99 },
];

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <h1>Welcome to our Store</h1>
      <div className={styles.productList}>
        {products.map((product) => (
          <div key={product.id} className={styles.productItem}>
            <Link to={`/product/${product.id}`}>
              <h3>{product.name}</h3>
              <p>${product.price.toFixed(2)}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;