"use client";

import useAuth from "@/hooks/auth";

export default function UserProfile() {
  const { user } = useAuth();

  return <>User Profile {JSON.stringify(user)}</>;
}
