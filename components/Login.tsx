"use client";
import React from "react";
import {
  Button,
  TextField,
  Typography,
  Container,
  Box,
  InputLabel,
} from "@mui/material";
import tw, { styled } from "twin.macro";

const StyledContainer = styled(Container)`
  @apply mt-10 p-6 bg-white rounded-lg shadow-lg;
`;

const StyledTextField = styled(TextField)`
  @apply rounded-lg;
`;

const StyledTypography = styled(Typography)`
  text-red-500
`;
export const Wrapper = styled.div`
  ${tw`flex flex-col w-full`}
`;

const Login = () => {
  return (
    <StyledContainer maxWidth="xs">
      <Box display="flex" flexDirection="column" alignItems="center">
        <StyledTypography variant="h5">Login</StyledTypography>
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
        >
          Sign In
        </Button>
      </Box>
    </StyledContainer>
  );
};

export default Login;
