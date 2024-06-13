import React, { ReactNode } from "react";
import { Typography, TypographyProps } from "@mui/material";
import styled from "styled-components";

// Definire PreStyledTypography usando styled-components
const PreStyledTypography = styled(Typography)`

`;

interface StyledTypographyProps extends TypographyProps {
  children: ReactNode;
}

// Componente StyledTypography che utilizza PreStyledTypography
const StyledTypography = ({ children, ...props }: StyledTypographyProps) => {
  return <PreStyledTypography {...props} className='text-red-700'>{children}</PreStyledTypography>;
};

export default StyledTypography;
