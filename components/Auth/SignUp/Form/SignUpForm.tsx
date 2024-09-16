"use client";
import {
  Button,
  FormControl,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  Link,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import ArrowBackFilled from "@mui/icons-material/ArrowBack";
import React from "react";

export default function SignUpForm() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <form className="px-6 py-8 md:px-16 md:py-12 rounded-xl bg-paper">
      <div className="text-center space-y-2">
        <Typography variant="h3" component="h1" className="text-zinc-200">
          Crea nuovo account
        </Typography>
        <Typography variant="body-500" component="p" className="text-gray-400">
          Compila i campi per creare il tuo account
        </Typography>
      </div>
      <div className="flex flex-col mt-12 w-full">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <TextField
              placeholder="Mario"
              variant="outlined"
              size="medium"
              className="w-full"
              InputProps={{}}
              label="Nome"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              placeholder="Rossi"
              variant="outlined"
              size="medium"
              className="w-full"
              InputProps={{}}
              label="Cognome"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              placeholder="mario.rossi@gmail.com"
              variant="outlined"
              size="medium"
              className="w-full"
              InputProps={{}}
              label="E-mail"
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl variant="outlined" className="w-full">
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
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
              <FormHelperText id="">
                Utilizza 8 caratteri e un numero
              </FormHelperText>
            </FormControl>
          </Grid>
        </Grid>
        <div className="flex flex-col gap-4 mt-8 w-full">
          <span className="flex flex-wrap justify-center gap-2 text-text-secondary">
            <Typography variant="button-s" component="p">
              {" "}
              Iscrivendoti accetti la{" "}
            </Typography>
            <Link color="primary" underline="none" href="#" variant="button-s">
              Privacy Policy
            </Link>
            <Typography variant="button-s" component="p">
              {" "}
              e{" "}
            </Typography>
            <Link color="primary" underline="none" href="#" variant="button-s">
              Termini del servizio
            </Link>
          </span>
          <Button
            size="large"
            variant="contained"
            color="primary"
            className="mt-4 w-full"
          >
            Iscriviti
          </Button>
          <Button
            size="large"
            variant="text"
            color="primary"
            className="mt-4 w-full gap-2"
          >
            <ArrowBackFilled /> Torna al login
          </Button>
        </div>
      </div>
    </form>
  );
}
