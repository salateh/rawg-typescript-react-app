import React from "react";
import { Route, Routes } from "react-router-dom";
import { GamesPage } from "./pages/Game/GamesPage";
import { GameDetailsPage } from "./pages/Game/GameDetailsPage";
import { MainLayout } from "./layouts/MainLayout";
import { ProfileAdmin } from "./components/Profile/ProfileAdmin";
import { ProfilePage } from "./pages/Profile/ProfilePage";
import { UserProvider } from "./context/User/UserContext";
import { FavoriteProvider } from "./context/Favorite/FavoriteContext";
import { App2 } from "./test";

function App() {
  return (
    //----CONTEXT----///
    <UserProvider>
      <FavoriteProvider>
        {/*----CONTEXT----*/}

        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<GamesPage />} />
            <Route path="games" element={<GamesPage />} />
            <Route path="game/:id" element={<GameDetailsPage />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="App2" element={<App2 />} />
          </Route>
        </Routes>
        {/* ----CONTEXT---- */}
      </FavoriteProvider>
    </UserProvider>
    //----CONTEXT----//
  );
}

export default App;
