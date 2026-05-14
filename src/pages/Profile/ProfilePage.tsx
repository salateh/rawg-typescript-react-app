import React from "react";
import { ProfileAdmin } from "../../components/Profile/ProfileAdmin";
import { Loader } from "../../components/Loader/Spinner";
import { useProfile } from "../../hooks/Profile/useProfile";
import { FavoriteList } from "../../components/Favorite/FavoriteList";
import { useFavorite } from "../../context/Favorite/FavoriteContext";
import { FavoriteGame } from "../../components/Favorite/FavoriteGame";

export function ProfilePage() {
  const { loading } = useProfile();
  const {favGames}= useFavorite()
  if (loading) return <Loader />;

  return (
    <>
      <div>
        <ProfileAdmin />
      </div>
      <div>
        <FavoriteList />
      </div>
    </>
  );
}
