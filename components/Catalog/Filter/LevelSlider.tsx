"use client"
import { Box, Slider, Typography } from "@mui/material";
import React from "react";

const MAX = 3;
const MIN = 0;
const marks = [
  {
    value: MIN,
    label: '',
  },
  {
    value: MAX,
    label: '',
  },
];

const LevelSlider: React.FC = () => {
  const [val, setVal] = React.useState<number>(MIN);
  const handleChange = (_: Event, newValue: number | number[]) => {
    setVal(newValue as number);
  };

  return (
    <div className="flex flex-col px-6 w-full">
      <Typography variant="s1" component="p" className="mb-2">Livello</Typography>
      <div className="w-full px-1">
        <Slider
          orientation="horizontal"
          size="medium"
          color="primary"
          valueLabelDisplay="auto"
          track="normal"
          className="w-full"
          defaultValue={[MIN, MAX]}
          step={1}
          shiftStep={1}
          min={MIN}
          max={MAX}
        />
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <img src="assets/catalog/levels/mai-suonato-gray.png" className="h-[18px]" />
          <img src="assets/catalog/levels/base-gray.png" className="h-[18px]" />
          <img src="assets/catalog/levels/intermedio-gray.png" className="h-[18px]" />
          <img src="assets/catalog/levels/avanzato.png" className="h-[18px]" />
        </Box>
      </div>
    </div>
  );
};

export default LevelSlider;
