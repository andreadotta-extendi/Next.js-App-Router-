"use client";
import React, { useState } from "react";
import { Button, Link, Typography, Grow, Fade } from "@mui/material";
import Layout from "../../Layout/LayoutOunboarding";
import ProgressIndicator from "./Elements/ProgressIndicator";
import ChevronRightFilled from "@mui/icons-material/ChevronRight";
import BackgroundWaves from "@/components/Layout/BackgroundWaves";
import Heading from "@/components/Shared/ui/Onboarding/Heading";
import Stepper from "@/components/Shared/ui/Onboarding/Stepper";
import CreativeRadio from "@/components/Shared/ui/CreativeRadio";

const instruments = [
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/a9f01c79b578f715b459251417837ada39421f498679215632897a35cb74a861?apiKey=ab14136582c84aab8af41f16349d0438&&apiKey=ab14136582c84aab8af41f16349d0438",
    altText: "Guitar icon",
    name: "Chitarra",
    value: "a",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/558487ca2355b45bd61fbc7dc3a5c91d6f085498186a6bf5775f8404e8445ca3?apiKey=ab14136582c84aab8af41f16349d0438&&apiKey=ab14136582c84aab8af41f16349d0438",
    altText: "Drums icon",
    name: "Batteria",
    value: "b",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/43fd97e731124e26acb223602590dc8987e8e4c34ef23a88ab50eb66ad69d40c?apiKey=ab14136582c84aab8af41f16349d0438&&apiKey=ab14136582c84aab8af41f16349d0438",
    altText: "Bass icon",
    name: "Basso",
    value: "c",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/921aa9828e9a3933467471100fecb692c9b1a2c7ddaa773cc3ed4bbabc64588a?apiKey=ab14136582c84aab8af41f16349d0438&&apiKey=ab14136582c84aab8af41f16349d0438",
    altText: "Ukulele icon",
    name: "Ukulele",
    value: "d",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/8fc704ae23d18f0b9a1b877ffe6b2982bc865dc95ec174d4d948d3c8bb3fc1ab?apiKey=ab14136582c84aab8af41f16349d0438&&apiKey=ab14136582c84aab8af41f16349d0438",
    altText: "Music production icon",
    name: "Produzione musicale",
    value: "e",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/9a79385cac6dfd9bee1a13a56b86c76dc2dfd8ff2efb5930e6220f5ebf84dd47?apiKey=ab14136582c84aab8af41f16349d0438&&apiKey=ab14136582c84aab8af41f16349d0438",
    altText: "Piano and keyboard icon",
    name: "Piano e tastiera",
    value: "f",
  },
];

const InstrumentSelection: React.FC = () => {
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
          <Stepper activeStep={0} />
        </div>
      </Fade>

      <section className="flex flex-col pt-10 pb-12 gap-y-8 items-center max-w-[700px] m-auto text-center">
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
              subtitle="Scegli lo strumento che ti interessa suonare per permetterci di
                offrirti i contenuti migliori"
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

        {/* Instrument Options */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-[600px] w-full">
          {instruments.map((instrument, index) => (
            <Grow
              key={instrument.value}
              in={true}
              style={{
                transformOrigin: "center center",
                transitionDelay: `${20 * index}ms`,
              }}
            >
              <div>
                <CreativeRadio
                  imageSrc={instrument.imageSrc}
                  altText={instrument.altText}
                  name={instrument.name}
                  value={instrument.value}
                  checked={selectedValue === instrument.value}
                  onChange={handleRadioChange}
                />
              </div>
            </Grow>
          ))}
        </div>

        {/* Progress Indicator */}
        <Grow in={true} style={{ transformOrigin: "center center" }}>
          <div className="flex mx-auto mt-4 gap-2 justify-center w-[40px]">
            <ProgressIndicator steps={2} currentStep={1} />
          </div>
        </Grow>

        {/* Continue Button */}
        <Grow in={true} style={{ transformOrigin: "center center" }}>
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

export default InstrumentSelection;
