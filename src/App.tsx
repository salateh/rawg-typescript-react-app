import React from "react";
import styles from "./MyComponent.module.css";
import rawgApi from "./api/rawgApi";
import { useGames } from "./hooks/product";

function App() {
  const { error, loading, products } = useGames();
  console.log(products);

  return (
    <>
      <div className="text-red-800">{products.map((a) => a.name)}</div>
    </>
  );
}

export default App;
