import ProfilePage from "@/components/Profile/ProfilePage";
import React from "react";

export default async function Page(props: { params: { page: any[] } }) {
  return (
    <>
      <ProfilePage />
    </>
  );
}
