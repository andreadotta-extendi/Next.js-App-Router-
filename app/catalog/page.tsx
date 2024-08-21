

import CatalogPage from "@/components/Catalog/CatalogPage";
import React from "react";

export default async function Page(props: { params: { page: any[]; }; }) {
  
  return (
    <>
      <CatalogPage />
    </>
  );
}
