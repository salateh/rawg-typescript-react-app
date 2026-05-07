import React, { useEffect, useState } from "react";
import { GamesResponse, Game } from "../types/index";
import axios, { AxiosError } from "axios";
import rawgApi from "../api/rawgApi";
import { useNavigate } from "react-router-dom";
// import rawgApi from "../api/rawgApi";

export function useGames() {
  const [game, setGame] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    async function fetchGames() {
      setError("");

      try {
        const response = await rawgApi.get<GamesResponse>("/games", {
          params: { page_size: 5 },
          signal: controller.signal,
        });

        setGame(response.data.results as Game[]);
        setTimeout(() => {
          setLoading(false);
        }, 500);
      } catch (e: any) {
        console.log(e);

        if (e.name === "CanceledError" || e.name === "AbortError") return;

        const error = e as AxiosError;
        setLoading(false);
        setError(error.message);
      }
    }
    fetchGames();
    return () => {
      controller.abort();
    };
  }, []);

  return { game, error, loading };
}

export function useGameDetail(id: string | undefined) {
  const [game, setGame] = useState<Game | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!id) return;

    const controller = new AbortController();
    async function fetchGame() {
      setLoading(true);
      try {
        const response = await rawgApi.get<Game>(`/games/${id}`, {
          signal: controller.signal,
        });

        setGame(response.data);
        setTimeout(() => {
          setLoading(false);
        }, 500);
      } catch (e: any) {
        if (e.name === "CanceledError" || e.name === "AbortError") return;
        setError((e as AxiosError).message);
        setLoading(false);
      }
    }

    fetchGame();

    return () => {
      controller.abort();
    };
  }, [id]);

  return { game, loading, error };
}
