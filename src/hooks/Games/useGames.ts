import React, { useEffect, useState } from "react";
import { GamesResponse, Game } from "../../types/index";
import axios, { AxiosError } from "axios";
import rawgApi from "../../api/rawgApi";
import { useNavigate } from "react-router-dom";
import { useHttp } from "../useHttp";
// import rawgApi from "../api/rawgApi";

export function useGames(searchText?: string) {
  const url = searchText ? `/games?search=${searchText}` : "/games";
  const { data, loading, error } = useHttp<GamesResponse>(url);
  return { game: data?.results || [], loading, error };
}
