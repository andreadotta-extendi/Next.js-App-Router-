"use client"
import React from "react";
import { Chip, Typography, LinearProgress, linearProgressClasses } from '@mui/material';
import { styled } from '@mui/material/styles';

interface ModalDescriptionProps {
  description: string;
  progressValue: number;
}

// Create a styled version of LinearProgress
const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 16,
  borderRadius: 16,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[300],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.primary.main,
  },
}));


const ModalDescription: React.FC<ModalDescriptionProps> = ({ description, progressValue }) => {
  return (
    <div className="flex flex-col gap-6 w-full">
      <Chip
        label="Serie"
        size="medium"
        color="primary"
        variant="filled"
        className="self-start"
      />
      <p className="mt-2 text-base font-medium leading-6 text-text-secondary">
        {description}
      </p>

      <div className="flex justify-between gap-4">
        <Typography variant="s2" component="p" className="text-text-secondary">
          Completato
        </Typography>
        <span className="flex items-center gap-2">
          <LinearProgress variant="determinate" value={progressValue} className="w-[160px]" />
          <Typography variant="s2" component="p">{progressValue}%</Typography>
        </span>
      </div>
    </div>
  );
};

export default ModalDescription;
