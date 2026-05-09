import { AxiosError } from "axios";
import rawgApi from "../api/rawgApi";
import { useEffect, useState } from "react";

export function useHttp<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  console.log("Делаю запрос на:", url);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchData() {
      if (!url) return;

      setError("");

      try {
        const response = await rawgApi.get<T>(url, {
          signal: controller.signal,
        });

        await new Promise((resolve) => setTimeout(resolve, 500));

        setData(response.data);
      } catch (e: any) {
        if (e.name === "CanceledError" || e.name === "AbortError") return;
        const error = e as AxiosError;
        setError(error.message);
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }
    fetchData();
    return () => {
      controller.abort();
    };
  }, [url]);

  return { data, error, loading };
}
