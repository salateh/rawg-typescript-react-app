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
      setTimeout(() => {
        setLoading(false);
      }, 500);
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

export function useGameDetail(id: string | undefined) {
  const [game, setGame] = useState<Game | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    if (!id) return;

    async function fetchGame() {
      setLoading(true);
      try {
        const response = await rawgApi.get<Game>(`/games/${id}`);

        setGame(response.data);
        setTimeout(() => {
          setLoading(false);
        }, 500);
      } catch (e) {
        setError((e as AxiosError).message);
        setLoading(false);
      }
    }

    fetchGame();
  }, [id]); // Перезапускать, если ID изменился

  return { game, loading, error };
}
