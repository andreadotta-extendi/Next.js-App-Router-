"use client";
import React from "react";
import { TextField, Typography, Box } from "@mui/material";

interface InputFieldProps {
  label: string;
  value: string;
  multiline?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  value,
  multiline = false,
}) => {
  return (
    <Box
      sx={{ minWidth: 240, maxWidth: "100%", flex: 1, flexDirection: "column" }}
    >
      <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
        {label}
      </Typography>
      <TextField
        value={value}
        multiline={multiline}
        minRows={multiline ? 4 : 1}
        variant="outlined"
        fullWidth
        InputProps={{
          readOnly: true,
        }}
      />
    </Box>
  );
};

export default InputField;
