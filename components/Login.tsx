"use client"
import React from 'react';
import { Button, TextField, Typography, Container, Box, InputLabel,  } from '@mui/material';
import styled from 'styled-components';
const Login = () => {
  return (
    <Container maxWidth="xs" className="mt-10 p-6 bg-white rounded-lg shadow-lg">
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography variant="h5" className="mb-6">Login</Typography>

        <InputLabel>Email Address</InputLabel>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          name="email"
          autoComplete="email"
          autoFocus
          placeholder='Email Address'
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
}

export default Login;


const Text = styled(TextField, 'rounded-lg')