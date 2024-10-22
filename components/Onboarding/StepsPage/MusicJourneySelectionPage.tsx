"use client";
import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMore from "@mui/icons-material/ExpandMore";
import OptionSelectedFeedback from "./Elements/OptionSelectedFeedback";
import BackgroundWaves from "@/components/Layout/BackgroundWaves";
import Layout from "@/components/Layout/LayoutOunboarding";
import Heading from "@/components/Shared/ui/Onboarding/Heading";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stepper from "@/components/Shared/ui/Onboarding/Stepper";
import CreativeRadio from "@/components/Shared/ui/CreativeRadio";
import { Grow, Fade } from "@mui/material";
import { RadioOptionGroup } from "./Elements/RadioOptionGroup";

// Radio button options for user level
const levelOptions = [
  {
    name: "Non so usare lo strumento",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/4357711de60ace15a1329694c623073a0fad90aca1bf791988f7f37d55d37718?apiKey=ab14136582c84aab8af41f16349d0438&&apiKey=ab14136582c84aab8af41f16349d0438",
    altText: "Non so usare lo strumento",
    value: "option1",
  },
  {
    name: "So usare lo strumento",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/0b5c64df640d04b476d76055832a1c9e3d95b38f82c4aa08138debf237d266f4?apiKey=ab14136582c84aab8af41f16349d0438&&apiKey=ab14136582c84aab8af41f16349d0438",
    altText: "So usare lo strumento",
    value: "option2",
  },
];

// Descriptions and corresponding feedback messages
const radioOptions = [
  {
    text: "Hai iniziato da poco, ma la forza del Rock scorre potente in te. Ogni volta che senti una canzone che ti piace inizi a tenere il ritmo con il piede.",
    feedback:
      "Ti consigliamo di suonare 15min al giorno e seguire 8 puntate di vibly per principianti.",
  },
  {
    text: "Te la cavi e anche bene! Premi play su una canzone e bene o male riesci ad andarci dietro. A volte meglio, altre peggio, ma la porti a casa senza grandi problemi. Ti senti pronto per suonare in un gruppo, o forse già lo fai.",
    feedback:
      "Ti consigliamo di praticare 30min al giorno, seguire 12 puntate avanzate e unirti a una band per migliorare.",
  },
  {
    text: "Sei il capo della sala prove. Vuoi portare all'estremo la conoscenza del tuo strumento, anche se gli altri ti dicono che sei bravo, ma tu non ti senti arrivato perché hai fame di musica.",
    feedback:
      "Pratica intensamente per 1 ora al giorno, segui 20 episodi esperti e partecipa a workshop professionali per perfezionarti.",
  },
];

const MusicJourneySelection: React.FC = () => {
  const [expanded, setExpanded] = useState<string | false>(false);
  const [selectedLevel, setSelectedLevel] = useState<string>("option1");
  const [selectedOption, setSelectedOption] = useState<string>("");

  // Handle radio button selection for level
  const handleLevelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedLevel(event.target.value);
  };

  // Handle radio button selection for option description
  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  // Handle accordion expansion
  const handleAccordionChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  // Find the selected option for feedback
  const selectedFeedback = radioOptions.find(
    (option) => option.text === selectedOption
  )?.feedback;

  return (
    <Layout stepsPage={true}>
      {/* Stepper */}
      <Fade
        in={true}
        style={{
          transitionDelay: "50ms",
        }}
      >
        <div>
          <Stepper activeStep={3} onBack={() => console.log("Go back")} />
        </div>
      </Fade>

      <section className="flex flex-col pt-10 pb-12 gap-y-8 items-center max-w-[650px] m-auto">
        {/* Heading */}
        <Fade
          in={true}
          style={{
            transitionDuration: "700ms",
          }}
        >
          <div>
            <Heading
              title="Quale strumento vuoi suonare?"
              subtitle="Scegli lo strumento che ti interessa suonare per permetterci di offrirti i contenuti migliori"
            />
          </div>
        </Fade>

        {/* Accordion for instrument level */}
        <Grow in={true} style={{ transitionDelay: "50ms" }}>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleAccordionChange("panel1")}
            className="w-full"
          >
            <AccordionSummary
              expandIcon={<ExpandMore color="primary" />}
              aria-controls="panel1-content"
              id="panel1-header"
              className="py-2 px-6"
            >
              <Typography variant="s2" color="textPrimary">
                So già suonare lo strumento
              </Typography>
            </AccordionSummary>
            <AccordionDetails className="px-6 pb-6">
              {/* CreativeRadio buttons for level selection */}
              <div className="grid grid-cols-2 gap-4 w-full">
                {levelOptions.map((levelOption) => (
                  <CreativeRadio
                    key={levelOption.value}
                    imageSrc={levelOption.imageSrc}
                    altText={levelOption.altText}
                    name={levelOption.name}
                    value={levelOption.value}
                    checked={selectedLevel === levelOption.value}
                    onChange={handleLevelChange}
                  />
                ))}
              </div>
            </AccordionDetails>
          </Accordion>
        </Grow>

        {/* Second Question */}
        <Fade in={true} style={{ transitionDelay: "50ms" }}>
          <Typography
            variant="h3"
            component="h2"
            color="textPrimary"
            className="text-center"
          >
            Quale frase ti rappresenta di più?
          </Typography>
        </Fade>

        {/* Option Group for journey description */}
        <Grow
          in={true}
          style={{
            transformOrigin: "center center",
            transitionDelay: "50ms",
          }}
        >
          <div className="space-y-4">
            <RadioOptionGroup
              options={radioOptions.map((option) => option.text)}
              value={selectedOption}
              onChange={handleOptionChange}
              labelPlacement="start"
            />
          </div>
        </Grow>

        {/* Feedback displayed based on selected option */}
        {selectedOption && (
          <Grow
            in={Boolean(selectedOption)}
            style={{
              transformOrigin: "top center",
              transitionDuration: "200ms",
            }}
          >
            <div>
              <OptionSelectedFeedback
                imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/fefd87c43df65a0f5ea72240f66fbce99941d130db0488f79b4242cbab607263?apiKey=ae92917785e7425fbb91907da8ebf914"
                text={selectedFeedback ?? ""}
                alt="consiglio"
                boxClassName="bg-paper"
              />
            </div>
          </Grow>
        )}

        {/* Continue Button */}
        <Grow in={true}>
          <div>
            <Button
              size="large"
              variant="contained"
              color="primary"
              className="max-w-full w-[220px]"
              disabled={!selectedOption} // Disable button if no option is selected
            >
              <Typography variant="button-l">Continua</Typography>
            </Button>
          </div>
        </Grow>
      </section>

      <BackgroundWaves wave="onboardingEnd" />
    </Layout>
  );
};

export default MusicJourneySelection;
