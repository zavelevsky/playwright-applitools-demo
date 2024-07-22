import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/product/1">Product 1</Link>
            </li>
            <li>
              <Link to="/product/2">Product 2</Link>
            </li>
            <li>
              <Link to="/product/3">Product 3</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className={styles.main}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
      </main>
      <footer className={styles.footer}>
        <p>&copy; 2024 Playwright Applitools Demo. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
