import React from "react";
import { ProfileAdmin } from "../../components/Profile/ProfileAdmin";
import { Loader } from "../../components/Loader/Spinner";
import { useProfile } from "../../components/Profile/hooks/profile";

export function ProfilePage() {
  const { loading } = useProfile();
  if (loading) return <Loader />;

  return <ProfileAdmin />;
}
