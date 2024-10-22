"use client";
import React, { useState } from "react";
import {
  Button,
  Typography,
  Box,
  IconButton,
  Card,
  CardMedia,
} from "@mui/material";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import { Pencil } from "lucide-react";

interface InstrumentCardProps {
  imageSrc: string;
  name: string;
  isFavorite: boolean;
}

const InstrumentAddedCard: React.FC<InstrumentCardProps> = ({
  imageSrc,
  name,
  isFavorite: initialFavoriteState,
}) => {
  // Add local state to track the favorite status
  const [isFavorite, setIsFavorite] = useState(initialFavoriteState);

  // Handler to toggle the favorite state
  const handleFavoriteToggle = () => {
    setIsFavorite((prev) => !prev);
  };

  return (
    <Card className="flex flex-wrap items-center bg-paper radius-xl w-full lg:min-h-[120px] px-6 py-4">
      <CardMedia
        component="img"
        image={imageSrc}
        alt={`${name} instrument`}
        sx={{ width: 72, objectFit: "contain", aspectRatio: "1/1" }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          paddingLeft: 2,
        }}
      >
        <div className="flex-1">
          <Typography variant="h5">{name}</Typography>
        </div>
      </Box>
      <Box
        className="flex items-center gap-2"
        sx={{ display: "flex", alignItems: "center" }}
      >
        <Button
          variant="text"
          size="medium"
          color="primary"
          className="hidden sm:block"
        >
          <Typography variant="button-m">Modifica</Typography>
        </Button>

        <IconButton aria-label="modify" className="sm:hidden">
          <Pencil height="20px" />
        </IconButton>

        <IconButton
          aria-label="favorite"
          onClick={handleFavoriteToggle} // Add click handler here
        >
          {isFavorite ? (
            <FavoriteRoundedIcon color="error" />
          ) : (
            <FavoriteBorderRoundedIcon />
          )}
        </IconButton>
      </Box>
    </Card>
  );
};

export default InstrumentAddedCard;
