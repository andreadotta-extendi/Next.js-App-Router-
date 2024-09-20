"use client";
import { FormControl } from "@/app/mui-components";
import { InputLabel, Radio, Typography } from "@mui/material";
import React from "react";

export interface CreativeRadioProps {
  imageSrc: string;
  altText: string;
  name: string;
  value: string; // Make value mandatory for proper group behavior
  checked: boolean; // Controlled checked state from parent
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void; // onChange handler passed from parent
}

const CreativeRadio: React.FC<CreativeRadioProps> = ({
  imageSrc,
  altText,
  name,
  value,
  checked,
  onChange,
}) => {
  return (
    <div className="">
      <div
        className={`w-full p-2 rounded-lg border ${
          checked
            ? "ring ring-2 ring-primary-main bg-action-focus border-transparent"
            : "border-action-divider bg-paper"
        }`}
      >
        <FormControl className="w-full cursor-pointer">
          <label className="text-center flex flex-col items-center cursor-pointer">
            <Radio
              checked={checked}
              onChange={onChange}
              value={value}
              name="radio-buttons"
              inputProps={{ "aria-label": value }}
              className="w-[24px] h-[24px] ml-auto"
            />
            <img
              loading="lazy"
              src={imageSrc}
              alt={altText}
              className="object-contain aspect-square w-[72px]"
            />
            <InputLabel
              className="mt-2 text-text-primary mb-0"
              sx={{ maxWidth: "calc(100% - 16px)" }}
            >
              <Typography variant="s2">{name}</Typography>
            </InputLabel>
          </label>
        </FormControl>
      </div>
    </div>
  );
};

export default CreativeRadio;
