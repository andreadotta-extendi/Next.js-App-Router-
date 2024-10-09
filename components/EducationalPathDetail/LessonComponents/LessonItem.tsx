"use client";
import React, { useState } from "react";
import {
  Typography,
  Chip,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
} from "@/app/mui-components";
import { CancelRounded, CheckRounded, PlayArrow } from "@mui/icons-material";
import { Box, DialogActions, Grid, IconButton, Stack } from "@mui/material";
import { CourseData } from "@/components/types/Course";

// Utility function for instructor names
const getInstructorName = (instructors: CourseData["instructors"]) => {
  if (instructors.length === 1) {
    return instructors[0].name;
  } else if (instructors.length > 1) {
    return `${instructors.length} Insegnanti`;
  }
  return "";
};

interface Instructor {
  name: string;
  avatarUrl: string;
  profession?: string;
}

interface DetailEduPathProps {
  instructors: Instructor[];
}

interface LessonItemProps extends DetailEduPathProps {
  title: string;
  duration: string;
  isWatched?: boolean;
  isLocked?: boolean;
  isJukebox?: boolean;
  imageSrc?: string;
  isCurrent?: boolean;
  // No need to redefine `instructors` as it's inherited from DetailEduPathProps
}

const LessonItem: React.FC<LessonItemProps> = ({
  title,
  duration,
  isWatched,
  isLocked,
  isJukebox,
  isCurrent,
  imageSrc,
  instructors = [],
}) => {
  // State to manage dialog visibility
  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <article className="flex gap-x-4 gap-y-2">
      <div className="relative rounded-xl bg-paper overflow-hidden w-full">
        <div
          className={`h-full w-[8px] absolute ${
            isWatched || isCurrent ? "bg-primary-dark" : "bg-neutral-main"
          } ${isLocked && "bg-paper"}`}
        />
        <div className="flex flex-col justify-start md:flex-row md:items-center w-full gap-4 p-4 pl-6">
          {isCurrent && (
            <div className="w-full md:w-auto">
              <div className="flex overflow-hidden rounded-md">
                <img
                  loading="lazy"
                  src={imageSrc}
                  alt=""
                  className="object-contain aspect-[1.68] w-[148px]"
                />
              </div>
            </div>
          )}
          <div className="flex flex-row md:flex-col flex-1 gap-2">
            <Typography
              variant="h5"
              className={`w-full ${
                isWatched || isLocked || isJukebox
                  ? "text-text-disabled"
                  : "text-primary"
              }`}
            >
              {title}
            </Typography>
            <Chip
              label={<Typography variant="caption-500">{duration}</Typography>}
              size="medium"
              variant="filled"
              className="self-start bg-neutral-main"
            />
          </div>

          {isWatched && (
            <div className="flex lg:flex-col md:justify-center items-center justify-end gap-1 text-text-disabled">
              <CheckRounded />
              <Typography variant="caption-500">Guardato</Typography>
            </div>
          )}

          {isLocked && (
            <div className="flex md:flex-col md:justify-center items-center justify-end text-text-disabled">
              <img src="assets/lessions/lock.svg" />
              <Typography variant="caption-500">
                Registrati per guardare
              </Typography>
            </div>
          )}

          {isCurrent && (
            <div className="flex flex-col my-4">
              <Button
                size="small"
                variant="contained"
                color="primary"
                className="w-full"
                onClick={handleOpenDialog} // Open dialog on click
              >
                <Typography variant="button-s">Guarda lezione</Typography>
              </Button>
              <Button
                size="small"
                variant="outlined"
                color="primary"
                className="mt-4"
              >
                <Typography variant="button-s">
                  Segna come completato
                </Typography>
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* MUI Dialog Component */}
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle className="flex items-center justify-between p-6">
          title
          <IconButton aria-label="close" onClick={handleCloseDialog}>
            <CancelRounded className="text-action-divider" />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <Grid container spacing={2}>
            <Grid item xs={12} md={8}>
              <Typography variant="body-500">
                Here is the content of the lesson, you can place a video, text,
                or anything related to the lesson.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="s2" color="textSecondary" component="p">
                Insegnante
              </Typography>
              {instructors.length > 0 ? (
                <Stack spacing={1}>
                  {instructors.map((instructor, index) => (
                    <Box
                      key={index}
                      display="flex"
                      alignItems="center"
                      className="p-6 bg-background"
                      borderRadius={3}
                    >
                      <MUIAvatar
                        src={instructor.avatarUrl}
                        alt={`${instructor.name}'s avatar`}
                        sx={{ marginRight: 1 }}
                      />
                      <div className="flex flex-col">
                        <Typography variant="s2" className="leading-none">
                          {instructor.name}
                        </Typography>
                        <Typography variant="body-500" color="textSecondary">
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
        </DialogContent>
        <DialogActions>
          <Button
            size="medium"
            color="primary"
            variant="contained"
            className="gap-2"
          >
            <PlayArrow />
            <Typography variant="button-m">Accedi a tutti i corsi</Typography>
          </Button>
        </DialogActions>
      </Dialog>
    </article>
  );
};

export default LessonItem;
