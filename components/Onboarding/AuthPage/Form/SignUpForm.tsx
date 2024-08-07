/**
 * This code was generated by Builder.io.
 */
"use client"
import { Button, FormControl, FormHelperText, FormLabel, IconButton, InputAdornment, InputLabel, Link, OutlinedInput, TextField, Typography } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import React from "react";


export default function SignUpForm() {

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <form className="px-6 py-8 md:px-16 md:py-12 rounded-xl bg-neutral-900">
      <div className="flex flex-col items-center justify-center gap-2">
        <Typography variant="h3" component="h1" className="text-zinc-200">
          Crea nuovo account
        </Typography>
        <Typography variant="body-500" component="p" className="text-gray-400">
          Compila i campi per creare il tuo account
        </Typography>
      </div>
      <div className="flex flex-col mt-12 w-full">
        <div className="flex flex-col gap-6 w-full">
          <div className="flex gap-6 items-start w-full">
            <TextField
              placeholder="Mario"
              variant="outlined"
              size="medium"
              className="flex-1 shrink basis-0"
              InputProps={{}}
              label="Nome"
            />
            <TextField
              placeholder="Rossi"
              variant="outlined"
              size="medium"
              className="flex-1 shrink basis-0"
              InputProps={{}}
              label="Cognome"
            />
          </div>
          <TextField
            placeholder="mario.rossi@gmail.com"
            variant="outlined"
            size="medium"
            className="w-full"
            InputProps={{}}
            label="E-mail"
          />
          <FormControl variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
              <FormHelperText id="">
                Utilizza 8 caratteri e un numero
              </FormHelperText>
          </FormControl>
        </div>
        <div className="flex flex-col gap-4 mt-8 w-full">
          <p className="inline font-semibold button-s text-zinc-200">
            Iscrivendoti accetti la {' '}
            <Link
              color="primary"
              underline="none"
              className="self-stretch my-auto"
            >
              Privacy Policy
            </Link>
            {' '} e {' '}
            <Link
              color="primary"
              underline="none"
              className="self-stretch my-auto"
            >
              Termini del servizio
            </Link>
          </p>
          <Button
            size="large"
            variant="contained"
            color="primary"
            className="mt-4 w-full max-md:max-w-full"
          >
            Iscriviti
          </Button>
        </div>
      </div>
    </form>
  );
}