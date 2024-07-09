"use client";
import { builder, Builder } from "@builder.io/react";
import { Button, Input } from "./app/mui-components";
import Counter from "./components/Counter/Counter";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.registerComponent(Counter, {
  name: "Counter",
  inputs: [
    {
      name: "initialCount",
      type: "number",
    },
  ],
});

Builder.registerComponent(Button, {
  name: "Button",
});

Builder.registerComponent(Input, {
  name: "Input",
  inputs: [
    {
      name: "classes",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Partial<InputClasses>",
      },
    },
    {
      name: "disableUnderline",
      type: "boolean",
    },
    {
      name: "sx",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "SxProps<Theme>",
      },
    },
  ],
});
