"use client"
import { Checkbox, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import React, { ChangeEvent } from "react";

interface OptionCardProps {
  imageSrc: string;
  altText: string;
  name: string;
  radioValue?: string;
}

const OptionCard: React.FC<OptionCardProps> = ({
  imageSrc,
  altText,
  name,
  radioValue,
}) => {

  const [selectedValue, setSelectedValue] = React.useState("a"); 

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <button className={`w-full p-2 rounded-lg border ${selectedValue === radioValue ? "border-primary-main bg-action-focus" : "border-action-divider bg-default"}`}>
      <div className="flex flex-row-reverse">
        <RadioGroup name="use-radio-group">
          <Radio
            checked={selectedValue === radioValue}
            onChange={handleChange}
            value={radioValue}
            name="radio-buttons"
            inputProps={{ 'aria-label': radioValue }}
            className="w-[24px] h-[24px]"
          />
          </RadioGroup>
        </div>
        <div className="flex flex-col items-center w-full text-base font-semibold whitespace-nowrap text-zinc-200">
          <img
            loading="lazy"
            src={imageSrc}
            alt={altText}
            className="object-contain aspect-square w-[72px]"
          />
          <div className="mt-2 text-wrap">{name}</div>
        </div>
    </button>
  );
};

export default OptionCard;