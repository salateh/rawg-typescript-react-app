import { useState, useEffect, useRef } from "react";
import { useDebounce } from "../useDebounce";
import { useGames } from "../Games/useGames";

export function useSearch() {
  const [search, setSearch] = useState<string>("");
  const debouncedSearch = useDebounce(search, 800);
  const { game, loading } = useGames(debouncedSearch);
  const [clear, setClear] = useState(false);

  const handleInputChange = (
    eventInput: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { value } = eventInput.target;
    if (value.trim().length === 0) setClear(true);
    else {
      setClear(false);
    }

    setSearch(value);
  };

  return { handleInputChange, search, game, loading, clear };
}
