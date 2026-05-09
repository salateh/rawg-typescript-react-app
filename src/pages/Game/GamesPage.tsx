import React, { useCallback } from "react";
import { useGames } from "../../hooks/Games/useGames";
import { useNavigate } from "react-router-dom";
import { Loader } from "../../components/Loader/Spinner";
import { Product } from "../../components/GameCard/Games/GameCard";

export function GamesPage() {
  const { game, loading, error } = useGames();

  const navigate = useNavigate();
  const handleNavigate = useCallback(
    (id: number) => {
      navigate(`/game/${id}`);
    },
    [navigate],
  );

  if (loading) return <Loader />;
  if (error)
    return (
      <>
        <div>{error}</div>
      </>
    );

  return (
    <div className="grid grid-cols-2 gap-4">
      {game.map((game) => (
        <Product key={game.id} product={game} onNavigate={handleNavigate} />
      ))}
    </div>
  );
}
