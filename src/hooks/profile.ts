import { useEffect, useState } from "react";
import { Game } from "../types";

export function useLoadingProfile() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // В твоем profile.ts (пример исправления)
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer); // Очистка при уходе со страницы
  }, []);
  return { loading };
}
