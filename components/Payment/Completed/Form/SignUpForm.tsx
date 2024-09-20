"use client";
import React from "react";
import {
  Button,
  FormControl,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export default function SignUpForm() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((prev) => !prev);

  const handleMouseDownPassword = (event: { preventDefault: () => any }) =>
    event.preventDefault();

  return (
    <form>
      <div className="flex flex-col p-6 w-full rounded-2xl bg-paper">
        <Typography variant="h3" className="text-text-primary">
          Dati Personali
        </Typography>

        <div className="flex flex-col gap-6 mt-6 w-full">
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
                label="Nome"
                placeholder="Il tuo nome"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Cognome"
                placeholder="Il tuo cognome"
                variant="outlined"
                fullWidth
              />
            </Grid>
          </Grid>

          <FormControl variant="outlined" fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
            <OutlinedInput
              id="password"
              type={showPassword ? "text" : "password"}
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
            <FormHelperText>Utilizza 8 caratteri e un numero</FormHelperText>
          </FormControl>
        </div>
      </div>

      <Button
        size="large"
        variant="contained"
        color="primary"
        className="mt-4 w-full"
      >
        <Typography variant="button-l">Crea Account</Typography>
      </Button>
    </form>
  );
}
