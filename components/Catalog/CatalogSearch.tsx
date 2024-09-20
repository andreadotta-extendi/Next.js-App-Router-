import React from "react";
import {
  Typography,
  IconButton,
  Button,
  FormControl,
  OutlinedInput,
  InputAdornment,
} from "@mui/material";
import { CancelRounded, SearchRounded } from "@mui/icons-material";

const CatalogSearch = () => {
  return (
    <div className="flex flex-col p-8 gap-8 w-full rounded-xl bg-paper relative">
      <Typography variant="h1" className="w-full text-center z-[2]">
        Esplora il catalogo
      </Typography>
      <form className="flex flex-col self-center max-w-[900px] w-full">
        <FormControl variant="outlined" className="w-full">
          <OutlinedInput
            className="pr-2"
            label="Cerca un argomento, un insegnante, un percorso"
            startAdornment={
              <InputAdornment position="start">
                <SearchRounded className="text-text-secondary h-[18px]" />
              </InputAdornment>
            }
            endAdornment={
              <InputAdornment position="end">
                <IconButton aria-label="delete value">
                  <CancelRounded className="text-text-secondary h-[16px]" />
                </IconButton>
                <Button
                  size="small"
                  variant="contained"
                  color="primary"
                  className="h-[36px] ml-2 px-2 md:px-8"
                  sx={{ minWidth: "auto" }}
                >
                  <Typography variant="button-s" className="hidden md:block">
                    Cerca
                  </Typography>
                  <SearchRounded className="text-white h-[18px] block md:hidden" />
                </Button>
              </InputAdornment>
            }
          />
        </FormControl>
      </form>

      {/* non previsti per ora */}
      {/* 
            <div className="flex flex-wrap gap-4 justify-center w-full">
                {[
                "Chitarra",
                "Batteria",
                "Travis Barker",
                "Assolo chitarra",
                "Chitarra",
                "Batteria",
                "Travis Barker",
                "Assolo chitarra",
                ].map((label, index) => (
                <Chip
                    key={index}
                    label={label}
                    size="medium"
                    variant="filled"
                    sx={{ backgroundColor: "#54566870" }}
                    // onClick={()=>{}}
                />
                ))}
            </div>
        */}
    </div>
  );
};

export default CatalogSearch;
