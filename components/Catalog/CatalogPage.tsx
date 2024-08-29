import React from "react";
import { CatalogSection } from "./CatalogSection";
import { FormLabel, Grid } from "@mui/material";
import Layout from "../Layout/Layout";
import CatalogSearch from "./CatalogSearch";
import { SwipableCatalogCarousel } from "./CatalogCarousel";
import FilterContainer from "./Filter/FilterContainer";
import CreativeCheckbox from "../Shared/ui/CreativeCheckbox";

const instruments = [
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/a9f01c79b578f715b459251417837ada39421f498679215632897a35cb74a861?apiKey=ab14136582c84aab8af41f16349d0438&&apiKey=ab14136582c84aab8af41f16349d0438",
    altText: "Guitar icon",
    name: "Chitarra",
    value: "a",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/558487ca2355b45bd61fbc7dc3a5c91d6f085498186a6bf5775f8404e8445ca3?apiKey=ab14136582c84aab8af41f16349d0438&&apiKey=ab14136582c84aab8af41f16349d0438",
    altText: "Drums icon",
    name: "Batteria",
    value: "b",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/8fc704ae23d18f0b9a1b877ffe6b2982bc865dc95ec174d4d948d3c8bb3fc1ab?apiKey=ab14136582c84aab8af41f16349d0438&&apiKey=ab14136582c84aab8af41f16349d0438",
    altText: "Music production icon",
    name: "Produzione musicale",
    value: "c",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/9a79385cac6dfd9bee1a13a56b86c76dc2dfd8ff2efb5930e6220f5ebf84dd47?apiKey=ab14136582c84aab8af41f16349d0438&&apiKey=ab14136582c84aab8af41f16349d0438",
    altText: "Piano and keyboard icon",
    name: "Piano e tastiera",
    value: "d",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/921aa9828e9a3933467471100fecb692c9b1a2c7ddaa773cc3ed4bbabc64588a?apiKey=ab14136582c84aab8af41f16349d0438&&apiKey=ab14136582c84aab8af41f16349d0438",
    altText: "Ukulele icon",
    name: "Ukulele",
    value: "e",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/43fd97e731124e26acb223602590dc8987e8e4c34ef23a88ab50eb66ad69d40c?apiKey=ab14136582c84aab8af41f16349d0438&&apiKey=ab14136582c84aab8af41f16349d0438",
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
          {/* Esempio strumento selezionato */}
          {instruments.slice(0, 6).map((instrument, index) => (
            <Grid item xs={4} lg={2}>
              <CreativeCheckbox key={index} {...instrument} />
            </Grid>
          ))}
        </Grid>

        <div className="flex gap-6 items-start w-full">
          <FilterContainer />
          <div className="flex flex-1 flex-col gap-10">
            <CatalogSection title="In evidenza" hasLink />
            <CatalogSection title="Impara da zero" />
            <CatalogSection title="Ultime uscite" />
            <CatalogSection title="Più seguiti" hasLink />
            <CatalogSection title="Masterclass" hasLink />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CatalogPage;
