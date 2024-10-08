"use client";
import { CourseCardProps } from "@/components/types/Course";
import {
  Avatar as MUIAvatar,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Typography,
  CardActionArea,
  LinearProgress,
  IconButton,
} from "@mui/material";
import React from "react";
import { getCardColors } from "../utils";
import DifficultyLevelChip from "./DifficultyLevelChip";
import Avatar from "@/components/Shared/ui/Avatar";
import { PlayArrowRounded } from "@mui/icons-material";

interface UpdatedCourseCardProps extends CourseCardProps {
  isCourseStarted?: boolean; // to indicate if the course is started
}

const CourseCard: React.FC<UpdatedCourseCardProps> = ({
  imageSrc,
  videoCount,
  coursePercentage,
  title,
  genres = [],
  instructors,
  courseType,
  level,
  highlighted, // Default to false if not provided
  isCourseStarted,
}) => {
  // Get the colors based on courseType, highlighted, and isCourseStarted
  const cardColors = getCardColors(courseType, highlighted, isCourseStarted);
  const chipTextColor = cardColors?.chipTextColor || "#E2E3E9"; // Fallback text color

  return (
    <Card
      className="min-w-[300px]"
      sx={{
        boxShadow: "none",
        backgroundColor: cardColors?.cardBg, // Apply card background color
        color: cardColors?.textColor, // Apply text color for the whole card
      }}
    >
      <CardActionArea className="flex flex-col w-full rounded">
        <div className="relative w-full">
          <CardMedia
            component="img"
            image={imageSrc}
            alt={title}
            className="object-cover relative w-full h-[196px]"
          />
          {!isCourseStarted && courseType && (
            <Chip
              label={
                <Typography variant="caption-500">{courseType}</Typography>
              }
              size="small"
              variant="filled"
              className="absolute top-4 left-4 min-h-[24px]"
              sx={{
                backgroundColor: cardColors?.chipBg, // Apply chip background color
                color: chipTextColor, // Apply chip text color
              }}
            />
          )}
          {!isCourseStarted && videoCount !== undefined && (
            <Chip
              label={`${videoCount} video${videoCount > 1 ? "s" : ""}`}
              size="medium"
              className="absolute top-[16px] right-[17px] bg-neutral-main"
              avatar={<MUIAvatar src="/assets/play-arrow-filled.png" />}
            />
          )}
          {isCourseStarted && coursePercentage !== undefined && (
            <Chip
              label={`${coursePercentage}%`}
              size="medium"
              className="absolute top-[16px] right-[17px] bg-neutral-main"
              sx={{ padding: "0", height: "30px" }}
            />
          )}
        </div>
        <CardContent
          className="w-full space-y-2"
          style={{
            color: cardColors?.textColor, // Apply text color to the card content
          }}
        >
          <div className="flex items-center gap-4">
            <Typography
              variant="h5"
              color={cardColors?.textColor} // Apply text color to the title
              className="gap-2.5 self-stretch w-full my-auto"
            >
              {title}
            </Typography>
            {isCourseStarted && (
              <IconButton
                size="medium"
                color="primary"
                className="button-icon-contained button-icon-primary h-[44px] px-2"
                sx={{ width: "44px !important" }}
              >
                <PlayArrowRounded />
              </IconButton>
            )}
          </div>

          {isCourseStarted ? (
            // Show progress bar if course is started
            <div className="py-2">
              <LinearProgress
                className="mt-2 h-[8px] bg-neutral-main"
                variant="determinate"
                value={coursePercentage || 0} // Reflect actual progress
                sx={{ backgroundColor: "#E2E3E9" }}
              />
            </div>
          ) : (
            // Show difficulty chip, genres, and instructor avatar if course hasn't started
            <>
              <div className="flex flex-wrap gap-1">
                <DifficultyLevelChip
                  courseType={courseType}
                  level={level}
                  highlighted={highlighted} // Pass highlighted status
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
                        color: chipTextColor, // Apply text color for genre chip
                        borderColor: chipTextColor, // Apply border color for genre chip
                      }}
                    />
                  ))}
              </div>
              <div className="flex items-center mt-4">
                <Avatar
                  instructors={instructors}
                  courseType={courseType}
                  highlighted={highlighted} // Pass highlighted status
                />
              </div>
            </>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CourseCard;
