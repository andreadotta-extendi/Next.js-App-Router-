/**
 * This code was generated by Builder.io.
 */
"use client"
import React from "react";
import { Button, IconButton, Link, Step, StepConnector, stepConnectorClasses, StepIconProps, StepLabel, Stepper, styled, Typography } from "@mui/material";
import Layout from "../../Layout/Layout";
import Header from "../../Layout/Header";
import ProgressIndicator from "./Elements/ProgressIndicator";
import ChevronRightFilled from '@mui/icons-material/ChevronRight';
import ArrowBackFilled from '@mui/icons-material/ArrowBack';
import OptionCard from "./Elements/OptionCard";
import theme from "@/app/theme";
import { RadioOptionGroup } from "./Elements/RadioOptionGroup";
import BackgroundWaves from "@/components/Layout/BackgroundWaves";

const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`& .${stepConnectorClasses.line}`]: {
    display: 'none',
  },
}));

const QontoStepIconRoot = styled('div')<{ ownerState: { active?: boolean } }>(
  ({ theme, ownerState }) => ({
    color: theme.palette.grey[500],
    display: 'flex',
    height: 22,
    alignItems: 'center',
    ...(ownerState.active && {
      color: theme.palette.primary.main,
    }),
    '& .QontoStepIcon-circle': {
      padding: 0,
      width: 72,
      height: 16,
      borderRadius: '10px',
      backgroundColor: 'currentColor',
    },
  }),
);

function QontoStepIcon(props: StepIconProps) {
  const { active, completed, className } = props;

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {completed ? (
        <div className="QontoStepIcon-circle" style={{ backgroundColor: theme.palette.primary.main}} />
      ) : (
        <div className="QontoStepIcon-circle" />
      )}
    </QontoStepIconRoot>
  );
}

const steps = ['Select campaign settings', 'Create an ad group', 'Create an ad'];

const radioOptions = [
    "Acustica",
    "Elettrica",
  ];

  const radioValue = [
    "acoustic",
    "electric",
  ];

const AcousticSelection: React.FC = () => {
  return (
    <Layout stepsPage={true}>
      {/* Progress Indicator */}
      <div className="flex justify-center items-center gap-x-4">
        <IconButton color="primary" aria-label="back" >
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
      <section className="flex flex-col py-4 gap-y-8 items-center max-w-[700px] m-auto text-center">
        <div className="space-y-4">
          {/* heading */}
          <Typography variant="h1" component="h1" className="text-zinc-200">
            Quale strumento vuoi suonare?
          </Typography>
          <Typography variant="s1" component="h2" className="text-gray-400">
            Scegli lo strumento che ti interessa suonare per permetterci
            di offrirti i contenuti migliori
          </Typography>

          {/* da mostrare al go back */}
            <div>
              <Link href="#" underline="none" variant="button-s">
                Chitarra
              </Link>
              <ChevronRightFilled fontSize="small" className="text-text-secondary" />
              <Link href="#" underline="none" variant="button-s">
                Acustica
              </Link>
            </div>
          {/* end */}
        </div>

        <div className="w-full">
          {/* Radio Group */}
          <div className="space-y-4 w-full"> 
              <RadioOptionGroup options={radioOptions} value={radioValue} labelClass="flex justify-between pl-4" labelPlacement="start" />
          </div>
        
          {/* da mostrare al go back */}
          <div className="flex mx-auto mt-4 gap-2 justify-center w-[40px]">
            <ProgressIndicator steps={2} currentStep={1} />
          </div>
          {/* end */}
        </div>
      
      
        <div className="flex flex-wrap gap-4 justify-center">
          <Button
              size="large"
              variant="contained"
              color="secondary"
              className="mt-8 max-w-full w-[220px]"
          >
              Indietro
          </Button>
          <Button
              size="large"
              variant="contained"
              color="primary"
              className="mt-8 max-w-full w-[220px]"
              disabled
          >
              Continua
          </Button>
        </div>
      </section>
      <BackgroundWaves wave="onboardingSteps" />
    </Layout>
  );
};

export default AcousticSelection;
