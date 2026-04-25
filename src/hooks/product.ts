import React, { useEffect, useState } from "react";
import type { GamesResponse, Game } from "../types/index.js";
import axios, { AxiosError } from "axios";
import rawgApi from "../api/rawgApi";

export function useGames() {
  const [products, setProducts] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function fetchGames() {
    setError("");

    try {
      //   const response = await axios.get<Game[]>(
      //     "https://fakestoreapi.com/products?limit=5",
      //   );
      const response = await rawgApi.get<GamesResponse>("/games", {
        params: { page_size: 5 },
      });

      setProducts(response.data.results);
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

  return { products, error, loading };
}
