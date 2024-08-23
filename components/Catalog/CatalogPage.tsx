import React from "react";
import { CatalogSection } from "./CatalogSection";
import { FormLabel } from "@mui/material";
import Layout from "../Layout/Layout";
import CatalogSearch from "./CatalogSearch";
import { SwipableCatalogCarousel } from "./CatalogCarousel";
import FilterContainer from "./Filter/FilterContainer";

const CatalogPage = () => {
  return (
    <Layout isLogged>
      <CatalogSearch />
      <SwipableCatalogCarousel />
      <div className="flex flex-col mt-10 w-full">
        <div className="flex flex-wrap gap-6 items-start w-full">
          {[
            "Chitarra",
            "Batteria",
            "Produzione musicale",
            "Piano e tastiera",
            "Ukulele",
            "Basso",
          ].map((label, index) => (
            <div
              key={index}
              className="flex flex-col flex-1 shrink justify-center p-2 rounded-lg border border-solid basis-0 bg-neutral-900 border-neutral-400"
            >
              <div className="flex flex-col w-full">
                <div className="flex flex-col items-center w-full">
                  <img
                    loading="lazy"
                    src={`http://b.io/ext_${index + 5}-`}
                    alt={label}
                    className="object-contain aspect-square w-[72px]"
                  />
                  <FormLabel className="mt-2">{label}</FormLabel>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex gap-6 items-start mt-8 w-full">
          <FilterContainer />
          <div className="flex flex-1 flex-col gap-10">
            <CatalogSection title="In evidenza" hasLink/>
            <CatalogSection title="Impara da zero" />
            <CatalogSection title="Ultime uscite"/>
            <CatalogSection title="Più seguiti" hasLink />
            <CatalogSection title="Categoria statica 1" hasLink/>
          </div>
        </div>
      </div>
     </Layout>
  );
};

export default CatalogPage;
