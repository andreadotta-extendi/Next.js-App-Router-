import theme from "@/app/theme";
import {
  Avatar,
  AvatarGroup,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Typography,
} from "@mui/material";
import React from "react";

interface CourseCardProps {
  imageSrc?: string;
  chipLabel?: string;
  chipColor?: "primary" | "secondary" | "tertiary";
  videoCount?: number;
  title?: string;
  tags?: string[]; // Correct type definition
  instructor?: string;
  type?: "program" | "percorsi" | "serie";
}

const CourseCard: React.FC<CourseCardProps> = ({
  imageSrc,
  chipLabel,
  chipColor = "primary", // Default color if not provided
  videoCount,
  title,
  tags = [], // Default to an empty array if tags is undefined
  instructor,
  type,
}) => {
  return (
    <Card
      sx={{
        boxShadow: "none",
        backgroundColor:
          (type === "program" ? theme.palette.primary.main) ||
          (type === "percorsi" ?  theme.palette.primary.main) ||
          (type === "serie" ?  theme.palette.primary.main),
      }}
    >
      <div className="flex flex-col w-full rounded">
        <CardMedia className="relative w-full min-h-[196px]">
          <img
            loading="lazy"
            src={imageSrc}
            alt={title}
            className="object-contain z-0 flex-1 self-stretch w-full rounded-xl aspect-[1.68]"
          />
          {chipLabel && (
            <Chip
              label={chipLabel}
              size="small"
              color={chipColor}
              variant="filled"
              className="absolute top-4 left-4 min-h-[24px]"
            />
          )}
          {videoCount !== undefined && (
            <Chip
              label={`${videoCount} video${videoCount > 1 ? "s" : ""}`}
              size="medium"
              color="primary"
              variant="outlined"
              className="absolute bottom-[19px] right-[17px]"
              avatar={<Avatar />}
            />
          )}
        </CardMedia>
        <div className="flex flex-col px-4 pt-2 pb-4 w-full">
          <CardContent className="w-full">
            <Typography variant="h5" className="gap-2.5 self-stretch w-full">
              {title}
            </Typography>
            <div className="flex flex-wrap gap-2">
                <Chip
                  key="ciao"
                  label={tags}
                  size="small"
                  color="primary"
                  variant="outlined"
                  className="px-1 py-1 rounded-md border border-solid border-zinc-200 min-h-[24px]"
                />
            </div>
            <div className="flex items-center mt-4">
              <Avatar className="mr-2" />
              <Typography variant="body2">{instructor}</Typography>
            </div>
          </CardContent>
        </div>
      </div>
    </Card>
  );
};

export default CourseCard;
