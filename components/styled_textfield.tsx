import React from "react";
import { TextField, TextFieldProps } from "@mui/material";

const StyledTextField = ({  ...props }: TextFieldProps) => {
  return <TextField 
  {...props} 
  className='!mt-1 ' 
  InputProps={{
        classes: {
          root: '!rounded-lg',
        },
      }}
  />
};

export default StyledTextField;
