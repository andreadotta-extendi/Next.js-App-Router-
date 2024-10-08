"use client";
import React from "react";
import LessonList from "./LessonList";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Typography,
} from "@mui/material";
import ModalDescription from "./ModalDescription";
import ModalMetadata from "./ModalMetadata";
import { CancelRounded, PlayArrowRounded } from "@mui/icons-material";
import ModalVideo from "./ModalVideo";
import { ModalDetailsProps } from "@/components/types/Course";

const ModalDetails: React.FC<ModalDetailsProps> = ({
  title,
  description,
  lessonCount,
  duration,
  level,
  progressValue,
  genres,
  instructors,
  status,
  videoUrl,
  dialogIsOpen,
  dialogToggle,
}) => {
  return (
    <Dialog maxWidth="md" className="bg-paper" open={dialogIsOpen}>
      <DialogTitle className="flex justify-between">
        <Typography variant="h5" component="h5" className="text-text-primary">
          {title}
        </Typography>
        <CancelRounded className="text-action-divider" onClick={dialogToggle} />
      </DialogTitle>
      <DialogContent>
        <ModalVideo videoUrl={videoUrl} />
        <Grid container spacing={4}>
          <Grid item md={8}>
            <ModalDescription
              description={description}
              progressValue={progressValue}
            />
            <LessonList lessonCount={lessonCount} status={status} />
          </Grid>
          <Grid item md={4}>
            <ModalMetadata
              lessonCount={lessonCount}
              level={level}
              genres={genres}
              duration={duration}
              instructors={instructors}
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button
          size="medium"
          variant="contained"
          color="primary"
          className="self-stretch my-auto"
        >
          <PlayArrowRounded /> Guarda ora
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ModalDetails;
