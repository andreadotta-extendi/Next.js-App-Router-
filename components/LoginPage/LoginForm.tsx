"use client"
import { Button, Checkbox, FormControl, FormControlLabel, FormLabel, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import React from "react";





export default function LoginForm() {
  
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <form className="flex flex-col px-16 py-12 max-w-full rounded-xl bg-neutral-900 w-[600px] max-md:px-5">
      <Typography variant="h3" component="h1" className="self-center leading-10 text-zinc-200">
        Accedi a Vibly
      </Typography>
      <Typography variant="body-500" component="p" className="self-center leading-6 text-gray-400">
        Accedi al tuo account
      </Typography>
      <TextField
        placeholder="Il tuo nome utente o indirizzo email"
        variant="outlined"
        size="medium"
        className="mt-12 max-md:mt-10 max-md:max-w-full"
        InputProps={{}}
        label="Nome utente o e-mail"
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
        </FormControl>
      <FormControlLabel
        labelPlacement="end"
        className="mt-4"
        control={<Checkbox size="small" color="primary" />} label="Remember me" />
      <Button
        size="large"
        variant="contained"
        className="mt-8 whitespace-nowrap max-md:max-w-full"
        disabled
      >
        Accedi
      </Button>
      <Button
        size="large"
        variant="contained"
        color="primary"
        className="mt-8 whitespace-nowrap max-md:max-w-full"
      >
        Accedi
      </Button>
      <Button
        size="large"
        variant="text"
        color="primary"
        className="mt-4 max-md:max-w-full"
      >
        Dimenticato la password?
      </Button>
    </form>
  );
}
