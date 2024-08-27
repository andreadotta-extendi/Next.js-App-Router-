/**
 * This code was generated by Builder.io.
 */
import React from "react";
import LessonList from "./LessonList";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Typography } from "@mui/material";
import ModalDescription from "./ModalDescription";
import ModalMetadata from "./ModalMetadata";
import { CancelRounded, PlayArrowRounded } from "@mui/icons-material";
import ModalVideo from "./ModalVideo";

interface ModalDetailsProps {
  title: string;
  description: string;
  videoUrl: string;
  logoUrl: string;
  lessonCount: number;
  duration: string;
  level: string;
  genre: string;
  progressValue: number;
  status: 'completed' | 'uncompleted';
  instructor: {
    name: string;
    avatarUrl: string;
  };
}


const ModalDetails: React.FC<ModalDetailsProps> = ({
  title,
  description,
  lessonCount,
  duration,
  level,
  progressValue,
  genre,
  instructor,
  status,
  videoUrl,
}) => {
  return (
      <Dialog maxWidth="md" className="bg-paper" open>
        <DialogTitle className="flex justify-between">
          <Typography variant="h5" component="h5" className="text-text-primary">{title}</Typography>
          <CancelRounded className="text-action-divider" />
        </DialogTitle>
        <DialogContent>
          <ModalVideo videoUrl={videoUrl} />
          <Grid container spacing={4}>
            <Grid item md={8}>
              <ModalDescription description={description} progressValue={progressValue}/>
              <LessonList lessonCount={lessonCount} status={status} />
            </Grid>
            <Grid item md={4}>
              <ModalMetadata
                lessonCount={lessonCount}
                level={level}
                genre={genre}
                duration={duration}
                instructor={instructor}
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
