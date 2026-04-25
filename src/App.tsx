import React from "react";
import styles from "./MyComponent.module.css";
import { Route, Routes } from "react-router-dom";
import { GamesPage } from "./pages/GamesPage";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<GamesPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
