import CustomMuxPlayer from "@/components/CustomMuxPlayer";
import Layout from "@/components/Shared/ui/Layout";
import {
  ArticleRounded,
  CheckRounded,
  InfoRounded,
  MoreHorizRounded,
  MusicNoteRounded,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Grid,
  IconButton,
  Stack,
  Typography,
  Avatar as MUIAvatar,
} from "@mui/material";
import React from "react";
import FileCard from "./Components/FileCard";
import VideoBox from "./Components/VideoBox";

interface Instructor {
  name: string;
  avatarUrl: string;
  profession?: string;
}

const CustomPlayerPage = () => {
  const audioFiles = [
    { name: "audioimportante.mp3" },
    { name: "audionota.mp3" },
  ];

  const documentFiles = [{ name: "ilmiodoc.pdf" }, { name: "documento.pdf" }];

  // Declare the instructors array
  const instructors: Instructor[] = [
    {
      name: "John Doe",
      avatarUrl: "/path/to/avatar1.jpg",
      profession: "Chitarra Instructor",
    },
  ];

  return (
    <Layout isLogged hasSubNavbar leftButtonSubNavbar>
      <Typography variant="h1">Teoria per chitarristi</Typography>
      <div className="flex items-center justify-between">
        <Button
          size="small"
          variant="text"
          color="primary"
          className="gap-2 px-0"
        >
          <InfoRounded className="h-[16px] w-[16px]" />
          <Typography variant="button-s">Dettaglio Percorso</Typography>
        </Button>
        <Typography variant="s2">45 lezioni</Typography>
      </div>
      <Grid container className="h-[620px]">
        <Grid item xs={12} md={9}>
          <CustomMuxPlayer
            playbackId={"DS00Spx1CV902MCtPj5WknGlR102V5HFkDe"}
            videoId={"1"}
            videoTitle={"Chitarra da zero"}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <div className="bg-paper h-full w-full rounded-xl overflow-auto p-2">
            <div className="flex flex-col gap-3">
              {/* Active box */}
              <VideoBox
                status="active"
                title="Chitarra da zero"
                image="https://cdn.pixabay.com/photo/2024/03/07/10/38/simba-8618301_1280.jpg"
                duration="4:31"
              />

              {/* Default box */}
              <VideoBox
                status="default"
                title="Chitarra da zero"
                image="https://cdn.pixabay.com/photo/2024/03/07/10/38/simba-8618301_1280.jpg"
                duration="4:31"
              />

              {/* Watched box */}
              <VideoBox
                status="seen"
                title="Chitarra da zero"
                image="https://cdn.pixabay.com/photo/2024/03/07/10/38/simba-8618301_1280.jpg"
                duration="4:31"
              />
            </div>
          </div>
        </Grid>
      </Grid>

      <Box className="rounded-lg bg-paper mb-10">
        <div className="p-6 gap-6">
          <Grid
            container
            columnSpacing={2}
            rowSpacing={{ xs: "24" }}
            columns={16}
          >
            <Grid item xs={16} md={10} lg={11} xl={12}>
              <Typography variant="h3">Chitarra da zero</Typography>
              <Typography variant="body-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </Typography>
            </Grid>
            <Grid item xs={16} md={6} lg={5} xl={4}>
              <div className="flex gap-2 mb-6">
                <Button
                  variant="outlined"
                  color="primary"
                  size="medium"
                  startIcon={<CheckRounded className="h-[16px] w-[16px]" />}
                  sx={{ padding: "14px" }}
                >
                  <Typography variant="button-m">
                    Segna come completato
                  </Typography>
                </Button>
                <IconButton
                  color="inherit"
                  size="medium"
                  sx={{ padding: "14px" }}
                >
                  <MoreHorizRounded className="h-[16px] w-[16px]" />
                </IconButton>
              </div>

              {instructors.length > 0 ? (
                <Stack spacing={1}>
                  {instructors.map((instructor, index) => (
                    <Box key={index} display="flex" alignItems="center">
                      <MUIAvatar
                        src={instructor.avatarUrl}
                        alt={`${instructor.name}'s avatar`}
                        sx={{ marginRight: 1, height: "48px", width: "48px" }}
                      />
                      <div className="flex flex-col">
                        <Typography variant="body-500" color="contrastText">
                          {instructor.name}
                        </Typography>
                        <Typography
                          variant="body-small-500"
                          color="textSecondary"
                        >
                          {instructor.profession}
                        </Typography>
                      </div>
                    </Box>
                  ))}
                </Stack>
              ) : (
                <Typography>Nessun insegnante disponibile</Typography>
              )}
            </Grid>
          </Grid>
        </div>
      </Box>

      <div className="flex flex-col gap-4">
        <Typography variant="h3">Materiale didattico</Typography>
        <Grid container className="w-full" columnSpacing={1} rowSpacing={1}>
          <Grid item xs={12} md={6}>
            <FileCard
              icon={MusicNoteRounded}
              title="Audio"
              files={audioFiles}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <FileCard
              icon={ArticleRounded}
              title="Documenti"
              files={documentFiles}
            />
          </Grid>
        </Grid>
      </div>
    </Layout>
  );
};

export default CustomPlayerPage;
