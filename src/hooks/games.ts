import React, { useEffect, useState } from "react";
import { GamesResponse, Game } from "../types/index";
import axios, { AxiosError } from "axios";
import rawgApi from "../api/rawgApi";
// import rawgApi from "../api/rawgApi";

export function useGames() {
  const [game, setGame] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function fetchGames() {
    setError("");

    try {
      const response = await rawgApi.get<GamesResponse>("/games", {
        params: { page_size: 5 },
      });

      setGame(response.data.results as Game[]);
      setLoading(false);
    } catch (e: unknown) {
      const error = e as AxiosError;
      setLoading(false);
      setError(error.message);
    }
  }

  useEffect(() => {
    fetchGames();
  }, []);

  return { game, error, loading };
}
