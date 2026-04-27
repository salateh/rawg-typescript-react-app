import React from "react";
import { useContext, useState } from "react";
import { useGameDetail, useGames } from "../hooks/games";
import { Product } from "../components/GameCard/GameCard";
import { useParams } from "react-router-dom";
import { Loader } from "../components/GameCard/Spinner";
import Card from "../components/GameCard/GameDetails";

export function GameDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const { game, loading, error } = useGameDetail(id);
  if (loading) return <Loader />;
  if (error || !game) {
    return (
      <div className="text-red-500">Ошибка: {error || "Игра не найдена"}</div>
    );
  }
  return (
    <div className="grid grid-cols-2 gap-4">
      <Card key={game?.id} product={game} />
    </div>
  );
}
