import React from "react";
import { Container, ContainerProps } from "@mui/material";

const StyledContainer = ({ children, ...props }: ContainerProps) => {
  return <Container {...props} className='!px-0'>{children}</Container>;
};

export default StyledContainer;
