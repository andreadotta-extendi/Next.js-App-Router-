"use client";
import React from "react";
import { Typography } from "@mui/material";
import PasswordResetForm from "./Form/PasswordResetForm";
import Layout from "@/components/Layout/LayoutOunboarding";
import BackgroundWaves from "@/components/Layout/BackgroundWaves";

const PasswordResetPage: React.FC = () => {
  return (
    <Layout>
      <section className="flex z-10 flex-col self-center max-w-[600px] px-6 py-8 md:px-16 md:py-12 rounded-xl bg-paper">
        <div className="flex flex-col text-center gap-2">
          <Typography variant="h3" component="h1" className="text-zinc-200">
            Password dimenticata?
          </Typography>
          <Typography
            variant="body-500"
            component="p"
            className="text-gray-400"
          >
            Inserisci il tuo indirizzo email e ti invieremo un link per
            resettare la tua password
          </Typography>
        </div>
        <PasswordResetForm />
      </section>
      <BackgroundWaves wave="login" />
    </Layout>
  );
};

export default PasswordResetPage;
