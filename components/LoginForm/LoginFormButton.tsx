/**
 * This code was generated by Builder.io.
 */
import React from "react";
import { Button } from "@/components/Button";

interface LoginFormButtonProps {
  variant: "primary" | "secondary" | "text";
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
}

export const LoginFormButton: React.FC<LoginFormButtonProps> = ({
  variant,
  children,
  type = "button",
}) => {
  return (
    <Button
      size="large"
      variant={variant}
      className={`justify-center ${variant !== "primary" ? "mt-4" : ""}`}
      type={type}
    >
      {children}
    </Button>
  );
};
