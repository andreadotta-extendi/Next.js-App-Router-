import React from "react";
import { Typography, TypographyProps} from "@mui/material";

const StyledTypography = ({ children, ...props }: TypographyProps) => {
  return <Typography {...props} className='text-red-700' variant='h1'>{children}</Typography>;
};

export default StyledTypography;
