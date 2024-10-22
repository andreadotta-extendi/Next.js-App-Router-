"use client";
import React, { useState } from "react";
import Layout from "../Shared/ui/Layout";
import { Button, Typography, Card } from "@mui/material";
import CreativeRadio from "../Shared/ui/CreativeRadio";
import OptionSelectedFeedback from "../Onboarding/StepsPage/Elements/OptionSelectedFeedback";

const StudySessionPage: React.FC = () => {
  // Define the sidebar items (Not used, consider removing if unnecessary)
  //   const sidebarItems = [
  //     { label: "Overview", isActive: true },
  //     { label: "Settings", isActive: false },
  //     { label: "Activity", isActive: false },
  //   ];

  const sessionOptions = [
    {
      name: "Una volta",
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/69bd89def80efb2b72ab9fe83371820acd6488a0bc163b5293acc7fc4cb27ed8?apiKey=ab14136582c84aab8af41f16349d0438",
      altText: "una volta",
      value: "a",
      feedback: {
        text: "Molti scelgono di studiare una volta a settimana per cominciare!",
        imageSrc:
          "https://cdn.builder.io/api/v1/image/assets/TEMP/b6ebe69212335ff31e8c68399faec898376f3fa09436a5debbacbeb0ae729041?apiKey=ab14136582c84aab8af41f16349d0438",
      },
    },
    {
      name: "Due volte",
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/a3a2d3aece2819236bfc7721352a53d5f73e830095c71dc92ddd46e3beeaf423?apiKey=ab14136582c84aab8af41f16349d0438",
      altText: "due volte",
      value: "b",
      feedback: {
        text: "Due volte a settimana è ottimo per vedere progressi rapidi!",
        imageSrc:
          "https://cdn.builder.io/api/v1/image/assets/TEMP/b6ebe69212335ff31e8c68399faec898376f3fa09436a5debbacbeb0ae729041?apiKey=ab14136582c84aab8af41f16349d0438",
      },
    },
    {
      name: "Tre volte",
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/317c0c24912b4e1610c63dc42b60395eb83e3c141da91f0d429c09de36c8700e?apiKey=ab14136582c84aab8af41f16349d0438",
      altText: "tre volte",
      value: "c",
      feedback: {
        text: "Tre volte è una scelta equilibrata per perfezionarsi!",
        imageSrc:
          "https://cdn.builder.io/api/v1/image/assets/TEMP/b6ebe69212335ff31e8c68399faec898376f3fa09436a5debbacbeb0ae729041?apiKey=ab14136582c84aab8af41f16349d0438",
      },
    },
    {
      name: "Almeno 5",
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/cd7d1caaee2569dc90b2a868a6c77c4bc9910aca17f2e0eacb54f81a6500fedf?apiKey=ab14136582c84aab8af41f16349d0438",
      altText: "almeno cinque",
      value: "d",
      feedback: {
        text: "Praticare almeno 5 volte a settimana ti porta alla maestria!",
        imageSrc:
          "https://cdn.builder.io/api/v1/image/assets/TEMP/b6ebe69212335ff31e8c68399faec898376f3fa09436a5debbacbeb0ae729041?apiKey=ab14136582c84aab8af41f16349d0438",
      },
    },
  ];

  // SessionPlanner Component
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
      <>
        <Card className="bg-paper p-2 md:p-4 lg:p-8 text-center space-y-6">
          <div className="max-w-[700px] m-auto">
            <Typography variant="h5" color="textSecondary">
              Quante volte pensavi di dedicarti a studiare la chitarra durante
              la settimana?
            </Typography>
          </div>

          <div className="flex flex-col justify-center content-center items-center gap-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-[650px] w-full m-auto">
              {/* CreativeRadio */}
              {sessionOptions.map((sessionOption) => (
                <div key={sessionOption.value}>
                  <CreativeRadio
                    imageSrc={sessionOption.imageSrc}
                    altText={sessionOption.altText}
                    name={sessionOption.name}
                    value={sessionOption.value}
                    checked={selectedValue === sessionOption.value}
                    onChange={handleRadioChange}
                  />
                </div>
              ))}
            </div>

            {selectedOption && selectedValue && (
              <OptionSelectedFeedback
                boxClassName="bg-background"
                imageSrc={selectedOption.feedback.imageSrc}
                text={selectedOption.feedback.text}
              />
            )}
          </div>
        </Card>

        <div className="flex flex-1 justify-end">
          <Button size="medium" variant="contained" color="primary">
            <Typography variant="button-l">Salva modifiche</Typography>
          </Button>
        </div>
      </>
    );
  };

  return (
    <Layout isProfile={true}>
      <div className="relative">
        <div className="px-4 max-w-[1440px] m-auto">
          <div className="space-y-6">
            <Typography variant="h1" component="h1">
              Sessioni studio
            </Typography>
            {/* Render SessionPlanner */}
            <SessionPlanner />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default StudySessionPage;
