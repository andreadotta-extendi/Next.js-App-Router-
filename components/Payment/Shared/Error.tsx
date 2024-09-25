import { Typography } from "@mui/material";
import React from "react";

type successfulProps = {
  title?: string;
  description?: string;
  footer?: React.ReactNode;
  imgSrc?: string;
  alt?: string;
};

const Successful: React.FC<successfulProps> = ({
  title,
  description,
  imgSrc,
  alt,
}) => {
  return (
    <section>
      <div className="flex flex-col gap-4">
        <img
          loading="lazy"
          src={imgSrc}
          className="object-contain self-center w-[56px] aspect-square"
          alt={alt}
        />
        <div className="flex flex-col gap-2 w-full text-center">
          <Typography
            variant="h3"
            component="h1"
            className="text-success-light"
          >
            {title}
          </Typography>
          <Typography
            variant="body-500"
            component="p"
            className="text-gray-400"
          >
            {description}
          </Typography>
        </div>
      </div>
    </section>
  );
};

export default Successful;
