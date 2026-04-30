import React from "react";
import { Route, Routes } from "react-router-dom";
import { GamesPage } from "./pages/Game/GamesPage";
import { GameDetailsPage } from "./pages/Game/GameDetailsPage";
import { MainLayout } from "./layouts/MainLayout";
import { ProfileAdmin } from "./components/GameCard/Profile/ProfileAdmin";
import { ProfilePage } from "./pages/Profile/ProfilePage";

function App() {
  return (
    <Routes>
      {/* Оборачиваем все маршруты в Layout */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<GamesPage />} />
        <Route path="games" element={<GamesPage />} />
        <Route path="game/:id" element={<GameDetailsPage />} />
        <Route path="profile" element={<ProfilePage />} />
      </Route>
    </Routes>
  );
}

export default App;
