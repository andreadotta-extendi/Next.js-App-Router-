import { Typography } from "@mui/material";
import React from "react";

type FeedbackProps = {
  title?: string;
  description?: React.ReactNode;
  footer?: React.ReactNode;
  imgSrc?: string;
  alt?: string;
  titleClassName?: string;
};

const Feedback: React.FC<FeedbackProps> = ({
  title,
  description,
  imgSrc,
  alt,
  titleClassName = "text-success-light",
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
            className={titleClassName} // Usa la prop dinamica
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

export default Feedback;
