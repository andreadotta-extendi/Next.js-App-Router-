import React from 'react';
import { Container, ContainerProps } from '@mui/material';

const StyledContainer = ({ children, className, ...props }: ContainerProps) => {
  return (
    <Container className={`px-16 ${className}`} {...props}>
      {children}
    </Container>
  );
};

export default StyledContainer;