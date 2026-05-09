import { useEffect, useState } from "react";
import rawgApi from "../../api/rawgApi";
import { Game } from "../../types";
import { AxiosError } from "axios";
import { useHttp } from "../useHttp";

export function useGameDetail(id: string | undefined) {
  const { data, loading, error } = useHttp<Game>(id ? `/games/${id}` : "");
  return { game: data, loading, error };
}
