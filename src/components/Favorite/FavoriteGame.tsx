import React from "react";
import { Game } from "../../types";

interface FavoriteGameProps {
  favGame: Game;
  onNavigate: (id: number) => void;
}

export function FavoriteGame({ favGame, onNavigate }: FavoriteGameProps) {
  const { id, name, background_image } = favGame;
  return (
    <div onClick={() => onNavigate(id)}>
      <p>{name}</p>
      <img src={background_image} alt="" />
    </div>
  );
}
