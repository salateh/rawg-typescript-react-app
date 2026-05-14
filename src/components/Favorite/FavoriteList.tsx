import React, { useCallback, useState } from "react";
import { useFavorite } from "../../context/Favorite/FavoriteContext";
import { Game } from "../../types";
import { FavoriteGame } from "./FavoriteGame";
import { useNavigate } from "react-router-dom";

export function FavoriteList() {
  const { favGames } = useFavorite();

  /// ... navi
  const navigate = useNavigate();
  //
  const handleNavigate = useCallback(
    (id: number) => {
      navigate(`/game/${id}`);
    },
    [navigate],
  );
  const favArray = Array.from(favGames);
  //
  return (
    <>
      <div className="flex justify-center items-start min-h-[80vh] p-4 ">
        <div className="block">
          <p className="">favorite games list:</p>
          {favArray.map((a) => (
            <FavoriteGame key={a.id} favGame={a} onNavigate={handleNavigate} />
          ))}
        </div>
      </div>
    </>
  );
}
