"use client";
import React from "react";
import { Switch, FormControlLabel, Typography } from "@mui/material";

interface NotificationToggleProps {
  label: string;
  checked: boolean; // Prop to control the toggle state
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void; // Callback function when toggle changes
}

const NotificationToggle: React.FC<NotificationToggleProps> = ({
  label,
  checked,
  onChange,
}) => {
  return (
    <FormControlLabel
      control={
        <Switch
          checked={checked}
          onChange={onChange}
          color="primary" // You can change this to secondary or any other color
        />
      }
      label={
        <Typography variant="button-m" sx={{ fontWeight: "600 !important" }}>
          {label}
        </Typography>
      }
    />
  );
};

export default NotificationToggle;
