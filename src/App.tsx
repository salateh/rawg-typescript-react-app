import React from "react";
import styles from "./MyComponent.module.css";
import { Game } from "./types";
import { useGames } from "./hooks/product";
import { Product } from "./components/GameCard/GameCard";

function App() {
  const { error, loading, products } = useGames();

  return (
    <>
      <div>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}

export default App;
