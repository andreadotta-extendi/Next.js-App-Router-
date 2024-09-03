/**
 * This code was generated by Builder.io.
 */
"use client";
import React from "react";
import { styled } from "@mui/material/styles";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import StepIcon, { StepIconProps } from "@mui/material/StepIcon";
import { Button, Chip, IconButton, Typography } from "@mui/material";
import ArrowBackFilled from "@mui/icons-material/ArrowBack";
import OptionCard from "./Elements/OptionCard";
import OptionSelectedFeedback from "./Elements/OptionSelectedFeedback";
import theme from "@/app/theme";
import Layout from "@/components/Layout/LayoutOunboarding";
import BackgroundWaves from "@/components/Layout/BackgroundWaves";

const QontoConnector = styled(StepConnector)(({ theme }) => ({
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
      width: 72,
      height: 16,
      borderRadius: "10px",
      backgroundColor: "currentColor",
    },
  })
);

function QontoStepIcon(props: StepIconProps) {
  const { active, completed, className } = props;

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
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

const steps = [
  "Select campaign settings",
  "Create an ad group",
  "Create an ad",
];

const sessionOptions = [
  {
    name: "Una volta",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/69bd89def80efb2b72ab9fe83371820acd6488a0bc163b5293acc7fc4cb27ed8?apiKey=ab14136582c84aab8af41f16349d0438&&apiKey=ab14136582c84aab8af41f16349d0438",
    altText: "una volta",
    radioValue: "a",
  },
  {
    name: "Due volte",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/a3a2d3aece2819236bfc7721352a53d5f73e830095c71dc92ddd46e3beeaf423?apiKey=ab14136582c84aab8af41f16349d0438&&apiKey=ab14136582c84aab8af41f16349d0438",
    altText: "due volte",
    radioValue: "b",
  },
  {
    name: "Tre volte",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/317c0c24912b4e1610c63dc42b60395eb83e3c141da91f0d429c09de36c8700e?apiKey=ab14136582c84aab8af41f16349d0438&&apiKey=ab14136582c84aab8af41f16349d0438",
    altText: "tre volte",
    radioValue: "c",
  },
  {
    name: "Almeno 5",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/cd7d1caaee2569dc90b2a868a6c77c4bc9910aca17f2e0eacb54f81a6500fedf?apiKey=ab14136582c84aab8af41f16349d0438&&apiKey=ab14136582c84aab8af41f16349d0438",
    altText: "almeno cinque",
    radioValue: "d",
  },
];

const SessionPlanner: React.FC = () => {
  return (
    <Layout stepsPage={true}>
      {/* Progress Indicator */}
      <div className="flex justify-center items-center gap-x-4">
        <IconButton color="primary" aria-label="back">
          <ArrowBackFilled />
        </IconButton>
        <Stepper alternativeLabel activeStep={1} connector={<QontoConnector />}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel StepIconComponent={QontoStepIcon} />
            </Step>
          ))}
        </Stepper>
        <div className="w-[32px]" />
      </div>

      <section className="flex flex-col pt-4 pb-12 gap-y-8 items-center max-w-[750px] m-auto text-center">
        {/* Heading */}
        <div className="space-y-4">
          <Typography variant="h1" component="h1" className="text-zinc-200">
            Quante sessioni di studio vuoi organizzare in una settimana?
          </Typography>
          <Typography variant="s1" component="h2" className="text-gray-400">
            Quante volte pensavi di dedicarti a studiare la chitarra durante la
            settimana
          </Typography>
        </div>

        {/* Options to select */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-[650px] w-full">
          {/* Esempio sessione selezionat */}
          {sessionOptions.slice(0, 4).map((sessionOption, index) => (
            <OptionCard key={index} {...sessionOption} />
          ))}
        </div>

        <Button
          size="large"
          variant="contained"
          color="primary"
          className="max-w-full w-[220px]"
        >
          Continua
        </Button>

        {/* Feedback once you select the option */}
        <OptionSelectedFeedback
          imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/b6ebe69212335ff31e8c68399faec898376f3fa09436a5debbacbeb0ae729041?apiKey=ab14136582c84aab8af41f16349d0438&&apiKey=ab14136582c84aab8af41f16349d0438"
          text="La maggior parte delle persone sceglie questa opzione"
        />
      </section>
      <BackgroundWaves wave="onboardingSteps" />
    </Layout>
  );
};

export default SessionPlanner;
