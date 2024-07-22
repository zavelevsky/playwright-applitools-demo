import React from "react";
import { useParams } from "react-router-dom";
import styles from "./ProductPage.module.css";

const products = [
  { id: 1, name: "Product 1", price: 19.99, description: "This is product 1" },
  { id: 2, name: "Product 2", price: 29.99, description: "This is product 2" },
  { id: 3, name: "Product 3", price: 39.99, description: "This is product 3" },
];

const ProductPage = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className={styles.productPage}>
      <h1>{product.name}</h1>
      <p className={styles.price}>Price: ${product.price.toFixed(2)}</p>
      <p className={styles.description}>{product.description}</p>
    </div>
  );
};

export default ProductPage;
