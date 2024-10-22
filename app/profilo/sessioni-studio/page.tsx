import StudySessionPage from "@/components/Profile/StudySessionPage";
import React from "react";

export default async function Page(props: { params: { page: any[] } }) {
  return (
    <>
      <StudySessionPage />
    </>
  );
}
