import React from "react";
import FilterHeader from "./FilterHeader";
import FilterAccordion from "./FilterAccordion";
import LevelSlider from "./LevelSlider";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import filterData from "./FilterMetaData";

const FilterContainer: React.FC = () => {
  return (
    <section className="flex flex-col rounded-xl bg-paper min-w-[264px] py-6 gap-6">
      <FilterHeader />
      <FilterAccordion title="Tipo chitarra" accordionClassName="px-2">
        <FormGroup>
          {["Elettrica", "Acustica"].map((label, index) => (
            <FormControlLabel
              key={index}
              label={label}
              control={<Checkbox />}
            />
          ))}
        </FormGroup>
      </FilterAccordion>
      <LevelSlider className="px-6" />
      <div>
        <FilterAccordion title="Genere" accordionClassName="px-2">
          <FormGroup>
            {filterData.genres.map((genre, index) => (
              <FormControlLabel
                key={index}
                label={genre} // Use genre directly, as it is already a string
                control={<Checkbox />} // Provide the Checkbox control
              />
            ))}
          </FormGroup>
        </FilterAccordion>
        <FilterAccordion title="Argomento" accordionClassName="px-2">
          <FormGroup>
            {filterData.topics.map((topic, index) => (
              <FormControlLabel
                key={index}
                label={topic}
                control={<Checkbox />}
              />
            ))}
          </FormGroup>
        </FilterAccordion>
      </div>
    </section>
  );
};

export default FilterContainer;
