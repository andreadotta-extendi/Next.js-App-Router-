import SelfEvaluationPage from "@/components/Profile/SelfEvaluationPage";
import React from "react";

export default async function Page(props: { params: { page: any[] } }) {
  return (
    <>
      <SelfEvaluationPage />
    </>
  );
}
