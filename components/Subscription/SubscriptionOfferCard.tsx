"use client";
import React from "react";
import { CheckCircleRounded } from "@mui/icons-material";
import { Typography } from "@mui/material";

interface CourseSectionProps {
  title: string;
  subtitle: string;
  features: string[];
  titleColor: string;
}

const CourseSection: React.FC<CourseSectionProps> = ({
  title,
  subtitle,
  features,
  titleColor,
}) => {
  return (
    <section className="flex flex-col justify-start p-6 rounded-2xl bg-paper h-full items-stretch max-w-[600px] m-auto w-full">
      <header className="flex flex-col">
        <Typography
          className={`flex gap-6 items-start w-full text-3xl font-bold leading-none ${titleColor}`}
        >
          {title}
        </Typography>
        <Typography
          variant="body-500"
          component="p"
          color="text-secondary"
          className="text-text-secondary mt-2"
        >
          {subtitle}
        </Typography>
      </header>
      <ul className="flex flex-col mt-6 gap-4">
        {features.map((feature, index) => (
          <li key={index} className="flex gap-2 items-start">
            <CheckCircleRounded
              className={`${titleColor} h-[20px] w-[20px] mt-1`}
            />
            <Typography variant="s1" className="font-semibold">
              {feature}
            </Typography>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CourseSection;
