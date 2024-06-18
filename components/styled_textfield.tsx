import React from "react";
import { TextField, TextFieldProps, styled } from "@mui/material";

const CustomInput = styled(TextField)({
  margin: '0 !important'
})

const StyledTextField = ({ ...props }: TextFieldProps) => {
  return <CustomInput 
  {...props} 
  InputProps={{
        classes: {
          root: '!rounded-lg',
        },
      }}
  />
};

export default StyledTextField;
