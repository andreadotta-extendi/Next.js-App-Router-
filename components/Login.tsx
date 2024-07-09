"use client";
import React, { useEffect, useState } from "react";
import {
  Button,
  Box,
  InputLabel,
  Container,
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
    <Container sx={{
      backgroundImage: `url('/login.png')`,     
      backgroundRepeat: 'no-repeat', 
      backgroundSize: 'cover',
      height: '100vh',
      }}>
      <Container maxWidth='sm' sx={{ gap: '8px'}}>
        <Container sx={{backgroundColor: 'white', borderRadius: '16px', paddingTop:'48px', paddingBottom:'48px'}}>
      {/* <Box display="flex" flexDirection="column" gap='8px' alignItems="center" justifyContent="center" height="100vh" > */}
         {/* <Box
      component="img"
      sx={{
        width: 300,
        height: 200,
        borderRadius: 2,
        boxShadow: 3,
      }}
      alt="logo"
      src="url('/logo.png')"
    /> */}
          <StyledTypography variant="h3">Accedi a Vibly</StyledTypography>
          <StyledTypography variant="paragraph-small" sx={{marginTop: '8px'}}>Accedi al tuo account</StyledTypography>
          <StyledContainer>
            <InputLabel sx={{margin:'24px 0 8px 0'}}>E-mail</InputLabel>
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
            <InputLabel sx={{margin:'24px 0 8px 0'}}>Password</InputLabel>
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
            <Box display="flex" flexDirection="column" marginTop='24px' gap='8px'>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              disabled={isDisabled}
              size='large'
            >
              Accedi
            </Button>
            <Button
              type="button"
              fullWidth
              variant="text"
              size='large'
            >
              <StyledTypography variant="title-cta">Dimenticato la password?</StyledTypography>
            </Button>
            </Box>
          </StyledContainer>
        </Container>
        <Container sx={{backgroundColor: 'white', borderRadius: '16px', paddingTop:'48px', paddingBottom:'48px' }}>
          {/* <Box display="flex" flexDirection="column" alignItems="center" gap="8px" justifyContent="center" bgcolor="white" sx={{ borderRadius: '16px', width: '470px', paddingTop:'48px', paddingBottom:'48px'}}> */}
          <StyledContainer sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
          <StyledTypography variant="h5">Non hai un account?</StyledTypography>
          <Button
              type="button"
              fullWidth
              variant="text"
              size='large'
            >
              <StyledTypography variant="title-cta">Crea un nuovo account</StyledTypography>
            </Button>
            </StyledContainer>
          {/* </Box> */}
        </Container>
      </Container>    
        {/* </Box> */}
        
    </Container>
  );
};

export default Login;


