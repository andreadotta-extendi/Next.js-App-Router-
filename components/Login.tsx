"use client";
import React from "react";
import {
  Button,
  Container,
  Box,
  InputLabel,
} from "@mui/material";
import StyledTypography from './styled_typography';
import StyledContainer from './styled_container';
import StyledTextField from './styled_textfield'


const Login = () => {
  return (
    <Container maxWidth="xs">
      <Box display="flex" flexDirection="column" alignItems="center">
        <StyledTypography variant="h5">Login</StyledTypography>
        <StyledContainer>
        <InputLabel className="mt-2">Email Address</InputLabel>
        <StyledTextField
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
        <InputLabel className="mt-2">Password</InputLabel>
        <StyledTextField
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
          disabled
          size='large'
        >
          Sign In
        </Button>
        </StyledContainer>
      </Box>
    </Container>
  );
};

export default Login;
