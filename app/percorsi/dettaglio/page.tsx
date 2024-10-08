import EducationalPathDetailPage from "@/components/EducationalPathDetail/EducationalPathDetail";
import React from "react";

export default async function Page(props: { params: { page: any[] } }) {
  return (
    <>
      <EducationalPathDetailPage
        title={""}
        completionPercentage={0}
        description={""}
        requirements={""}
        difficulty={""}
        videoCount={0}
        teachers={[]}
      />
    </>
  );
}
