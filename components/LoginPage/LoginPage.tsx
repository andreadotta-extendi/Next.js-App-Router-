/**
 * This code was generated by Builder.io.
 */
import React from "react";
import LoginForm from "./LoginForm";
import RegisterSection from "./RegisterSection";
import Footer from "./Footer";

const LoginPage: React.FC = () => {
  return (
    <main className="flex flex-col items-center py-20 bg-background">
      <LoginForm />
      <RegisterSection />
      <Footer />
      <div className="self-stretch mt-0 w-full bg-indigo-500 min-h-[145px] max-md:mt-0 max-md:max-w-full" />
      <div className="self-stretch mt-2 w-full bg-indigo-500 min-h-[59px] max-md:max-w-full" />
    </main>
  );
};

export default LoginPage;
