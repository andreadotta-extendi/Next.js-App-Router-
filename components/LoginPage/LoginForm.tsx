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
    <form className='px-6 py-8 md:px-16 md:py-12 rounded-xl bg-neutral-900'>
      <div className='flex flex-col items-center gap-2 mb-12'>
        <Typography variant="h3" component="h1" className="text-zinc-200">
          Accedi a Vibly
        </Typography>
        <Typography variant="body-500" component="p" className="text-gray-400">
          Accedi al tuo account
        </Typography>
      </div>
      <div className='mb-8'>
        <div className='flex flex-col gap-5'>
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
      </div>
      <FormControlLabel
        labelPlacement="end"
        className='mt-2'
        control={<Checkbox size="small" color="primary" />} label="Remember me" />
      </div>
      <div className='flex flex-col gap-4'>
        <Button
          size="large"
          variant="contained"
          className="pb-8 whitespace-nowrap w-full"
          disabled
        >
          Accedi
        </Button>
        <Button
          size="large"
          variant="text"
          color="primary"
          className="mt-4 w-full"
        >
          Dimenticato la password?
        </Button>
      </div>
    </form>
  );
}
