import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../../components/GameCard/Game/GameDetails";
import { Loader } from "../../components/Loader/Spinner";
import { useGameDetail } from "../../hooks/Games/useGameDetail";

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
    // <div className="grid grid-cols-2 gap-4">
    <div className="flex justify-center">
      <Card key={game?.id} product={game} />
    </div>
  );
}
