import StrumentPage from "@/components/Profile/StrumentsPage";
import React from "react";

export default async function Page(props: { params: { page: any[] } }) {
  return (
    <>
      <StrumentPage />
    </>
  );
}
