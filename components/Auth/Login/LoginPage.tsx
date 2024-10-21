"use client";
import React from "react";
import LoginForm from "./LoginForm";
import Footer from "./Footer";
import Layout from "@/components/Layout/LayoutOunboarding";
import BackgroundWaves from "@/components/Layout/BackgroundWaves";
import BottomSection from "@/components/Layout/BottomSection";

const LoginPage: React.FC = () => {
  return (
    <Layout>
      <div className="flex z-10 flex-col self-center max-w-[600px] w-full gap-4">
        <LoginForm />
        <BottomSection title="Non hai un account" buttontext="Registrati" />
        <Footer />
      </div>
      <BackgroundWaves wave="login" />
    </Layout>
  );
};

export default LoginPage;
