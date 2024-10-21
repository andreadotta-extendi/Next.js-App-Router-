"use client";
import React from "react";
import { Button } from "@mui/material";
import EmailSentContent from "@/components/Layout/EmailSentContent";
import BackgroundWaves from "@/components/Layout/BackgroundWaves";
import Layout from "@/components/Layout/LayoutOunboarding";

const AccountCreatedPage: React.FC = () => {
  return (
    <Layout>
      <section className="flex z-10 flex-col self-center max-w-[600px] px-6 py-8 md:px-16 md:py-12 rounded-xl bg-paper">
        <EmailSentContent
          imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/6f1b491146bfcc29cbec4fe302dc401fa973dc97da679d040da4132ac26393dd?placeholderIfAbsent=true&apiKey=ae92917785e7425fbb91907da8ebf914"
          title="Account creato"
          mailfield={false}
          description="Il tuo account è stato creato. Adesso puoi accedere al catalogo."
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
            </div>
          }
        />
      </section>
      <BackgroundWaves wave="registration" />
    </Layout>
  );
};

export default AccountCreatedPage;
