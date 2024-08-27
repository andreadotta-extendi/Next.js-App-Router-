import React from "react";
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@/app/mui-components";
import { ExpandMore } from "@mui/icons-material";
import { ModalAccordionList } from "./ModalAccordionList";
import theme from "@/app/theme";

interface LessonListProps {
  lessonCount: number;
  status: 'completed' | 'uncompleted';
}

const LessonList: React.FC<LessonListProps> = ({ lessonCount, status }) => {
  return (
    <Accordion 
      className="mt-4 w-full" 
      // sx={{ backgroundColor: theme.palette.background.default, border: 0 }}
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
        <ModalAccordionList 
          title="Reference Brit Pop - U2 Coldplay - Intro e Strofa" 
          duration={0} 
          status={status} 
        />
      </AccordionDetails>
    </Accordion>
  );
};

export default LessonList;
