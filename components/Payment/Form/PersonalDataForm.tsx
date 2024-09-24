import { TextField, Typography } from "@mui/material";
import React from "react";

const PersonalDataForm: React.FC = () => {
  return (
    <section className="flex gap-4 items-start w-full max-md:max-w-full">
      <div className="flex flex-col flex-1 shrink justify-center p-6 w-full rounded-2xl basis-0 bg-paper">
        <Typography variant="h3" component="h3" className="text-text-primary">
          Dati personali
        </Typography>
        <form className="flex flex-col mt-6 w-full max-md:max-w-full">
          <TextField
            placeholder="La tua migliore e-mail"
            variant="outlined"
            size="medium"
            className="w-full"
            InputProps={{}}
            label="E-mail"
            id="email"
          />
        </form>
      </div>
    </section>
  );
};

export default PersonalDataForm;
