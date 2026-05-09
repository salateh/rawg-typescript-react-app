import React from "react";
import { useSearch } from "../../hooks/Search/useSearch";
import { Loader } from "../Loader/Spinner";
import { Game } from "../../types";
interface SearchDropdownProps {
  game: Game;
  onNavigate: (id: number) => void;
}

export function SearchDropdown({ game, onNavigate }: SearchDropdownProps) {
  return (
    <>
      <div onClick={() => onNavigate(game.id)}>
        {game && (
          <div className="bg-orange-400 border rounded-lg  w-[150px] flex flex-wrap gap-3 justify-items-center ">
            <p className="truncate w-28 line-clamp-2 overflow-hidden">
              {game.name}
            </p>
            <img
              className="border rounded-lg  w-full h-full"
              src={
                // game.background_image ??
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTmHADCrdREqZr0rFnsnpXmIrHxWTxseaKnQ&s"
              }
              alt="game"
            />
          </div>
        )}
      </div>
    </>
  );
}
