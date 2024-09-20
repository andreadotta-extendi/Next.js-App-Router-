"use client";
import React, { useState } from "react";
import { Button, Link, Typography, Grow, Fade } from "@mui/material";
import Layout from "../../Layout/LayoutOunboarding";
import ProgressIndicator from "./Elements/ProgressIndicator";
import ChevronRightFilled from "@mui/icons-material/ChevronRight";
import { RadioOptionGroup } from "./Elements/RadioOptionGroup";
import BackgroundWaves from "@/components/Layout/BackgroundWaves";
import Stepper from "@/components/Shared/ui/Onboarding/Stepper";
import Heading from "@/components/Shared/ui/Onboarding/Heading";

const radioOptions = ["Acustica", "Elettrica"];
const radioValues = ["acoustic", "electric"];

const AcousticSelection: React.FC = () => {
  // Step 1: Manage selected radio option in state
  const [selectedRadio, setSelectedRadio] = useState<string>("");

  // Step 2: Handle radio selection change
  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedRadio(event.target.value);
  };

  return (
    <Layout stepsPage={true}>
      {/* Stepper with Fade animation */}
      <Fade in={true}>
        <div>
          <Stepper activeStep={0} />
        </div>
      </Fade>

      <section className="flex flex-col pt-10 pb-12 gap-y-8 items-center max-w-[700px] m-auto text-center">
        {/* Heading with Fade animation */}
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
              children={
                <div>
                  <Link href="#" underline="none" variant="button-s">
                    Chitarra
                  </Link>
                  <ChevronRightFilled
                    fontSize="small"
                    className="text-text-secondary"
                  />
                  <Link href="#" underline="none" variant="button-s">
                    Acustica
                  </Link>
                </div>
              }
            />
          </div>
        </Fade>

        {/* Radio Group with Grow animation */}
        <Grow in={true} style={{ transformOrigin: "center center" }}>
          <div className="w-full">
            <div className="space-y-4 w-full">
              {/* Pass the selected value and the change handler */}
              <RadioOptionGroup
                options={radioOptions}
                value={selectedRadio} // Pass the selected value from state
                labelClass="flex justify-between"
                labelPlacement="start"
                onChange={handleRadioChange} // Pass the change handler
              />
            </div>

            {/* Progress Indicator with Grow animation */}
            <Grow in={true} style={{ transformOrigin: "center center" }}>
              <div className="flex mx-auto mt-4 gap-2 justify-center w-[40px]">
                <ProgressIndicator steps={2} currentStep={1} />
              </div>
            </Grow>
          </div>
        </Grow>

        {/* Button group with Grow animation */}
        <Grow in={true} style={{ transformOrigin: "center center" }}>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              size="large"
              variant="contained"
              color="secondary"
              className="max-w-full w-[220px]"
            >
              <Typography variant="button-l">Indietro</Typography>
            </Button>
            <Button
              size="large"
              variant="contained"
              color="primary"
              className="max-w-full w-[220px]"
              disabled={!selectedRadio} // Enable the button only if a radio is selected
            >
              <Typography variant="button-l">Continua</Typography>
            </Button>
          </div>
        </Grow>
      </section>

      <BackgroundWaves wave="onboardingSteps" />
    </Layout>
  );
};

export default AcousticSelection;
