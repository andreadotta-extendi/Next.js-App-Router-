/**
 * This code was generated by Builder.io.
 */
import { Button } from "@mui/material";
import React from "react";

type AuthLayoutProps = {
  children: React.ReactNode;
  title: string;
  subtitle: string;
};

const AuthLayout: React.FC<AuthLayoutProps> = ({
  children,
  title,
  subtitle,
}) => {
  return (
    <section className="">
      <div className="flex flex-col w-full text-center max-md:max-w-full">
        <div className="flex flex-col items-start w-full max-md:max-w-full">
          <h1 className="text-3xl font-semibold leading-10 text-zinc-200 max-md:max-w-full">
            {title}
          </h1>
          <p className="mt-2 text-lg leading-6 text-gray-400 max-md:max-w-full">
            {subtitle}
          </p>
        </div>
      </div>
      {children}
    </section>
  );
};

export default AuthLayout;
