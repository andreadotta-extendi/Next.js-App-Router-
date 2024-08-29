import React, { ReactNode } from "react";
import { TextField, TextFieldProps } from "@mui/material";
import styled from "styled-components";

// Definire PreStyledTextField usando styled-components
const PreStyledTextField = styled(TextField)`
  /* Aggiungi i tuoi stili personalizzati qui */
`;

type StyledTextFieldProps = React.ComponentProps<typeof TextField> & {
  children?: ReactNode;
};

// Componente StyledTextField che utilizza PreStyledTextField
const StyledTextField = ({ children, ...props }: StyledTextFieldProps) => {
  return (
    <PreStyledTextField {...props} className="text-red-700">
      {children}
    </PreStyledTextField>
  );
};

export default StyledTextField;
