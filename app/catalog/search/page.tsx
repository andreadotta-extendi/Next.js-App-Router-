import CatalogPage from "@/components/Catalog/CatalogPage";
import CatalogSearchedItemPage from "@/components/Catalog/CatalogSearchedItemPage";
import React from "react";

export default async function Page(props: { params: { page: any[] } }) {
  return (
    <>
      <CatalogSearchedItemPage />
    </>
  );
}
