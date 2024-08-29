/**
 * This code was generated by Builder.io.
 */
import React from "react";
import { Button, Chip, Avatar } from "@/app/mui-components";
import { Typography } from "@mui/material";
import { ModalMetadataProps } from "@/components/types/Course";

const ModalMetadata: React.FC<ModalMetadataProps> = ({
  lessonCount,
  level,
  genres,
  duration,
  instructors,
}) => {
  return (
    <div className="flex flex-col items-start gap-4">
      <Button
        size="small"
        variant="outlined"
        color="primary"
        className="w-full gap-2"
      >
        <img src="assets/heart.svg" alt="heart" />
        Aggiungi a preferiti
      </Button>
      <MetadataItem label="Numero video">
        {lessonCount !== undefined && (
          <Chip
            label={`${lessonCount} video${lessonCount > 1 ? "s" : ""}`}
            size="medium"
            avatar={<Avatar src="/assets/play-arrow-filled.png" />}
            sx={{
              background: "#54566870",
            }}
          />
        )}
      </MetadataItem>
      <MetadataItem label="Livello">
        <Chip
          label={level}
          size="medium"
          color="primary"
          variant="filled"
          className="self-start"
          avatar={<Avatar />}
        />
      </MetadataItem>
      <MetadataItem label="Genere">
        <span className="space-x-2">
          {Array.isArray(genres) &&
            genres.map((genre) => (
              <Chip
                label={genre}
                size="medium"
                color="default"
                variant="outlined"
                className="self-start"
              />
            ))}
        </span>
      </MetadataItem>
      <MetadataItem label="Durata">
        <Typography variant="caption-500" className="text-text-primary">
          {duration}
        </Typography>
      </MetadataItem>
      <MetadataItem label="Insegnante">
        <div className="flex gap-2 items-center text-text-primary">
          <Avatar
            src={instructor.avatarUrl}
            alt={`${instructor.name}'s avatar`}
            className="w-8 h-8"
          />
          <Typography variant="caption-500">{instructor.name}</Typography>
        </div>
      </MetadataItem>
    </div>
  );
};

interface MetadataItemProps {
  label: string;
  children: React.ReactNode;
}

const MetadataItem: React.FC<MetadataItemProps> = ({ label, children }) => {
  return (
    <div className="flex flex-col gap-2">
      <Typography
        variant="body-small-500"
        className="text-text-secondary"
        component="p"
      >
        {label}
      </Typography>
      {children}
    </div>
  );
};

export default ModalMetadata;
