import React from "react";
import styles from "./MyComponent.module.css";
import { Route, Routes } from "react-router-dom";
import { GamesPage } from "./pages/GamesPage";
import { GameDetailsPage } from "./pages/GameDetailsPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<GamesPage />}></Route>
        <Route path="/game/:id" element={<GameDetailsPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
