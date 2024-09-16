import React from "react";
import Layout from "../Shared/ui/Layout";
import { Box, Typography } from "@mui/material";
import Successful from "./Completed/Successful";
import SignUpForm from "./Completed/Form/SignUpForm";

const SubscriptionPage: React.FC = () => {
  return (
    <Layout>
      <div className="relative space-y-8 py-6">
        <span className="text-center mb-8 space-y-2">
          <Typography variant="h1" component="h1">
            Completa registrazione
          </Typography>
          <Typography variant="s1" component="p" color="textSecondary">
            Inserisci il tuo nome e password per concludere la registrazione del
            tuo account
          </Typography>
        </span>
        <div className="w-full max-w-[600px] mx-auto space-y-2">
          <Box
            className="border border-neutral-main bg-paper rounded-2xl"
            padding={3}
          >
            <Successful
              title="Ordine Completato"
              imgSrc="assets/checkout/success-green.svg"
              description="Ti è stata inviata una mail con i dettagli del tuo ordine"
              alt="Completato"
            />
          </Box>
          <SignUpForm />
        </div>
      </div>
    </Layout>
  );
};

export default SubscriptionPage;
