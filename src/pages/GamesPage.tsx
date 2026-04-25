import React from "react";
import { useContext, useState } from "react";
import { useGames } from "../hooks/product";

export function ProductPage() {
  const { error, loading, products } = useGames();
}
