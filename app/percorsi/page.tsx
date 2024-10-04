import EducationalPathPage from "@/components/EducationalPath/EducationalPathPage";
import React from "react";

export default async function Page(props: { params: { page: any[] } }) {
  return (
    <>
      <EducationalPathPage />
    </>
  );
}
