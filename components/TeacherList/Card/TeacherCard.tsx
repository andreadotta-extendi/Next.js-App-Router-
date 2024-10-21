"use client";
import React from "react";
import {
  Typography,
  Chip,
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
} from "@mui/material";

interface Instrument {
  name: string;
}

interface MusicianCardProps {
  name: string;
  instruments: Instrument[];
  imageUrl: string;
  onClick?: () => void; // Optional click handler
}

const MusicianCard: React.FC<MusicianCardProps> = ({
  name,
  instruments,
  imageUrl,
  onClick, // Accept the click handler as a prop
}) => {
  return (
    <Card className="bg-paper">
      <CardActionArea
        onClick={onClick}
        sx={{ display: "flex", flexDirection: "column" }}
      >
        <CardMedia
          component="img"
          loading="lazy"
          image={imageUrl}
          alt={`Portrait of ${name}`}
          sx={{ objectFit: "cover", height: 196 }} // Fixed height to maintain aspect ratio
        />
        <CardContent className="w-full flex flex-col gap-2 p-4">
          <Typography variant="h5">{name}</Typography>
          <div className="w-full flex flex-wrap gap-1">
            {instruments.map((instrument, index) => (
              <Chip
                className="bg-neutral-main"
                key={index}
                label={
                  <Typography variant="caption-500">
                    {instrument.name}
                  </Typography>
                }
                size="small"
                variant="filled"
              />
            ))}
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default MusicianCard;
