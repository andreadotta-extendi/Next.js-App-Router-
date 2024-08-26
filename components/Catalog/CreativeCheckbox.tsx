"use client";
import { FormControl } from "@/app/mui-components";
import { InputLabel, Typography } from "@mui/material";
import React, { ChangeEvent } from "react";

interface CreativeCheckboxProps {
  imageSrc: string;
  altText: string;
  name: string;
  value?: string;
}

const CreativeCheckbox: React.FC<CreativeCheckboxProps> = ({
  imageSrc,
  altText,
  name,
  value,
}) => {
  const [isChecked, setIsChecked] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  return (
    <div
      className={`w-full p-2 rounded-lg border ${
        isChecked
          ? "border-primary-main bg-action-focus"
          : "border-action-divider bg-paper"
      }`}
    >
      <FormControl className="w-full creative-checkbox">
        <label className="text-center flex flex-col items-center">
          <input
            type="checkbox"
            value={value}
            checked={isChecked}
            onChange={handleChange}
          />
          <img
            loading="lazy"
            src={imageSrc}
            alt={altText}
            className="object-contain aspect-square w-[72px]"
          />
          <InputLabel className={`mt-2 ${isChecked ? "text-primary-main" : "text-white"}`}>
            <Typography variant="s1">{name}</Typography>
          </InputLabel>
        </label>
      </FormControl>
    </div>
  );
};

export default CreativeCheckbox;
