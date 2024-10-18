/**
 * This code was generated by Builder.io.
 */
import { Typography } from "@mui/material";
import React from "react";

interface OptionSelectedFeedbackProps {
  imageSrc: string;
  text: string;
  alt?: string;
  className?: string;
}

const OptionSelectedFeedback: React.FC<OptionSelectedFeedbackProps> = ({
  imageSrc,
  text,
  alt,
  className,
}) => {
  return (
    <article className="flex gap-6 items-center p-6 rounded-2xl bg-paper text-zinc-50 w-full md:w-[450px]">
      <img loading="lazy" src={imageSrc} alt={alt} className={`${className}`} />
      <Typography variant="s1" component="p" className="text-left">
        {text}
      </Typography>
    </article>
  );
};

export default OptionSelectedFeedback;
