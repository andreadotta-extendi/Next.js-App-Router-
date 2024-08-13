/**
 * This code was generated by Builder.io.
 */
import React from "react";
import LoginForm from "./LoginForm";
import Footer from "./Footer";
import Layout from "@/components/Layout/Layout";
import Header from "@/components/Layout/Header";
import BackgroundWaves from "@/components/Layout/BackgroundWaves";
import BottomSection from "@/components/Layout/BottomSection";

const LoginPage: React.FC = () => {
  return (
    <Layout>
      <main className="flex flex-col lg:justify-center items-center py-16 px-4" style={{height: `calc(100vh - 100px)`}}>
        <div className="flex z-10 flex-col self-center max-w-[600px] w-full gap-4">
          <LoginForm />
          <BottomSection title="Non hai un account" buttontext="Registrati" />
          <Footer />
        </div>
        <BackgroundWaves wave="login"  />
      </main>
    </Layout>
  );
};

export default LoginPage;
