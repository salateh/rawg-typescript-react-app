import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { StyledWrapper } from "./NavBar.styled";
// import { useNavBar } from "../../context/UseNavBarContext";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/User/UserContext";
import { useSearch } from "../../hooks/Search/useSearch";
import { SearchDropdown } from "../Search/SearchDropdown";

export function NavBar() {
  //   const { togglePage } = useNavBar();
  const { user } = useUser();
  const [isSearchMode, setSearchMode] = useState(false);
  const { handleInputChange, game, clear } = useSearch();

  const navigate = useNavigate();
  const handleNavigate = useCallback(
    (id: number) => {
      navigate(`/game/${id}`);
    },
    [navigate],
  );
  return (
    <StyledWrapper>
      <div className="button-container fixed">
        <button className="button" onClick={() => navigate("/games")}>
          <svg
            className="icon"
            stroke="currentColor"
            fill="currentColor"
            strokeWidth={0}
            viewBox="0 0 1024 1024"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z" />
          </svg>
        </button>
        <button
          className="button"
          onClick={() => setSearchMode((prev) => !prev)}
        >
          <svg
            className="icon"
            stroke="currentColor"
            fill="none"
            strokeWidth={2}
            viewBox="0 0 24 24"
            aria-hidden="true"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
        {isSearchMode && (
          <input
            className="text-black icon truncate w-[100px] whitespace-nowrap "
            placeholder="game..."
            onChange={handleInputChange}
          ></input>
        )}

        <div>
          <button className="button" onClick={() => navigate("/profile")}>
            {
              <svg
                className="icon"
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2.5a5.5 5.5 0 0 1 3.096 10.047 9.005 9.005 0 0 1 5.9 8.181.75.75 0 1 1-1.499.044 7.5 7.5 0 0 0-14.993 0 .75.75 0 0 1-1.5-.045 9.005 9.005 0 0 1 5.9-8.18A5.5 5.5 0 0 1 12 2.5ZM8 8a4 4 0 1 0 8 0 4 4 0 0 0-8 0Z" />
              </svg>
            }
          </button>
        </div>

        <p className="text-white icon truncate w-[100px] whitespace-nowrap ">
          {user.name}
        </p>
      </div>
      {clear === false && (
        <div
          className={`bg-slate-700 w-[400px] h-auto  border rounded-lg  grid grid-cols-[auto_auto_auto] auto-rows-auto gap-10 absolute ${clear === false && "hidden"}`}
        >
          <div className="flex flex-wrap gap-4">
            {isSearchMode &&
              game?.map((g) => (
                <SearchDropdown game={g ?? []} onNavigate={handleNavigate} />
              ))}
          </div>
        </div>
      )}
    </StyledWrapper>
  );
}
