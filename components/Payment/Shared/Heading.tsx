import React from "react";
import { Typography } from "@mui/material";

export interface HeaderProps {
  title: string;
  subtitle?: string;
}

const Heading: React.FC<HeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-8 space-y-2">
      <Typography variant="h1" component="h1" color="textPrimary">
        {title}
      </Typography>
      {subtitle && (
        <Typography variant="subtitle1" component="h2" color="textSecondary">
          {subtitle}
        </Typography>
      )}
    </div>
  );
};

export default Heading;
