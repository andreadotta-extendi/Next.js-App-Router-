/**
 * This code was generated by Builder.io.
 */
"use client"
import React from "react";
import { Button, IconButton, Step, StepConnector, stepConnectorClasses, StepIcon, StepIconProps, StepLabel, Stepper, styled, Typography } from "@mui/material";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { RadioOptionGroup } from "./Elements/RadioOptionGroup";
import ArrowBackFilled from '@mui/icons-material/ArrowBack';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Header from "@/components/Layout/Header";
import theme from "@/app/theme";
import OptionCard from "./Elements/OptionCard";
import OptionSelectedFeedback from "./Elements/OptionSelectedFeedback";
import BackgroundWaves from "@/components/Layout/BackgroundWaves";
import Layout from "@/components/Layout/Layout";

interface MusicJourneySelectionProps {}

const MusicJourneySelection: React.FC<MusicJourneySelectionProps> = () => {
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

const levelOptions = [
    {
      name: "Non so suonare lo strumento",
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/4357711de60ace15a1329694c623073a0fad90aca1bf791988f7f37d55d37718?apiKey=ab14136582c84aab8af41f16349d0438&&apiKey=ab14136582c84aab8af41f16349d0438",
      altText: "Non so suonare lo strumento",
      radioValue: "a",
    },
    {
      name: "So già suonare lo strumento",
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/0b5c64df640d04b476d76055832a1c9e3d95b38f82c4aa08138debf237d266f4?apiKey=ab14136582c84aab8af41f16349d0438&&apiKey=ab14136582c84aab8af41f16349d0438",
      altText: "So già suonare lo strumento",
      radioValue: "b",
    },
  ];

  const journeyOptions = [
    {
      text: "So già suonare lo strumento",
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/f8d69b388f8991b07dc3d964e8158a6f716986031fca2e82ef3e78b891f42f7a?apiKey=ae92917785e7425fbb91907da8ebf914&&apiKey=ae92917785e7425fbb91907da8ebf914",
    },
  ];

  const radioOptions = [
    "Hai iniziato da poco, ma la forza del Rock scorre potente in te. Ogni volta che senti una canzone che ti piace inizi a tenere il ritmo con il piede.",
    "Te la cavi e anche bene! Premi play su una canzone e bene o male riesci ad andarci dietro. A volte meglio, altre peggio, ma la porti a casa senza grandi problemi. Ti senti pronto per suonare in un gruppo, o forse già lo fai.",
    "Sei il capo della sala prove. Vuoi portare all'estremo la conoscenza del tuo strumento, anche se gli altri ti dicono che sei bravo, ma tu non ti senti arrivato perché hai fame di musica.",
  ];

  const radioValue = [
    "first",
    "second",
    "third",
  ];

  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Layout stepsPage={true}>
      {/* Progress Indicator */}
      <div className="flex justify-center items-center gap-x-4">
          <IconButton color="primary" aria-label="back" >
              <ArrowBackFilled />
          </IconButton>
          <Stepper alternativeLabel activeStep={3} connector={<QontoConnector />}>
          {steps.map((label) => (
              <Step key={label}>
              <StepLabel StepIconComponent={QontoStepIcon} />
              </Step>
          ))}
          </Stepper>
          <div className="w-[32px]" />
      </div>

      <section className="flex flex-col py-4 gap-y-8 items-center max-w-[650px] m-auto">

          {/* Heading */}
          <div className="space-y-4 text-center">
              <Typography variant="h1" component="h1" className="text-zinc-200">
              Quale strumento vuoi suonare?
              </Typography>
              <Typography variant="s1" component="h2" className="text-gray-400">
              Scegli lo strumento che ti interessa suonare per permetterci
              di offrirti i contenuti migliori
              </Typography>
          </div>

          {/* Accordion */}
          <Accordion expanded className="w-full">
              <AccordionSummary
              expandIcon={<ExpandMore color="primary" />}
              aria-controls="panel1-content"
              id="panel1-header"
              >
              So già suonare lo strumento
              </AccordionSummary>
              <AccordionDetails>
                  {/* Options to select */}
                  <div className="grid grid-cols-2 gap-4 w-full mt-2">
                      {levelOptions.slice(0, 2).map((levelOption, index) => (
                      <OptionCard key={index} {...levelOption}/>
                      ))}
                  </div>
              </AccordionDetails>
          </Accordion>
          
          <Typography variant="h3" component="h2" className="text-zinc-200">
              Quale frase ti rappresenta di più?
          </Typography>

          {/* Radio Group */}
          <div className="space-y-4"> 
              <RadioOptionGroup options={radioOptions} value={radioValue} labelPlacement="start" />
          </div>

          {/* Feedback once you select the option */}
          <OptionSelectedFeedback
              imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/fefd87c43df65a0f5ea72240f66fbce99941d130db0488f79b4242cbab607263?apiKey=ae92917785e7425fbb91907da8ebf914&&apiKey=ae92917785e7425fbb91907da8ebf914"
              text="Ti consigliamo di suonare 15min, seguire 8 puntate di vibly e 8 di ripasso."
              alt="consiglio"
          />


          <Button
          size="large"
          variant="contained"
          color="primary"
          className="mt-8 max-w-full w-[220px]"
          disabled
          >
          Continua
          </Button>
      </section>
      <BackgroundWaves wave="onboardingEnd" />
    </Layout>
  );
};

export default MusicJourneySelection;