"use client";
import React from "react";
import { PricingPlan } from "./types";
import { Button, Chip, Typography } from "@mui/material";

const PricingCard: React.FC<PricingPlan> = ({
  title,
  price,
  originalPrice,
  description,
  buttonText,
  disclaimer,
  isPopular,
  discountCode,
  variant,
}) => {
  const cardClass =
    variant === "highlighted" ? "bg-indigo-500" : "bg-neutral-900";
  const textClass =
    variant === "highlighted" ? "text-zinc-50" : "text-gray-400";
  const titleClass =
    variant === "highlighted" ? "text-zinc-50" : "text-gray-400";
  const priceClass =
    variant === "highlighted" ? "text-zinc-50" : "text-zinc-200";
  const discountClass = variant === "highlighted" ? "bg-paper" : "bg-neutral";

  return (
    <article
      className={`flex flex-col flex-1 shrink p-8 rounded-2xl ${cardClass} max-md:px-5 h-full max-w-[600px] m-auto`}
    >
      <header className="flex flex-col justify-center w-full">
        <div className="flex flex-wrap gap-2 justify-between items-center">
          <Typography
            component="h5"
            variant="h5"
            className={`flex-1 font-bold leading-none  ${titleClass}`}
          >
            {title}
          </Typography>
          {isPopular && (
            <Chip
              label={
                variant === "highlighted"
                  ? "il più scelto"
                  : "il più conveniente"
              }
              size="medium"
              variant="filled"
              className={`font-medium ${
                variant === "highlighted"
                  ? "bg-primary-dark"
                  : "bg-success-light text-paper"
              }`}
            />
          )}
        </div>
        <div className={`flex flex-col self-start mt-4 ${textClass}`}>
          <div className="flex gap-2 items-end self-start font-bold whitespace-nowrap">
            <Typography
              variant="h1"
              component="h1"
              className={`text-5xl leading-none max-md:text-4xl ${priceClass}`}
            >
              {price}
            </Typography>
            {originalPrice && (
              <span className="text-2xl leading-none text-ellipsis line-through">
                {originalPrice}
              </span>
            )}
          </div>
          <Typography variant="body-500" component="p" className="mt-2">
            {description}
          </Typography>
        </div>
      </header>
      <footer className="flex flex-col mt-8 w-full">
        <div className="flex flex-col w-full">
          <Button
            size="large"
            variant="contained"
            color={variant === "highlighted" ? "inherit" : "primary"}
            className={`w-full ${
              variant === "highlighted" ? "text-primary-main shadow-none" : ""
            }`}
          >
            <Typography variant="button-l">{buttonText}</Typography>
          </Button>
          <Typography
            variant="body-small-500"
            component="p"
            className={`${textClass} mt-4`}
          >
            {disclaimer}
          </Typography>
        </div>
        {discountCode && (
          <Chip
            label={`CODICE SCONTO: ${discountCode}`}
            size="medium"
            variant="filled"
            className={`mt-6 w-full ${discountClass}`}
          />
        )}
      </footer>
    </article>
  );
};

export default PricingCard;
