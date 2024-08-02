import React from "react";
import { Button, TextField } from "@mui/material";
import ArrowBackFilled from '@mui/icons-material/ArrowBackFilled';

const PasswordResetForm: React.FC = () => {
  return (
    <form className="flex flex-col mt-12 w-full max-md:mt-10 max-md:max-w-full">
        <TextField placeholder="Inserisci la tua mail" variant="outlined" size="medium" label="Inserisci la tua mail" />
        <div className="flex flex-col mt-8 w-full max-md:max-w-full">
            <Button
            size="large"
            variant="contained"
            color="primary"
            className="w-full max-md:max-w-full"
            disabled
            >
            Invia link
            </Button>
            <Button
            size="large"
            variant="text"
            color="primary"
            className="mt-4 w-full max-md:max-w-full"
            >
                <ArrowBackFilled />
                Torna al login
            </Button>
        </div>
    </form>
    );
};

export default PasswordResetForm;