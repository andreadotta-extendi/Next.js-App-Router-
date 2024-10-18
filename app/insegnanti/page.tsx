import TeacherListPage from "@/components/TeacherList/TeacherListPage";
import React from "react";

export default async function Page(props: { params: { page: any[] } }) {
  return (
    <>
      <TeacherListPage />
    </>
  );
}
