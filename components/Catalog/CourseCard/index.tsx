"use client";
import { CourseCardProps } from "@/components/types/Course";
import {
  Avatar as MUIAvatar,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Typography,
} from "@mui/material";

import React from "react";
import { getCardColors, getInstructorName } from "../utils";
import DifficultyLevelChip from "./DifficultyLevelChip";
import Avatar from "@/components/Shared/ui/Avatar";

const CourseCard: React.FC<CourseCardProps> = ({
  imageSrc,
  videoCount,
  title,
  genres = [],
  instructors,
  courseType,
  level,
  highlighted,
}) => {
  const chipTextColor = courseType === "percorsi" ? "#15151A" : "#E2E3E9";

  return (
    <Card
      className="min-w-[300px]"
      sx={{
        boxShadow: "none",
        backgroundColor: getCardColors(courseType, highlighted)?.cardBg,
      }}
    >
      <div className="flex flex-col w-full rounded">
        <div className="relative">
          <CardMedia
            component="img"
            image={imageSrc}
            alt={title}
            className="object-cover relative w-full h-[196px]"
          />
          {courseType && (
            <Chip
              label={
                <Typography variant="caption-500">{courseType}</Typography>
              }
              size="small"
              variant="filled"
              className="absolute top-4 left-4 min-h-[24px]"
              sx={{
                backgroundColor: getCardColors(courseType, highlighted)?.cardBg,
                color: chipTextColor,
              }}
            />
          )}
          {videoCount !== undefined && (
            <Chip
              label={`${videoCount} video${videoCount > 1 ? "s" : ""}`}
              size="medium"
              className="absolute bottom-[19px] right-[17px]"
              avatar={<MUIAvatar src="/assets/play-arrow-filled.png" />}
              sx={{
                background: "#54566870",
              }}
            />
          )}
        </div>
        <CardContent
          className="w-full space-y-2"
          style={{
            color: courseType === "percorsi" ? "#15151A" : "#E2E3E9",
          }}
        >
          <Typography
            variant="h5"
            color={getCardColors(courseType, highlighted)?.textColor}
            className="gap-2.5 self-stretch w-full"
          >
            {title}
          </Typography>
          <div className="flex flex-wrap gap-1">
            <DifficultyLevelChip
              courseType={courseType}
              level={level}
              highlighted={highlighted}
            />
            {Array.isArray(genres) &&
              genres.map((genre, index) => (
                <Chip
                  key={index}
                  label={
                    <Typography
                      variant="caption-500"
                      sx={{ color: chipTextColor }}
                    >
                      {genre}
                    </Typography>
                  }
                  size="small"
                  color="default"
                  variant="outlined"
                  sx={{
                    color: chipTextColor,
                    borderColor: chipTextColor,
                  }}
                />
              ))}
          </div>
          <div className="flex items-center mt-4">
            <Avatar
              instructors={instructors}
              courseType={courseType}
              highlighted={highlighted}
            />
          </div>
        </CardContent>
      </div>
    </Card>
  );
};

export default CourseCard;
