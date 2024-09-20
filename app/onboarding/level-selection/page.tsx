import LevelSelectionPage from "@/components/Onboarding/StepsPage/LevelSelectionPage";
import React from "react";

export default async function Page(props: { params: { page: any[] } }) {
  return (
    <>
      <LevelSelectionPage />
    </>
  );
}
