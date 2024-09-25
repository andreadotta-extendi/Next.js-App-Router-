import React from "react";
import Layout from "../Shared/ui/Layout";
import { Box, Button, Typography } from "@mui/material";
import Successful from "./Shared/Feedback";
import SignUpForm from "./Completed/Form/SignUpForm";
import Heading from "./Shared/Heading";

const PaymentConfirmedPage: React.FC = () => {
  const isUserRegistered = true; // Set to false if the user is not registered

  return (
    <Layout>
      <div className="relative space-y-8 py-6">
        <Heading
          title={isUserRegistered ? "Esito Ordine" : "Completa registrazione"}
          subtitle={
            isUserRegistered
              ? undefined
              : "Inserisci il tuo nome e password per concludere la registrazione del tuo account"
          }
        />
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
          {isUserRegistered ? (
            <Button
              variant="contained"
              color="primary"
              size="large"
              className="w-full"
            >
              <Typography variant="button-l">Vai alla tua dashboard</Typography>
            </Button>
          ) : (
            <SignUpForm />
          )}
        </div>
      </div>
    </Layout>
  );
};

export default PaymentConfirmedPage;
