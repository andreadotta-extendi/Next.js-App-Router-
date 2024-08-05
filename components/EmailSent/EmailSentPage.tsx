/**
 * This code was generated by Builder.io.
 */
import React from "react";
import Header from "../Layout/Header";
import EmailSentContent from "./EmailSentContent";
import BackgroundWaves from "../Layout/BackgroundWaves";

const EmailSentPage: React.FC = () => {
  return (
    <main className="flex flex-col h-screen">
      <Header leftButton={false} rightButton={false} />
      <main className="flex flex-col justify-center items-center py-20 px-4 bg-background h-screen">
        <section className="flex z-10 flex-col self-center max-w-[600px] px-6 py-8 md:px-16 md:py-12 rounded-xl bg-neutral-900">
          <EmailSentContent />
          </section>
          <BackgroundWaves />
        </main>
    </main>
  );
};

export default EmailSentPage;
