"use client";
import React from "react";
import BackgroundWaves from "@/components/Layout/BackgroundWaves";
import Layout from "@/components/Layout/LayoutOunboarding";
import SignUpForm from "./Form/SignUpForm";

const SignUpPage: React.FC = () => {
  return (
    <Layout>
      <section className="flex z-10 flex-col gap-4 self-center w-full max-w-[600px]">
        <SignUpForm />
      </section>
      <BackgroundWaves wave="registration" />
    </Layout>
  );
};

export default SignUpPage;
