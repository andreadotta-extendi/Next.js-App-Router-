"use client";
import { getCardColors, getInstructorName } from "@/components/Catalog/utils";
import { AvatarProps } from "@/components/types/Avatar";
import { AvatarGroup, Avatar as MUIAvatar, Typography } from "@mui/material";
import React from "react";

const Avatar = ({ instructors, courseType, highlighted }: AvatarProps) => {
  return (
    <>
      <AvatarGroup max={3}>
        {Array.isArray(instructors) &&
          instructors.map((instructor) => (
            <MUIAvatar
              src={instructor.avatarUrl}
              alt="Avatar"
              className="mr-2"
              sx={{
                height: "32px",
                width: "32px",
                borderColor: getCardColors(courseType, highlighted)?.cardBg,
              }}
            />
          ))}
      </AvatarGroup>
      <Typography variant="body2">{getInstructorName(instructors)}</Typography>
    </>
  );
};

export default Avatar;
