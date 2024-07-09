import React from "react";
import { Typography, TypographyProps, styled } from "@mui/material";

const CustomTitle = styled(Typography)({
  // height: 'auto'
})

const StyledTypography = ({ children, ...props }: TypographyProps) => {
  return <CustomTitle {...props}>{children}</CustomTitle>;
};

export default StyledTypography;
