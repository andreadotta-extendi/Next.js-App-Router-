"use client";
import React from "react";
import { Box, Typography } from "@mui/material";

interface InfoCardProps {
  title: string;
  children: React.ReactNode;
}

const FormCard: React.FC<InfoCardProps> = ({ title, children }) => {
  return (
    <Box className="bg-paper rounded-xl p-8 space-y-6">
      <Typography variant="h5" fontWeight="bold" color="textSecondary">
        {title}
      </Typography>
      <Box className="flex flex-wrap gap-6">{children}</Box>
    </Box>
  );
};

export default FormCard;
