import React from "react";
import Layout from "../Shared/ui/Layout";
import { Button, Box, Typography, Grid } from "@mui/material";
import InstrumentCard from "./StrumentsComponents/InstrumentAddedCard";
import InstrumentNotAddedCard from "./StrumentsComponents/InstrumentNotAddedCard";

const StrumentPage: React.FC = () => {
  // Define the sidebar items
  const sidebarItems = [
    { label: "Overview", isActive: true },
    { label: "Settings", isActive: false },
    { label: "Activity", isActive: false },
  ];

  interface Instrument {
    id: number;
    name: string;
    imageSrc: string;
    isFavorite: boolean;
  }

  // Added instruments
  const instruments: Instrument[] = [
    {
      id: 1,
      name: "Chitarra acustica",
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/64022e778ac9432c834a77987bf09f24/20d9caf93795be600ead0dfdecad819e8f83e0ea24948f4f0f718c499ed7af5c?apiKey=64022e778ac9432c834a77987bf09f24&",
      isFavorite: true,
    },
    {
      id: 2,
      name: "Batteria",
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/64022e778ac9432c834a77987bf09f24/36ac45e450ec62d79b855f80debe461131bfc12dd350eda3c538ef5775c628ea?apiKey=64022e778ac9432c834a77987bf09f24&",
      isFavorite: false,
    },
  ];

  // Instruments not yet added
  const notaddedinstruments = [
    {
      id: 2,
      title: "Pianoforte",
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/64022e778ac9432c834a77987bf09f24/cb1b3a041635720faab44bb8b2f222504318c493ac2e3039bc399c48e536b20a?apiKey=64022e778ac9432c834a77987bf09f24&",
    },
    {
      id: 3,
      title: "Pianoforte",
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/64022e778ac9432c834a77987bf09f24/cb1b3a041635720faab44bb8b2f222504318c493ac2e3039bc399c48e536b20a?apiKey=64022e778ac9432c834a77987bf09f24&",
    },
    {
      id: 4,
      title: "Violino",
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/64022e778ac9432c834a77987bf09f24/c8746b37e5766172376d32f5eb662841a3790d9b1cb241c7d07eaa854a4c22b1?apiKey=64022e778ac9432c834a77987bf09f24&",
    },
    {
      id: 5,
      title: "Sassofono",
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/64022e778ac9432c834a77987bf09f24/3b5f8a8ac1b1e15c804f7170f4d81ae0a667515e7dc80da4218b58971cf05b62?apiKey=64022e778ac9432c834a77987bf09f24&",
    },
    {
      id: 6,
      title: "Flauto",
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/64022e778ac9432c834a77987bf09f24/564c0f9a0e30213fcfb9070c6aab1ff7c7b39f3441c38345ebca8db47f01aa39?apiKey=64022e778ac9432c834a77987bf09f24&",
    },
  ];

  // Determine if the number of items is 5
  const isFiveItems = notaddedinstruments.length === 5;

  // If there are 5 items, use 10 columns; otherwise, use 12
  const totalColumns = isFiveItems ? 10 : 12;

  // Calculate grid size dynamically
  const gridSize = Math.max(
    2,
    Math.floor(totalColumns / notaddedinstruments.length)
  );

  return (
    <>
      <Layout isProfile={true}>
        <div className="relative">
          <div className="px-4 max-w-[1440px] m-auto">
            <div className="space-y-6">
              <Typography variant="h1" component="h1">
                Strumenti
              </Typography>

              {/* Render added instruments */}
              <Box sx={{ mt: 2 }}>
                <section className="flex flex-col gap-2">
                  {instruments.map((instrument) => (
                    <div key={instrument.id}>
                      <InstrumentCard
                        imageSrc={instrument.imageSrc}
                        name={instrument.name}
                        isFavorite={instrument.isFavorite}
                      />
                    </div>
                  ))}
                </section>
              </Box>

              <Typography variant="h4" className="mb-4 text-center">
                Vuoi aggiungere un altro strumento?
              </Typography>

              {/* Render instruments not yet added */}
              <Grid container columns={totalColumns} spacing={2}>
                {notaddedinstruments.map((notaddedinstrument) => (
                  <Grid item xs={gridSize} key={notaddedinstrument.id}>
                    <InstrumentNotAddedCard
                      title={notaddedinstrument.title}
                      imageSrc={notaddedinstrument.imageSrc}
                    />
                  </Grid>
                ))}
              </Grid>

              <div className="flex flex-1 justify-end">
                <Button
                  size="medium"
                  variant="contained"
                  color="primary"
                  disabled
                >
                  <Typography variant="button-l">Salva modifiche</Typography>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default StrumentPage;
