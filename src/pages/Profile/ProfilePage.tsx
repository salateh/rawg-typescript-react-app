import React from "react";
import { useGames } from "../../hooks/games";
import { ProfileAdmin } from "../../components/GameCard/Profile/ProfileAdmin";
import { useLoadingProfile } from "../../hooks/profile";
import { Loader } from "../../components/GameCard/Loader/Spinner";

export function ProfilePage() {
  const { loading } = useLoadingProfile();
  if (loading) return <Loader />;

  return <ProfileAdmin />;
}
