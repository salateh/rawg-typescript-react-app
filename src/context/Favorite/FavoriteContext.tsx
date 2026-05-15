import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { Game } from "../../types";
import React from "react";

interface FavoriteContextType {
  favGames: Set<Game>;
  addGameToFavorite: (item: Game) => void;
  // removeGameFromFavorite: (item: Game) => void;  ...пока в разработке
}
export const FavoriteContext = createContext<FavoriteContextType | undefined>(
  undefined,
);
export function FavoriteProvider({ children }: { children: ReactNode }) {
  const [favGames, setGames] = useState<Set<Game>>(() => {
    const savedFav = localStorage.getItem("favGames");
    return savedFav ? new Set(JSON.parse(savedFav)) : new Set([]);
  });

  ///...
  useEffect(() => {
    localStorage.setItem("favGames", JSON.stringify(Array.from(favGames)));
  }, [favGames]);
  ///..
  const addGameToFavorite = (item: Game) => {
    setGames((prevSet) => {
      const alreadyExists = Array.from(prevSet).some((a) => a.id === item.id);
      if (alreadyExists) return prevSet;

      const newSet = new Set(prevSet);
      const { id, name, background_image } = item;
      newSet.add({ id, name, background_image } as Game);
      return newSet;
    });
  };

  return (
    <FavoriteContext.Provider
      value={{ favGames, addGameToFavorite }}
      children={children}
    />
  );
}
export function useFavorite() {
  const context = useContext(FavoriteContext);
  if (!context) {
    throw new Error("useFavorite must be used within FavoriteProvider");
  }
  return context;
}
