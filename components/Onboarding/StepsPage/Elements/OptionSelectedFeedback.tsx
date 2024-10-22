import { Typography } from "@mui/material";
import React from "react";

interface OptionSelectedFeedbackProps {
  imageSrc: string;
  text: string;
  alt?: string;
  className?: string;
  boxClassName?: string;
}

const OptionSelectedFeedback: React.FC<OptionSelectedFeedbackProps> = ({
  imageSrc,
  text,
  alt,
  className,
  boxClassName,
}) => {
  return (
    <article
      className={`flex gap-6 items-center p-6 rounded-2xl w-full md:w-[450px] ${boxClassName}`}
    >
      <img loading="lazy" src={imageSrc} alt={alt} className={`${className}`} />
      <Typography
        variant="s1"
        component="p"
        className="text-left"
        color="contrastText"
      >
        {text}
      </Typography>
    </article>
  );
};

export default OptionSelectedFeedback;
