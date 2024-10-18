"use client";
import React from "react";
import {
  IconButton,
  Step,
  StepConnector,
  StepLabel,
  Stepper as MUIStepper,
  styled,
} from "@mui/material";
import { ChevronLeftRounded, ChevronRightRounded } from "@mui/icons-material";
import { StepIconProps, stepConnectorClasses } from "@mui/material";
import theme from "@/app/theme";

const QontoConnector = styled(StepConnector)(({}) => ({
  [`& .${stepConnectorClasses.line}`]: {
    display: "none",
  },
}));

const QontoStepIconRoot = styled("div")<{ ownerState: { active?: boolean } }>(
  ({ theme, ownerState }) => ({
    color: theme.palette.grey[500],
    display: "flex",
    height: 22,
    alignItems: "center",
    ...(ownerState.active && {
      color: theme.palette.primary.main,
    }),
    "& .QontoStepIcon-circle": {
      padding: 0,
      width: 72, // Default width for larger screens
      height: 16,
      borderRadius: "10px",
      backgroundColor: "currentColor",
    },
  })
);

function QontoStepIcon(props: StepIconProps) {
  const { active, completed, className } = props;

  return (
    <QontoStepIconRoot ownerState={{ active }} className={`${className} px-0`}>
      {completed ? (
        <div
          className="QontoStepIcon-circle"
          style={{ backgroundColor: theme.palette.primary.main }}
        />
      ) : (
        <div className="QontoStepIcon-circle" />
      )}
    </QontoStepIconRoot>
  );
}

interface StepperProps {
  activeStep: number;
  onBack?: () => void;
  onNext?: () => void;
}

const Stepper: React.FC<StepperProps> = ({ activeStep, onBack, onNext }) => {
  const steps = ["", "", ""];

  return (
    <div className="flex justify-center items-center gap-x-4">
      {onBack ? (
        <IconButton color="primary" aria-label="back" onClick={onBack}>
          <ChevronLeftRounded />
        </IconButton>
      ) : (
        <div className="w-[32px]" />
      )}
      <MUIStepper
        alternativeLabel
        activeStep={activeStep}
        connector={<QontoConnector />}
      >
        {steps.map((label, index) => (
          <Step key={label} completed={activeStep > index}>
            <StepLabel StepIconComponent={QontoStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </MUIStepper>
      {onNext ? (
        <IconButton color="primary" aria-label="next" onClick={onNext}>
          <ChevronRightRounded />
        </IconButton>
      ) : (
        <div className="w-[32px]" />
      )}
    </div>
  );
};

export default Stepper;
