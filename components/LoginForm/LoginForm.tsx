/**
 * This code was generated by Builder.io.
 */
import React from "react";
import { TextField } from "@/components/TextField";
import { Button } from "@/components/Button";
import { LoginFormButton } from "./LoginFormButton";

interface LoginFormProps {
  onSubmit: (username: string, password: string) => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(username, password);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col p-8 bg-gray-800 rounded-lg max-md:px-5 max-md:max-w-full"
    >
      <div className="flex flex-col">
        <TextField
          variant="filled"
          InputProps={{
            value: username,
            onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
              setUsername(e.target.value),
          }}
          label={
            <label
              htmlFor="username"
              className="self-stretch text-base font-semibold leading-6 text-zinc-200"
            >
              Username
            </label>
          }
        />
        <TextField
          variant="filled"
          className="mt-6"
          InputProps={{
            type: "password",
            value: password,
            onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value),
          }}
          label={
            <label
              htmlFor="password"
              className="self-stretch text-base font-semibold leading-6 text-zinc-200"
            >
              Password
            </label>
          }
        />
      </div>
      <div className="flex flex-col mt-14 whitespace-nowrap max-md:mt-10">
        <LoginFormButton variant="primary" type="submit">
          Primario
        </LoginFormButton>
        <LoginFormButton variant="secondary">Secondario</LoginFormButton>
        <LoginFormButton variant="text">Testo</LoginFormButton>
      </div>
    </form>
  );
};
