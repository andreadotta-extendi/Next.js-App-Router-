
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import React from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface FilterAccordionProps {
  title: string;
  children: React.ReactNode;
}

const FilterAccordion: React.FC<FilterAccordionProps> = ({ title,children }) => {
  return (
    <Accordion className="w-full filter-accordion px-2">
      <AccordionSummary expandIcon={<ExpandMoreIcon color="primary" />}>
        <Typography variant="s1" component="p">
          {title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails className="pt-0">
        {children}
      </AccordionDetails>
    </Accordion>
  );
};

export default FilterAccordion;
