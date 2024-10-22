"use client";
import React, { useState } from "react";
import { Button, Grow, Typography, Fade, Slide } from "@mui/material";
import OptionSelectedFeedback from "./Elements/OptionSelectedFeedback";
import Layout from "@/components/Layout/LayoutOunboarding";
import BackgroundWaves from "@/components/Layout/BackgroundWaves";
import Heading from "@/components/Shared/ui/Onboarding/Heading";
import Stepper from "@/components/Shared/ui/Onboarding/Stepper";
import CreativeRadio from "@/components/Shared/ui/CreativeRadio";

const sessionOptions = [
  {
    name: "Una volta",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/69bd89def80efb2b72ab9fe83371820acd6488a0bc163b5293acc7fc4cb27ed8?apiKey=ab14136582c84aab8af41f16349d0438&&apiKey=ab14136582c84aab8af41f16349d0438",
    altText: "una volta",
    value: "a",
    feedback: {
      text: "Molti scelgono di studiare una volta a settimana per cominciare!",
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/b6ebe69212335ff31e8c68399faec898376f3fa09436a5debbacbeb0ae729041?apiKey=ab14136582c84aab8af41f16349d0438&&apiKey=ab14136582c84aab8af41f16349d0438",
    },
  },
  {
    name: "Due volte",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/a3a2d3aece2819236bfc7721352a53d5f73e830095c71dc92ddd46e3beeaf423?apiKey=ab14136582c84aab8af41f16349d0438&&apiKey=ab14136582c84aab8af41f16349d0438",
    altText: "due volte",
    value: "b",
    feedback: {
      text: "Due volte a settimana è ottimo per vedere progressi rapidi!",
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/b6ebe69212335ff31e8c68399faec898376f3fa09436a5debbacbeb0ae729041?apiKey=ab14136582c84aab8af41f16349d0438&&apiKey=ab14136582c84aab8af41f16349d0438",
    },
  },
  {
    name: "Tre volte",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/317c0c24912b4e1610c63dc42b60395eb83e3c141da91f0d429c09de36c8700e?apiKey=ab14136582c84aab8af41f16349d0438&&apiKey=ab14136582c84aab8af41f16349d0438",
    altText: "tre volte",
    value: "c",
    feedback: {
      text: "Tre volte è una scelta equilibrata per perfezionarsi!",
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/b6ebe69212335ff31e8c68399faec898376f3fa09436a5debbacbeb0ae729041?apiKey=ab14136582c84aab8af41f16349d0438&&apiKey=ab14136582c84aab8af41f16349d0438",
    },
  },
  {
    name: "Almeno 5",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/cd7d1caaee2569dc90b2a868a6c77c4bc9910aca17f2e0eacb54f81a6500fedf?apiKey=ab14136582c84aab8af41f16349d0438&&apiKey=ab14136582c84aab8af41f16349d0438",
    altText: "almeno cinque",
    value: "d",
    feedback: {
      text: "Praticare almeno 5 volte a settimana ti porta alla maestria!",
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/b6ebe69212335ff31e8c68399faec898376f3fa09436a5debbacbeb0ae729041?apiKey=ab14136582c84aab8af41f16349d0438&&apiKey=ab14136582c84aab8af41f16349d0438",
    },
  },
];

const SessionPlanner: React.FC = () => {
  const [selectedValue, setSelectedValue] = useState<string>("");

  // Handler for radio button selection
  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  // Find the feedback content for the selected option
  const selectedOption = sessionOptions.find(
    (option) => option.value === selectedValue
  );

  return (
    <Layout stepsPage={true}>
      {/* Stepper */}
      <Fade in={true}>
        <div>
          <Stepper activeStep={1} onBack={() => console.log("Go back")} />
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
              title="Quante sessioni di studio vuoi organizzare in una settimana?"
              subtitle="Quante volte pensavi di dedicarti a studiare la chitarra durante la settimana"
            />
          </div>
        </Fade>

        {/* Options to select */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-[650px] w-full">
          {/* CreativeRadio */}
          {sessionOptions.map((sessionOption) => (
            <Grow
              key={sessionOption.value}
              in={true}
              style={{
                transformOrigin: "center center",
                transitionDelay: "50ms",
              }}
            >
              <div>
                <CreativeRadio
                  imageSrc={sessionOption.imageSrc}
                  altText={sessionOption.altText}
                  name={sessionOption.name}
                  value={sessionOption.value}
                  checked={selectedValue === sessionOption.value}
                  onChange={handleRadioChange}
                />
              </div>
            </Grow>
          ))}
        </div>

        {/* Button */}
        <Grow in={true}>
          <div>
            <Button
              size="large"
              variant="contained"
              color="primary"
              className="max-w-full w-[220px]"
              disabled={!selectedOption}
            >
              <Typography variant="button-l">Continua</Typography>
            </Button>
          </div>
        </Grow>

        {selectedOption && (
          <Grow
            in={!!selectedOption} // Ensure it's a boolean
            style={{
              transformOrigin: "top center",
              transitionDelay: "125ms",
            }}
          >
            <div>
              <OptionSelectedFeedback
                imageSrc={selectedOption.feedback.imageSrc}
                text={selectedOption.feedback.text}
                boxClassName="bg-paper"
              />
            </div>
          </Grow>
        )}
      </section>
      <BackgroundWaves wave="onboardingSteps" />
    </Layout>
  );
};

export default SessionPlanner;
