import React, { useEffect, useState } from "react";
import { GamesResponse, Game } from "../../types/index";
import axios, { AxiosError } from "axios";
import rawgApi from "../../api/rawgApi";
import { useNavigate } from "react-router-dom";
import { useHttp } from "../useHttp";
// import rawgApi from "../api/rawgApi";

export function useGames(searchText?: string) {
  const [page, setPage] = useState(1);
  const [allGames, setAllGames] = useState<Game[]>([]);
  const url = searchText
    ? `/games?search=${searchText}&page=${page}`
    : `/games?page=${page}`;
  const { data, loading, error } = useHttp<GamesResponse>(url);

  useEffect(() => {
    if (data?.results) {
      setAllGames((prev) => {
        const newGames = data.results.filter(
          (newGame) => !prev.some((oldGame) => oldGame.id === newGame.id),
        );
        return [...prev, ...newGames];
      });
    }
  }, [data]);

  useEffect(() => {
    setAllGames([]);
    setPage(1);
  }, [searchText]);

  
  return {
    game: allGames || [],
    loading,
    error,
    nextPage: () => {
      if (loading) return;

      setPage((prev) => prev + 1);
    },
  };
}
