import React from "react";
import { Outlet } from "react-router-dom";

import { NavBar } from "../components/NavBar/NavBar";
import styled from "styled-components";

export function MainLayout() {
  return (
    <div>
      <header className="">
        <NavBar />
      </header>

      <main className="content">
        <Outlet />
      </main>

      <footer className="flex items-baseline">
        <p>© 2026 Game Catalog | Monk Path Mode</p>
      </footer>
    </div>
  );
}
