import React, { useCallback, useEffect, useRef } from "react";
import { useGames } from "../../hooks/Games/useGames";
import { useNavigate } from "react-router-dom";
import { Loader } from "../../components/Loader/Spinner";
import { Product } from "../../components/GameCard/Games/GameCard";
import { useSearch } from "../../hooks/Search/useSearch";

export function GamesPage() {
  const { debouncedSearch } = useSearch();
  const { game, loading, error, nextPage } = useGames(debouncedSearch);
  const loaderRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // isIntersecting значит, что div появился в зоне видимости
        if (entries[0].isIntersecting && !loading) {
          nextPage();
        }
      },
      { threshold: 1.0 },
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => observer.disconnect();
  }, [loading, nextPage]);

  const navigate = useNavigate();
  const handleNavigate = useCallback(
    (id: number) => {
      navigate(`/game/${id}`);
    },
    [navigate],
  );

  if (error)
    return (
      <>
        <div>{error}</div>
      </>
    );

  return (
    <>
      {loading && game.length === 0 ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-2 gap-4">
          {game.map((g) => (
            <Product key={g.id} product={g} onNavigate={handleNavigate} />
          ))}
        </div>
      )}

      <div ref={loaderRef} className="h-10 flex justify-center items-center">
        {loading && game.length > 0 && <Loader />}
      </div>
    </>
  );
}
