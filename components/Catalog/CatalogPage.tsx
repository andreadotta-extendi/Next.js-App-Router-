import React from "react";
import { CategorySection } from "./CategorySection";
import { FilterSection } from "./FilterSection";
import { Avatar, Button, Chip, FormLabel, StepIcon, SvgIcon, Theme, Typography } from "@mui/material";
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
        <div className="flex flex-wrap gap-6 items-start mt-8 w-full">
          <FilterContainer />
          <div className="flex flex-col flex-1 shrink justify-center basis-0 min-w-[240px] max-md:max-w-full">
            <CategorySection title="In evidenza" />
            <CategorySection title="Impara da zero" />
            <CategorySection title="Ultime uscite"/>
            <CategorySection title="Più seguiti"/>
            <CategorySection title="Categoria statica 1"/>
          </div>
        </div>
      </div>
     </Layout>
  );
};

export default CatalogPage;
