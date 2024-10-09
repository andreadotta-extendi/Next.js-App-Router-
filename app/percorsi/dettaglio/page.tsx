import EducationalPathDetailPage from "@/components/EducationalPathDetail/EducationalPathDetailPage";
import React from "react";

export default async function Page(props: { params: { page: any[] } }) {
  return (
    <>
      <EducationalPathDetailPage
        title="titolo"
        description={"wewq"}
        requirements={"ewqeqw"}
        lessonCount={10}
        instructors={[]}
        videoCount={40}
        level="base"
        courseType="percorsi"
      />
    </>
  );
}
