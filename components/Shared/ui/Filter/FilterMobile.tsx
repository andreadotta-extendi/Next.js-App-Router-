"use client";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FilterAltRounded from "@mui/icons-material/FilterAltRounded";
import {
  Slide,
  Box,
  Grid,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { CreativeCheckbox } from "@/app/mui-components";
import LevelSlider from "@/components/Shared/ui/Filter/LevelSlider";
import FilterAccordion from "@/components/Shared/ui/Filter/FilterAccordion";
import filterData from "./FilterMetaData";

const FilterMobile = () => {
  // Explicitly type `slideDirection` as a union of the allowed string literals
  const [open, setOpen] = useState(false);
  const [slideDirection, setSlideDirection] = useState<"up" | "down">("down");

  // Toggle the modal visibility
  const handleToggle = () => {
    if (open) {
      setSlideDirection("up"); // slide down when closing
    } else {
      setSlideDirection("down"); // slide up when opening
    }
    setOpen(!open);
  };

  return (
    <div className="block sm:hidden">
      <Button
        variant="outlined"
        color="primary"
        size="large"
        className="w-full gap-2"
        onClick={handleToggle}
      >
        <FilterAltRounded />
        <Typography variant="button-l">Mostra filtri</Typography>
        <div className="w-[10px] h-[10px] bg-[#FF6043] rounded-xl" />
      </Button>

      {/* Modal */}
      <>
        {/* Backdrop */}
        {open && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={handleToggle}
          />
        )}

        {/* Slide-in modal from the bottom when opening, slide out to bottom when closing */}
        <Slide direction={slideDirection} in={open} mountOnEnter unmountOnExit>
          <Box
            className={`fixed inset-0 bg-background transition-transform duration-500 flex-grow overflow-auto h-screen ${
              open ? "translate-y-0" : "translate-y-full"
            }`}
            style={{
              zIndex: "10000",
            }}
          >
            <div
              style={{
                overflowY: "auto",
                height: "calc(100% - 76px)",
              }}
            >
              {/* Modal content */}
              <div className="flex justify-between items-center py-4 pl-4 border-b border-neutral-main">
                <Typography variant="h5">Filtri</Typography>
                <Button size="small" onClick={handleToggle} variant="text">
                  <Typography variant="button-s">Chiudi</Typography>
                </Button>
              </div>

              {/* Filter options */}
              <div className="px-6 py-8 h-full space-y-8">
                <div className="flex flex-col gap-1">
                  <Typography variant="s1" className="mb-2">
                    Strumento
                  </Typography>
                  <Grid container spacing={1}>
                    {filterData.instruments.map((instrument, index) => (
                      <Grid item xs={6} key={index}>
                        <CreativeCheckbox {...instrument} />
                      </Grid>
                    ))}
                  </Grid>
                </div>
                <FilterAccordion
                  title="Tipo Chitarra"
                  accordionSummaryClassName="px-0"
                  accordionDetailsClassName="px-0"
                >
                  <FormGroup>
                    {filterData.instrumentSubCategories.map(
                      (instrumentSubCategory, index) => (
                        <FormControlLabel
                          key={index}
                          label={instrumentSubCategory}
                          control={<Checkbox />}
                        />
                      )
                    )}
                  </FormGroup>
                </FilterAccordion>
                <div>
                  <LevelSlider />
                </div>
                <div className="space-y-2">
                  <FilterAccordion
                    title="Genere"
                    accordionSummaryClassName="px-0"
                    accordionDetailsClassName="px-0"
                  >
                    <FormGroup>
                      {filterData.genres.map((genre, index) => (
                        <FormControlLabel
                          key={index}
                          label={genre}
                          control={<Checkbox />}
                        />
                      ))}
                    </FormGroup>
                  </FilterAccordion>

                  <FilterAccordion
                    title="Argomento"
                    accordionSummaryClassName="px-0"
                    accordionDetailsClassName="px-0"
                  >
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
              </div>
            </div>
            <div className="p-4 bg-background fixed inset-x bottom-0 w-full">
              <Button
                size="medium"
                variant="contained"
                color="primary"
                className="w-full"
              >
                <Typography variant="button-m">Applica</Typography>
              </Button>
            </div>
          </Box>
        </Slide>
      </>
    </div>
  );
};

export default FilterMobile;
