"use client";
import React from "react";
import {
  Button,
  TextField,
  Typography,
  Container,
  Box,
  InputLabel,
  styled,
} from "@mui/material";
import StyledTypography from './styled_typography';



const Login = () => {
  return (
    <Container maxWidth="xs">
      <Box display="flex" flexDirection="column" alignItems="center">
        <StyledTypography variant="h5">Login</StyledTypography>
        <InputLabel className="mt-2">Email Address</InputLabel>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          name="email"
          autoComplete="email"
          autoFocus
          placeholder="Email Address"
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className="mt-3"
        >
          Sign In
        </Button>
      </Box>
    </Container>
  );
};

export default Login;
