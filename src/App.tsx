import React from "react";
import styles from "./MyComponent.module.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import { GamesPage } from "./pages/GamesPage";
import { GameDetailsPage } from "./pages/GameDetailsPage";
import { NavBar } from "./components/GameCard/NavBar";
// import { NavBarProvider, useNavBar } from "./context/UseNavBarContext";

function App() {
  // const { page } = useNavBar();
  const navigate = useNavigate();

  return (
    <>
      <NavBar />
      {/* <NavBarProvider> */}
      <Routes>
        <Route path="/games" element={<GamesPage />}></Route>
        <Route path="/game/:id" element={<GameDetailsPage />}></Route>
      </Routes>
      {/* </NavBarProvider> */}
    </>
  );
}

export default App;
