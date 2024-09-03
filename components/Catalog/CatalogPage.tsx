import React from "react";
import { CatalogSection } from "./CatalogSection";
import { FormLabel, Grid } from "@mui/material";
import Layout from "../Shared/ui/Layout";
import CatalogSearch from "./CatalogSearch";
import { SwipableCatalogCarousel } from "./CatalogCarousel";
import FilterContainer from "../Shared/ui/Filter/FilterContainer";
import CreativeCheckbox from "../Shared/ui/CreativeCheckbox";

const instruments = [
  {
    imageSrc: "assets/instruments/chitarra.svg",
    altText: "Guitar icon",
    name: "Chitarra",
    value: "a",
  },
  {
    imageSrc: "assets/instruments/batteria.svg",
    altText: "Drums icon",
    name: "Batteria",
    value: "b",
  },
  {
    imageSrc: "assets/instruments/strumento.svg",
    altText: "Music production icon",
    name: "Produzione musicale",
    value: "c",
  },
  {
    imageSrc: "assets/instruments/piano-e-tastiera.svg",
    altText: "Piano and keyboard icon",
    name: "Piano e tastiera",
    value: "d",
  },
  {
    imageSrc: "assets/instruments/ukulle.svg",
    altText: "Ukulele icon",
    name: "Ukulele",
    value: "e",
  },
  {
    imageSrc: "assets/instruments/basso.svg",
    altText: "Bass icon",
    name: "Basso",
    value: "f",
  },
];

const CatalogPage = () => {
  return (
    <Layout isLogged>
      <CatalogSearch />
      <SwipableCatalogCarousel />
      <div className="flex flex-col mt-10 w-full gap-12">
        <Grid container spacing={2}>
          {instruments.slice(0, 6).map((instrument, index) => (
            <Grid item xs={4} lg={2}>
              <CreativeCheckbox key={index} {...instrument} />
            </Grid>
          ))}
        </Grid>

        <div className="sm:flex gap-x-6 space-y-8 items-start w-full">
          <FilterContainer />
          <div className="flex flex-1 flex-col gap-10">
            <CatalogSection title="In evidenza" hasLink />
            <CatalogSection title="Impara da zero" hasNavigationButtons />
            <CatalogSection title="Ultime uscite" hasNavigationButtons />
            <CatalogSection title="Più seguiti" hasLink hasNavigationButtons />
            <CatalogSection title="Masterclass" hasLink hasNavigationButtons />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CatalogPage;
