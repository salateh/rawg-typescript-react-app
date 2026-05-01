import React from "react";
import { useGames } from "../../hooks/games";
import { useNavigate } from "react-router-dom";
import { Loader } from "../../components/Loader/Spinner";
import { Product } from "../../components/GameCard/GameCard";

export function GamesPage() {
  const { game, loading } = useGames();
  const navigate = useNavigate();

  if (loading) return <Loader />;

  return (
    <div className="grid grid-cols-2 gap-4">
      {game.map((game) => (
        <Product
          key={game.id}
          product={game}
          nav={() => navigate(`/game/${game.id}`)}
        />
      ))}
    </div>
  );
}
