"use client";
import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@/app/mui-components";
import { ExpandMore } from "@mui/icons-material";
import { ModalAccordionList } from "./ModalAccordionList";

interface LessonListProps {
  lessonCount: number;
  title: string;
}

const LessonList: React.FC<LessonListProps> = ({ lessonCount, title }) => {
  const items = [
    { title: "Task 1", duration: 30, status: "completed" },
    { title: "Task 2", duration: 45, status: "uncompleted" },
    { title: "Task 3", duration: 60 },
  ];

  return (
    <Accordion className="mt-4 w-full bg-background rounded-xl border-0 shadow-none">
      <AccordionSummary
        className="gap-4"
        expandIcon={<ExpandMore color="primary" />}
      >
        <span className="w-full flex justify-between px-2">
          <Typography variant="s1">Lista lezioni</Typography>
          <Typography variant="body1" className="self-center min-h-[24px]">
            {lessonCount} video
          </Typography>
        </span>
      </AccordionSummary>
      <AccordionDetails>
        {items.map((item, index) => (
          <ModalAccordionList
            key={index} // Adding a key prop to avoid React warnings
            title={item.title}
            duration={item.duration}
            status={item.status}
            isLastItem={index === items.length - 1}
          />
        ))}
      </AccordionDetails>
    </Accordion>
  );
};

export default LessonList;
