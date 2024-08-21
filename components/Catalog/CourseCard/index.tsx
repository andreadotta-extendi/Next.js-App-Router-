'use client'
import { CourseType, DifficultyLevel } from "@/components/types/Catalog";
import { Avatar, AvatarGroup, Card, CardContent, CardMedia, Chip, Theme, Typography, useTheme } from "@mui/material";

import React from "react";
import { getCardColors } from "../utils";
import DifficultyLevelChip from "./DifficultyLevelChip";

export interface CourseCardProps {
  imageSrc?: string;
  videoCount?: number;
  title?: string;
  tags?: string[];
  avatar?: string[];
  instructor?: string;
  courseType?: CourseType;
  level?: DifficultyLevel;
  highlighted?: boolean;
}

const CourseCard: React.FC<CourseCardProps> = ({
  imageSrc,
  videoCount,
  title,
  tags = [],
  avatar = [],
  instructor,
  courseType,
  level,
  highlighted
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
              label={<Typography variant="caption-500">{courseType}</Typography>}
              size="small"
              variant="filled"
              className="absolute top-4 left-4 min-h-[24px]"
              sx={{
                backgroundColor:  getCardColors(courseType, highlighted)?.cardBg,
                color: chipTextColor,
              }}
            />
          )}
          {videoCount !== undefined && (
            <Chip
              label={`${videoCount} video${videoCount > 1 ? "s" : ""}`}
              size="medium"
              className="absolute bottom-[19px] right-[17px]"
              avatar={<Avatar src="/assets/play-arrow-filled.png" />}
              sx={{
                background: "#54566870",
              }}
            />
          )}
        </div>
        <CardContent
          className="w-full space-y-2"
          style={{ color: courseType === "percorsi" ? "#15151A" : "#E2E3E9" }}
        >
          <Typography variant="h5" color={getCardColors(courseType, highlighted)?.textColor} className="gap-2.5 self-stretch w-full">
            {title}
          </Typography>
          <div className="flex flex-wrap gap-1">
            <DifficultyLevelChip courseType={courseType} level={level} highlighted={highlighted}/>
            {Array.isArray(tags) &&
              tags.map((tag, index) => (
                <Chip
                  key={index}
                  label={<Typography variant="caption-500" sx={{color: chipTextColor}}>{tag}</Typography>}
                  size="small"
                  color="default"
                  variant="outlined"
                  sx={{ color: chipTextColor, borderColor: chipTextColor }}
                />
              ))}
          </div>
          <div className="flex items-center mt-4">
            <AvatarGroup max={2}>
              {Array.isArray(avatar) &&
                avatar.map((avatar) => (
                <Avatar src={avatar} alt="Avatar" className="mr-2" sx={{ height: "32px", width: "32px", borderColor:  getCardColors(courseType, highlighted)?.cardBg  }} />
              ))}
            </AvatarGroup>
            <Typography variant="body2">{instructor}</Typography>
          </div>
        </CardContent>
      </div>
    </Card>
  );
};

export default CourseCard;
