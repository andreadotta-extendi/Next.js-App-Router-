"use client";
import React, { useEffect, useState } from "react";
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
  const [email, setEmail] = useState<string>()
  const [password, setPassword] = useState<string>()
  const [isDisabled, setIsDisabled] = useState(true)

  const handleEmail = (text: string) => {
    setEmail(text)
  }

  const handlePassword = (text: string) => {
    setPassword(text)
  }

  useEffect(() => {
    if(email && password) {
      setIsDisabled(false)
    } else if (!isDisabled) {
      setIsDisabled(true)
    }
  }, [email, password])


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
          onChange={(e) => handleEmail(e.target.value)}
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
          onChange={(e) => handlePassword(e.target.value)}
          name="password"
          type="password"
          id="password"
          placeholder="Password"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className="mt-3"
          disabled={isDisabled}
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
