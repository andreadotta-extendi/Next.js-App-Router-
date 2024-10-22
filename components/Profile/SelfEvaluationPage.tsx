"use client";
import React, { useState } from "react"; // Ensure useState is imported
import Layout from "../Shared/ui/Layout";
import {
  Button,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";

const SelfEvaluationPage: React.FC = () => {
  const [expanded, setExpanded] = useState<string | false>(false); // Manage accordion state

  // Handler for accordion change
  const handleAccordionChange =
    (panel: string) =>
    (event: React.SyntheticEvent<Element, Event>, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Layout isProfile={true}>
      <div className="relative">
        <div className="px-4 max-w-[1440px] m-auto">
          <div className="space-y-6">
            <Typography variant="h1" component="h1">
              Autovalutazione
            </Typography>

            <Accordion
              expanded={expanded === "panel1"}
              onChange={handleAccordionChange("panel1")}
              className="w-full rounded-xl"
            >
              <AccordionSummary
                expandIcon={<ExpandMore color="primary" />}
                aria-controls="panel1-content"
                id="panel1-header"
                className="py-2 px-6"
              >
                <Typography variant="s2" color="textPrimary">
                  Chitarra Acustica
                </Typography>
              </AccordionSummary>
              <AccordionDetails className="px-6 pb-6">
                <Typography variant="s2" color="textSecondary">
                  Quale frase ti rappresenta di più?
                </Typography>
              </AccordionDetails>
            </Accordion>

            <div className="flex flex-1 justify-end">
              <Button
                size="medium"
                variant="contained"
                color="primary"
                disabled
              >
                <Typography variant="button-l">Salva modifiche</Typography>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SelfEvaluationPage;
