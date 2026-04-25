import React from "react";
import { useContext, useState } from "react";
import { useGames } from "../hooks/games";
import { Product } from "../components/GameCard/GameCard";

export function GamesPage() {
  const { error, loading, game } = useGames();

  return (
    <div className="grid grid-cols-2 gap-4">
      {game.map((game) => (
        <Product key={game.id} product={game} />
      ))}
    </div>
  );
}
