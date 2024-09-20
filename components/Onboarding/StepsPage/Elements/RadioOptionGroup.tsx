import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React from "react";

interface RadioOptionGroupProps {
  options: string[];
  value: string; // The selected option is a string
  labelClass?: string;
  labelPlacement?: "bottom" | "end" | "start" | "top";
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void; // To handle radio selection
}

export const RadioOptionGroup: React.FC<RadioOptionGroupProps> = ({
  options,
  value, // The currently selected option
  labelPlacement,
  labelClass,
  onChange, // Handle change in the parent component
}) => {
  return (
    <FormControl className="w-full">
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        name="radio-buttons-group"
        className="space-y-4 w-full"
        value={value} // Set the selected value here
        onChange={onChange} // Attach the onChange handler
      >
        {options.map((option, index) => (
          <div
            key={index} // Use index as key or preferably a unique identifier
            className={`w-full py-3 pr-6 rounded-lg border ${
              // Change style based on whether this option is selected
              value === option
                ? "ring ring-2 ring-primary-main bg-action-focus border-transparent"
                : "border-action-divider bg-paper"
            }`}
          >
            <FormControlLabel
              value={option} // The value of the radio button should be the option itself
              control={<Radio />}
              label={option} // Show the option as the label
              labelPlacement={labelPlacement}
              className={`${labelClass} w-full`}
            />
          </div>
        ))}
      </RadioGroup>
    </FormControl>
  );
};
