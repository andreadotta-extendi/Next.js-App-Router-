import React from "react";
import { Grid, Typography } from "@mui/material";
import Layout from "../Shared/ui/Layout";
import FilterContainer from "../Shared/ui/Filter/FilterContainer";
import CreativeCheckbox from "../Shared/ui/CreativeCheckbox";
import FilterMobile from "../Shared/ui/Filter/FilterMobile";
import filterData from "../Shared/ui/Filter/FilterMetaData";
import { CatalogSection } from "../Catalog/CatalogSection";

const EducationalPathPage = () => {
  return (
    <Layout isLogged>
      <Typography variant="h1" component="h1" className="text-center mb-8">
        Esplora i percorsi
      </Typography>

      <div className="flex flex-col mt-10 w-full gap-6 lg:gap-12">
        <div className="hidden sm:inline-block">
          <Grid container spacing={2}>
            {filterData.instruments.map((instrument, index) => (
              <Grid item xs={4} lg={2}>
                <CreativeCheckbox key={index} {...instrument} />
              </Grid>
            ))}
          </Grid>
        </div>

        <FilterMobile />

        <div className="sm:flex gap-x-6 space-y-8 items-start w-full">
          <div className="hidden sm:block">
            <FilterContainer />
          </div>
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

export default EducationalPathPage;
