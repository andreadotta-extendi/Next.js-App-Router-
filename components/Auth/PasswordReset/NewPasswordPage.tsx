"use client";
import React from "react";
import { Typography } from "@mui/material";
import Layout from "@/components/Layout/LayoutOunboarding";
import BackgroundWaves from "@/components/Layout/BackgroundWaves";
import NewPasswordForm from "./Form/NewPasswordForm";

const NewPasswordPage: React.FC = () => {
  return (
    <Layout>
      <section className="flex z-10 flex-col self-center w-full max-w-[600px] px-6 py-8 md:px-16 md:py-12 rounded-xl bg-paper">
        <div className="flex flex-col text-center gap-2">
          <Typography variant="h3" component="h1" className="text-zinc-200">
            Resetta password
          </Typography>
          <Typography
            variant="body-500"
            component="p"
            className="text-gray-400"
          >
            Inserisci la tua nuova password
          </Typography>
        </div>
        <NewPasswordForm />
      </section>
      <BackgroundWaves wave="login" />
    </Layout>
  );
};

export default NewPasswordPage;
