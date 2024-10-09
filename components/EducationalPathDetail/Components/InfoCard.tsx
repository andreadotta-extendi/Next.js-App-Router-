import { ListRounded } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
import React from "react";
import { ReactNode } from "react";

interface InfoCardProps {
  title?: string;
  children?: ReactNode;
  button?: ReactNode;
  className?: string;
}

const InfoCard: React.FC<InfoCardProps> = ({
  title,
  children,
  button,
  className,
}: InfoCardProps) => {
  return (
    <div
      className={`flex flex-col gap-2 p-6 rounded-2xl bg-paper ${className}`}
    >
      <div className="flex justify-between items-center">
        <Typography variant="s1" color="textSecondary">
          {title}
        </Typography>
        {button && button}
      </div>
      <div>{children}</div>
    </div>
  );
};

export default InfoCard;
