"use client";
import React from "react";
import { Typography } from "@mui/material";

export interface ReusableHeaderProps {
  title: string;
  subtitle: string;
  children?: React.ReactNode;
}

const Heading: React.FC<ReusableHeaderProps> = ({
  title,
  subtitle,
  children,
}) => {
  return (
    <div className="space-y-4 text-center">
      <Typography variant="h1" component="h1" color="textPrimary">
        {title}
      </Typography>
      <Typography variant="s1" component="h2" color="textSecondary">
        {subtitle}
      </Typography>
      {children}
    </div>
  );
};

export default Heading;
