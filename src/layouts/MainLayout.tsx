import React from "react";
import { Outlet } from "react-router-dom";
import { NavBar } from "../components/NavBar/NavBar";
import styled from "styled-components";

export function MainLayout() {
  return (
    <div>
      <header>
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

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  .content {
    flex: 1;
    padding: 20px;
    display: flex;
    justify-content: center;
  }
`;
