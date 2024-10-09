"use client";
import React, { useState } from "react";
import {
  AvatarGroup,
  Avatar as MUIAvatar,
  Chip,
  Button,
  Typography,
  Box,
  Grid,
  Stack,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
} from "@mui/material";
import InfoCard from "./InfoCard";
import { DetailEduPathProps } from "@/components/types/Course";
import { CourseData } from "@/components/types/Course";
import { CancelRounded, ListRounded } from "@mui/icons-material";

// Utility function for instructor names
const getInstructorName = (instructors: CourseData["instructors"]) => {
  if (instructors.length === 1) {
    return instructors[0].name;
  } else if (instructors.length > 1) {
    return `${instructors.length} Insegnanti`;
  }
  return "";
};

const EducationalPathDetail: React.FC<DetailEduPathProps> = ({
  title,
  level,
  instructors = [],
  description,
  requirements,
  videoCount,
}) => {
  // State for handling the instructor dialog
  const [open, setOpen] = useState(false);

  // Function to handle opening the dialog
  const handleOpen = () => {
    setOpen(true);
  };

  // Function to handle closing the dialog
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={8}>
          <Box
            component="img"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9129cd4cb7d39654955dd5cbecc405e8ba084bb488eccfb7a247a0ee0ab7d236?placeholderIfAbsent=true&apiKey=64022e778ac9432c834a77987bf09f24"
            alt={`Cover for ${title} course`}
            loading="lazy"
            className="mb-4"
            sx={{
              objectFit: "contain",
              borderRadius: 2,
              aspectRatio: "1.83",
            }}
          />
          <Grid
            container
            className="w-full rounded-2xl overflow-hidden"
            spacing={{ xs: 0, md: 2 }}
          >
            <Grid item xs={12} md={3}>
              <InfoCard
                title="Difficoltà"
                className="h-full rounded-none md:rounded-2xl border-b border-neutral-main md:border-b-0"
              >
                <Chip
                  label={level}
                  size="medium"
                  color="primary"
                  variant="filled"
                />
              </InfoCard>
            </Grid>
            <Grid item xs={12} md={3}>
              <InfoCard
                title="Numero Video"
                className="h-full rounded-none md:rounded-2xl border-b border-neutral-main md:border-b-0"
              >
                <Typography variant="body1">{videoCount}</Typography>
              </InfoCard>
            </Grid>
            <Grid item xs={12} md={6}>
              <InfoCard
                title="Insegnanti"
                className="h-full rounded-none md:rounded-2xl"
                button={
                  <Button
                    size="small"
                    className="gap-1"
                    variant="text"
                    sx={{ padding: "0 !important" }}
                    onClick={handleOpen}
                  >
                    <ListRounded />
                    <Typography variant="button-s" className="p-0">
                      Mostra tutti
                    </Typography>
                  </Button>
                }
              >
                <Box display="flex" alignItems="center">
                  <AvatarGroup max={3}>
                    {Array.isArray(instructors) && instructors.length > 0 ? (
                      instructors.map((instructor, index) => (
                        <MUIAvatar
                          key={index}
                          src={instructor.avatarUrl}
                          alt={`${instructor.name}'s avatar`}
                          sx={{
                            height: 32,
                            width: 32,
                            borderColor: "#15151A",
                          }}
                          style={{ cursor: "pointer" }}
                        />
                      ))
                    ) : (
                      <Typography variant="body2">
                        Nessun insegnante disponibile
                      </Typography>
                    )}
                  </AvatarGroup>
                  <Typography variant="body2" ml={1}>
                    {getInstructorName(instructors)}
                  </Typography>
                </Box>
              </InfoCard>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Stack spacing={2}>
            <InfoCard>
              <Typography variant="body1">{description}</Typography>
            </InfoCard>

            <InfoCard title="Requisiti">
              <Typography variant="body1">{requirements}</Typography>
            </InfoCard>

            <Button variant="contained" color="primary" fullWidth>
              <Typography variant="button-m">Accedi a tutti i corsi</Typography>
            </Button>
          </Stack>
        </Grid>
      </Grid>

      {/* Dialog for showing instructors */}
      <Dialog open={open} onClose={handleClose} fullWidth>
        <DialogTitle className="flex items-center justify-between p-6">
          Lista Insegnanti
          <IconButton aria-label="close" onClick={handleClose}>
            <CancelRounded className="text-action-divider" />
          </IconButton>
        </DialogTitle>
        <DialogContent>
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
        </DialogContent>
      </Dialog>
    </>
  );
};

export default EducationalPathDetail;
