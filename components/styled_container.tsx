import React from "react";
import { Container, ContainerProps, styled } from "@mui/material";

const CustomContainer = styled(Container)({
  paddingRight: '64px !important',
  paddingLeft: '64px !important'
})

const StyledContainer = ({ children, ...props }: ContainerProps) => {
  return <CustomContainer {...props}>{children}</CustomContainer>;
};

export default StyledContainer;
