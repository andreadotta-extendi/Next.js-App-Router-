"use client";
import React from "react";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import { Box, Link, Typography } from "@mui/material";
import FormCard from "./FormCard";

const PersonalInfo: React.FC = () => {
  return (
    <FormCard title="Informazioni personali">
      <div className="sm:flex w-full flex-wrap gap-6">
        {/* Profile Picture */}
        <div className="min-w-[144px] flex flex-1 sm:flex-none flex-col items-center p-6 gap-4">
          <Avatar
            alt="Mario Rossi"
            src="/path-to-image.jpg"
            sx={{ width: 80, height: 80 }}
          />
          <Link color="primary" underline="none" href="#">
            <Typography variant="button-l">Modifica</Typography>
          </Link>
        </div>

        <Box className="w-full flex flex-col flex-1 gap-6">
          <Box className="flex flex-wrap md:flex-nowrap gap-6">
            <TextField
              label={<Typography variant="s2">Nome</Typography>}
              defaultValue="Mario"
              fullWidth
              variant="outlined"
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              label={<Typography variant="s2">Cognome</Typography>}
              defaultValue="Rossi"
              fullWidth
              variant="outlined"
              InputLabelProps={{ shrink: true }}
            />
          </Box>
          <Box className="flex flex-wrap md:flex-nowrap gap-6">
            <TextField
              label={<Typography variant="s2">Città</Typography>}
              defaultValue="Scandicci"
              fullWidth
              variant="outlined"
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              label={<Typography variant="s2">E-mail</Typography>}
              defaultValue="mario.rossi@gmail.com"
              fullWidth
              variant="outlined"
              InputLabelProps={{ shrink: true }}
            />
          </Box>
        </Box>
      </div>

      <TextField
        label={<Typography variant="s2">Biografia</Typography>}
        defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate"
        multiline
        rows={4}
        fullWidth
        variant="outlined"
        sx={{ padding: "0px !important" }}
      />
    </FormCard>
  );
};

export default PersonalInfo;
