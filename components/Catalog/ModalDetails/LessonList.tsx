import React from "react";
import { Accordion, AccordionDetails, AccordionSummary, Divider, Typography } from "@/app/mui-components";
import { ExpandMore } from "@mui/icons-material";
import { ModalAccordionList } from "./ModalAccordionList";
import theme from "@/app/theme";

interface LessonListProps {
  lessonCount: number;
  status: 'completed' | 'uncompleted';
}

const LessonList: React.FC<LessonListProps> = ({ lessonCount, status }) => {
  console.log(theme)
  return (
    <Accordion 
      className="mt-4 w-full bg-background rounded-xl border-0 shadow-none" 
    >
      <AccordionSummary 
        className="gap-4" 
        expandIcon={<ExpandMore color="primary" />}
      >
        <span className="w-full flex justify-between px-2">
          <Typography variant="s1">
            Lista lezioni
          </Typography>
          <Typography variant="body1" className="self-center min-h-[24px]">
            {lessonCount} video
          </Typography>
        </span>
      </AccordionSummary>
      <AccordionDetails>
        <div className="py-2">
          <ModalAccordionList 
            title="Reference Brit Pop - U2 Coldplay - Intro e Strofa" 
            duration={0} 
            status={status} 
          />
          <Divider />
        </div>
      </AccordionDetails>
    </Accordion>
  );
};

export default LessonList;
