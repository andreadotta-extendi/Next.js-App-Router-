import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface FilterAccordionProps {
  title: string;
  children: React.ReactNode;
  accordionClassName?: string;
  accordionSummaryClassName?: string;
  accordionDetailsClassName?: string;
}

const FilterAccordion: React.FC<FilterAccordionProps> = ({
  title,
  children,
  accordionClassName,
  accordionSummaryClassName,
  accordionDetailsClassName,
}) => {
  return (
    <Accordion
      className={`w-full filter-accordion ${accordionClassName}`}
      sx={{ backgroundColor: "transparent" }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon color="primary" />}
        className={accordionSummaryClassName}
      >
        <Typography variant="s1" component="p">
          {title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails className={`pt-0 ${accordionDetailsClassName}`}>
        {children}
      </AccordionDetails>
    </Accordion>
  );
};

export default FilterAccordion;
