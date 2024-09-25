"use client";
import React, { useState } from "react";
import Layout from "../Shared/ui/Layout";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  IconButton,
  Chip,
  Typography,
} from "@mui/material";
import Heading from "./Shared/Heading";
import Feedback from "./Shared/Feedback";
import PaymentMethodForm from "./Form/PaymentMethodForm";
import { ExpandMore } from "@mui/icons-material";

const PaymentDeniedPage: React.FC = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  // Handle accordion expansion
  const handleAccordionChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  // Define constants for reused values
  const appliedCoupon = "SS20214";
  const subtotal = "49,80€"; // Subtotal price
  const discountPercentage = "50%"; // Discount percentage
  const discountedPrice = "24,90€"; // Discounted price
  const originalPrice = "49,80€"; // Original price

  return (
    <Layout>
      <div className="relative space-y-8 py-6">
        <Heading title="esito ordine" />
        <div className="w-full max-w-[600px] mx-auto space-y-2">
          <Box
            className="border border-neutral-main bg-paper rounded-2xl"
            padding={3}
          >
            <Feedback
              title="C’è stato un errore"
              imgSrc="assets/checkout/success-green.svg"
              description={
                <span>
                  Il pagamento con la carta non è andato a buon fine.
                  <br />
                  Prova a inserirne un’altra oppure prova un altro metodo di
                  pagamento
                </span>
              }
              alt="Completato"
              titleClassName="text-error-light"
            />
          </Box>

          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleAccordionChange("panel1")}
            className="w-full border rounded-2xl border-transparent"
          >
            <AccordionSummary
              expandIcon={<ExpandMore color="primary" />}
              aria-controls="panel1-content"
              id="panel1-header"
              className="px-6 gap-2"
            >
              <div className="flex justify-between flex-wrap gap-x-2 gap-y-1 items-center w-full">
                <Typography variant="s1" color="textPrimary">
                  Dettagli abbonamento
                </Typography>
                <Typography variant="body-small-500" color="textPrimary">
                  Trimestrale
                </Typography>
              </div>
            </AccordionSummary>

            <AccordionDetails className="px-6 pb-6">
              <Box gap={2} display="flex" flexDirection="column">
                <div>
                  <Box
                    justifyContent="space-between"
                    alignItems="center"
                    className="sm:flex"
                    gap={4}
                  >
                    <Typography
                      color="textSecondary"
                      variant="body-500"
                      className="w-full"
                      component="p"
                    >
                      Subtotale
                    </Typography>
                    <Typography
                      color="textPrimary"
                      variant="body-500"
                      component="p"
                    >
                      {subtotal} {/* Use the subtotal variable */}
                    </Typography>
                  </Box>
                </div>

                {/* Show the applied coupon block when a coupon is applied */}
                <Box>
                  <Box
                    justifyContent="space-between"
                    alignItems="center"
                    className="sm:flex mb-1"
                    gap={4}
                  >
                    <Typography
                      color="textSecondary"
                      variant="body-500"
                      className="w-full"
                    >
                      Codice sconto
                    </Typography>
                    <Typography
                      color="textPrimary"
                      variant="body-500"
                      component="p"
                    >
                      <span className="flex flex-nowrap text-nowrap">
                        {" "}
                        -{discountPercentage} ({discountedPrice}){" "}
                      </span>
                      {/* Use variables for discount */}
                    </Typography>
                  </Box>
                  <Box display="flex" alignItems="center">
                    <Chip
                      label={appliedCoupon} // Display the applied coupon code
                      size="medium"
                      variant="filled"
                      className="bg-neutral-main"
                      sx={{
                        padding: "0px !important",
                        height: "28px",
                      }}
                    />
                  </Box>
                </Box>

                <Box
                  justifyContent="space-between"
                  alignItems="center"
                  className="sm:flex"
                  columnGap={2}
                >
                  <Typography variant="body-500" color="textSecondary">
                    Totale pagamento (tasse incluse)
                  </Typography>
                  <Typography
                    variant="body-500"
                    component="p"
                    color="textPrimary"
                  >
                    {appliedCoupon ? discountedPrice : originalPrice}{" "}
                    {/* Update total based on coupon */}
                  </Typography>
                </Box>

                <Typography variant="caption-500" color="textSecondary">
                  Con questo coupon ti verrà addebitato il prezzo scontato di{" "}
                  {discountedPrice} per il primo addebito. Poi pagherai{" "}
                  {originalPrice} ogni 3 mesi.
                </Typography>
              </Box>
            </AccordionDetails>
          </Accordion>

          <PaymentMethodForm />
        </div>
      </div>
    </Layout>
  );
};

export default PaymentDeniedPage;
