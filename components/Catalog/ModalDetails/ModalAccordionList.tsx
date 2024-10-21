"use client";
import { AddRounded, CheckCircleOutline } from "@mui/icons-material";
import { IconButton, Typography, Box, Divider } from "@mui/material";
import React from "react";

interface ModalAccordionListProps {
  title?: string;
  duration: number;
  status?: "completed" | "uncompleted" | string; // Allow other strings
  isLastItem?: boolean;
}

export const ModalAccordionList: React.FC<ModalAccordionListProps> = ({
  title,
  duration,
  status,
  isLastItem,
}) => {
  const renderStatus = () => {
    switch (status) {
      case "completed":
        return (
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            className="text-text-secondary"
          >
            <CheckCircleOutline sx={{ width: "16px", height: "16px" }} />
            <Typography variant="caption-small">Completato</Typography>
          </Box>
        );
      case "uncompleted":
        return (
          <div className="flex justify-center w-[61px]">
            <IconButton color="inherit">
              <AddRounded />
            </IconButton>
          </div>
        );
      default:
        return "";
    }
  };

  return (
    <div className="px-2">
      <Box display="flex" alignItems="center" gap={2} className="py-2">
        <Box flexGrow={1}>
          <Typography
            variant="s2"
            component="h4"
            color={status === "completed" ? "textSecondary" : "textPrimary"}
          >
            {title}
          </Typography>
          <Typography variant="caption" component="p" color="textSecondary">
            {duration} min
          </Typography>
        </Box>

        {renderStatus()}
      </Box>
      {!isLastItem && <Divider className="my-2" />}
    </div>
  );
};
