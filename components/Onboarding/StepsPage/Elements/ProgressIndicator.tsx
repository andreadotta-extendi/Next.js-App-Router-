import React from "react";
import MobileStepper from "@mui/material/MobileStepper";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";

interface ProgressIndicatorProps {
  steps: number;
  currentStep: number;
}

const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({
  steps,
  currentStep,
}) => {
  const theme = useTheme(); // Accessing the default theme colors

  return (
    <Box sx={{ width: "100%" }}>
      <MobileStepper
        variant="dots"
        steps={steps}
        position="static"
        activeStep={currentStep - 1} // 0-indexed in MUI
        nextButton={null}
        backButton={null}
      />
    </Box>
  );
};

export default ProgressIndicator;
