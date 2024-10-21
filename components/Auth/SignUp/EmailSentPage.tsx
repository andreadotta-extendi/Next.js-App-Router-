"use client";
import React from "react";
import { Button, Link } from "@mui/material";
import EmailSentContent from "@/components/Layout/EmailSentContent";
import BackgroundWaves from "@/components/Layout/BackgroundWaves";
import Layout from "@/components/Layout/LayoutOunboarding";

const EmailSentPage: React.FC = () => {
  return (
    <Layout>
      <section className="flex z-10 flex-col self-center max-w-[600px] px-6 py-8 md:px-16 md:py-12 rounded-xl bg-paper">
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
                Torna al login
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
      </section>
      <BackgroundWaves wave="registration" />
    </Layout>
  );
};

export default EmailSentPage;
