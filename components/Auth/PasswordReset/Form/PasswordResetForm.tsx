"use client";
import React from "react";
import { Button, TextField } from "@mui/material";
import ArrowBackFilled from "@mui/icons-material/ArrowBack";

const PasswordResetForm: React.FC = () => {
  return (
    <form className="flex flex-col mt-12">
      <TextField
        placeholder="Inserisci la tua mail"
        variant="outlined"
        size="medium"
        label="Inserisci la tua mail"
      />
      <div className="flex flex-col mt-8 w-full max-md:max-w-full gap-4">
        <Button
          size="large"
          variant="contained"
          color="primary"
          className="w-full"
        >
          Invia link
        </Button>
        <Button
          size="large"
          variant="text"
          color="primary"
          className="w-full gap-2"
        >
          <ArrowBackFilled />
          Torna al login
        </Button>
      </div>
    </form>
  );
};

export default PasswordResetForm;
