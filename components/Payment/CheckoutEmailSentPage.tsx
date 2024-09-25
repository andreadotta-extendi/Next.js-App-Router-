import React from "react";
import Layout from "../Shared/ui/Layout";
import Heading from "./Shared/Heading";
import EmailSentContent from "../Layout/EmailSentContent";
import { Box, Button, Link, Typography } from "@mui/material";

const CheckoutEmailSentPage: React.FC = () => {
  return (
    <Layout leftButtonSubNavbar>
      <div className="relative space-y-10">
        <Heading title="Registrazione completata" />
        <Box className="max-w-[600px] mx-auto px-6 py-8 md:py-12 md:px-16 bg-paper rounded rounded-2xl">
          <EmailSentContent
            imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/d0b63192e18fd0ff818c276e1056450547838217c8a2815fc993d60e80f51ad9?placeholderIfAbsent=true&apiKey=ae92917785e7425fbb91907da8ebf914"
            title="Email inviata a"
            mailfield={true}
            mail="mario.rossi@gmail.com"
            description="Ti abbiamo inviato le istruzioni per resettare la password. Se
          non trovi la mail controlla nella cartella dello spam."
            footer={
              <div className="flex flex-col mt-6 w-full">
                <Button
                  size="large"
                  variant="contained"
                  color="primary"
                  className="w-full max-md:max-w-full"
                >
                  <Typography variant="button-l">Torna al login</Typography>
                </Button>
                <div className="flex flex-wrap items-center gap-1 justify-center mt-8 w-full">
                  <small className="text-gray-400 text-body2 font-medium">
                    Non hai ricevuto niente?{" "}
                  </small>
                  <Link
                    href="#"
                    color="primary"
                    underline="none"
                    className="font-medium"
                  >
                    <small>Reinvia la mail</small>
                  </Link>
                </div>
              </div>
            }
          />
        </Box>
      </div>
    </Layout>
  );
};

export default CheckoutEmailSentPage;
