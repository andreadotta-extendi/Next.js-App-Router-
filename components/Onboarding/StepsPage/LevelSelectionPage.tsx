"use client";
import React, { useState } from "react";
import { Button, Grow, Fade, Typography } from "@mui/material";
import BackgroundWaves from "@/components/Layout/BackgroundWaves";
import Layout from "@/components/Layout/LayoutOunboarding";
import Heading from "@/components/Shared/ui/Onboarding/Heading";
import Stepper from "@/components/Shared/ui/Onboarding/Stepper";
import CreativeRadio from "@/components/Shared/ui/CreativeRadio";

const levelOptions = [
  {
    name: "Non so suonare lo strumento",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/4357711de60ace15a1329694c623073a0fad90aca1bf791988f7f37d55d37718?apiKey=ab14136582c84aab8af41f16349d0438&&apiKey=ab14136582c84aab8af41f16349d0438",
    altText: "Non so suonare lo strumento",
    value: "a",
  },
  {
    name: "So già suonare lo strumento",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/0b5c64df640d04b476d76055832a1c9e3d95b38f82c4aa08138debf237d266f4?apiKey=ab14136582c84aab8af41f16349d0438&&apiKey=ab14136582c84aab8af41f16349d0438",
    altText: "So già suonare lo strumento",
    value: "b",
  },
];

const LevelSelection: React.FC = () => {
  const [selectedValue, setSelectedValue] = useState<string>("");

  // Handler for radio button selection
  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <Layout stepsPage={true}>
      {/* Stepper */}
      <Fade in={true}>
        <div>
          <Stepper activeStep={2} onBack={() => console.log("Go back")} />
        </div>
      </Fade>

      <section className="flex flex-col pt-10 pb-12 gap-y-8 items-center max-w-[750px] m-auto text-center">
        {/* Heading */}
        <Fade
          in={true}
          style={{
            transitionDuration: "700ms",
          }}
        >
          <div>
            <Heading
              title="Che percorso vuoi intraprendere?"
              subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua"
            />
          </div>
        </Fade>

        {/* Options to select */}
        <div className="grid grid-cols-2 gap-4 max-w-[650px] w-full">
          {/* CreativeRadio */}
          {levelOptions.map((levelOption) => (
            <Grow
              key={levelOption.value}
              in={true}
              style={{
                transformOrigin: "center center",
                transitionDelay: "50ms",
              }}
            >
              <div>
                <CreativeRadio
                  imageSrc={levelOption.imageSrc}
                  altText={levelOption.altText}
                  name={levelOption.name}
                  value={levelOption.value}
                  checked={selectedValue === levelOption.value}
                  onChange={handleRadioChange}
                />
              </div>
            </Grow>
          ))}
        </div>

        <Grow in={true}>
          <div>
            <Button
              size="large"
              variant="contained"
              color="primary"
              className="max-w-full w-[220px]"
              disabled={!selectedValue}
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

export default LevelSelection;
