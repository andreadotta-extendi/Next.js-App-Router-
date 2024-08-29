"use client";
import React from "react";
import {
  Typography,
  Chip,
  Button,
  Avatar,
  Grid,
  IconButton,
} from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";

const steps = [
  {
    courseType: "Masterclass Live",
    title: "Tecniche Melodiche negli Assoli di Chitarra",
    insegnante: "Tony De Gruttola",
    startTime: "22 Settembre - 21:30",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/81ba2ff2f482cdc7ab8254d93f7fb0ab94a0d0e4c3a0d8a6f8b4875c84ddeb60?placeholderIfAbsent=true&apiKey=ab14136582c84aab8af41f16349d0438",
  },
  {
    courseType: "Masterclass Live",
    title: "Come suonare veramente bene",
    insegnante: "Carl Johnson",
    startTime: "24 Settembre - 21:30",
    image:
      "https://images.unsplash.com/photo-1487954277007-8c2d6710c312?q=80&w=2736&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    courseType: "Masterclass Live",
    title: "Ding Dong ad Hong Kong",
    insegnante: "Xi Yong",
    startTime: "22 Ottobre - 21:30",
    image:
      "https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?q=80&w=4368&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export function SwipableCatalogCarousel() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className="flex flex-col justify-center mt-4 w-full">
      <Grid
        container
        spacing="0"
        className="bg-paper rounded-xl text-center overflow-hidden h-[450px]"
      >
        <Grid item md={6}>
          <div className="flex flex-col flex-1 shrink justify-center px-8 py-10">
            <div className="flex flex-col w-full gap-4">
              <Chip
                label={
                  <Typography variant="caption-500">
                    {steps[activeStep].courseType}
                  </Typography>
                }
                size="medium"
                variant="filled"
                className="self-center text-error-dark bg-error-light"
                avatar={<Avatar src="assets/catalog/dot.png" />}
              />
              <Typography variant="h2" className="mt-4" component="h2">
                {steps[activeStep].title}
              </Typography>
              <img
                loading="lazy"
                className="w-[80px] mx-auto"
                src="assets/catalog/separator.svg"
                alt="separator"
              />
              <Typography variant="s1" component="h3">
                con {steps[activeStep].insegnante}
              </Typography>
            </div>
            <div className="flex flex-col self-center mt-8 max-w-full">
              <div className="flex gap-2 justify-center items-center w-full">
                <img
                  loading="lazy"
                  src="assets/catalog/calendar-today.svg"
                  alt="calendar"
                  className="w-4"
                />
                <Typography
                  variant="body-small-500"
                  className="self-stretch my-auto"
                >
                  {steps[activeStep].startTime}
                </Typography>
              </div>
              <Button
                size="large"
                variant="contained"
                color="primary"
                className="mt-4 w-full"
              >
                Accedi alla live
              </Button>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={6} className="min-h-[250px]">
          <div
            className="min-h-[250px]"
            style={{
              backgroundImage: `url(${steps[activeStep].image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "100%",
            }}
          />
        </Grid>
      </Grid>
      <div className="flex flex-wrap justify-center items-center mt-2 w-full">
        <MobileStepper
          className="gap-3"
          variant="dots"
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <IconButton
              size="large"
              color="primary"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </IconButton>
          }
          backButton={
            <IconButton
              size="large"
              color="primary"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
            </IconButton>
          }
        />
      </div>
    </div>
  );
}
