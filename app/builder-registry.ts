"use client";
import { builder, Builder, withChildren } from "@builder.io/react";
import { Button, Input } from "./mui-components";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);


Builder.registerComponent(withChildren(Button), {
  name: "Button",
  inputs: [
    {
      name: "children",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "any",
      },
    },
    {
      name: "classes",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Partial<ButtonClasses>",
      },
    },
    {
      name: "color",
      type: "string",
      meta: {
        ts: 'OverridableStringUnion<"primary" | "secondary" | "tertiary" , ButtonPropsColorOverrides>',
      },
    },
    {
      name: "disabled",
      type: "boolean",
    },
    {
      name: "disableElevation",
      type: "boolean",
    },
    {
      name: "disableFocusRipple",
      type: "boolean",
    },
    {
      name: "disableRipple",
      type: "boolean",
    },
    {
      name: "endIcon",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
    {
      name: "fullWidth",
      type: "boolean",
    },
    {
      name: "href",
      type: "string",
    },
    {
      name: "size",
      type: "string",
      meta: {
        ts: 'OverridableStringUnion<"small" | "medium" | "large", ButtonPropsSizeOverrides>',
      },
    },
    {
      name: "startIcon",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
    {
      name: "sx",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "SxProps<Theme>",
      },
    },
    {
      name: "variant",
      type: "string",
      enum: ["contained", "outlined", "text"],
      required: true,
    },
  ],
});

Builder.registerComponent(withChildren(Input), {
  name: "Input",
  inputs: [
    {
      name: "autoComplete",
      type: "string",
    },
    {
      name: "classes",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Partial<InputClasses>",
      },
    },
    {
      name: "className",
      type: "string",
    },
    {
      name: "color",
      type: "string",
      enum: ["error", "info", "primary", "secondary", "success", "warning"],
    },
    {
      name: "components",
      type: "string",
      meta: {
        ts: "{ Root?: ElementType<any, keyof IntrinsicElements>; Input?: ElementType<any, keyof IntrinsicElements>; }",
      },
    },
    {
      name: "componentsProps",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "{ root?: HTMLAttributes<HTMLDivElement> & InputBaseComponentsPropsOverrides; input?: InputHTMLAttributes<HTMLInputElement> & InputBaseComponentsPropsOverrides; }",
      },
    },
    {
      name: "disabled",
      type: "boolean",
    },
    {
      name: "disableInjectingGlobalStyles",
      type: "boolean",
    },
    {
      name: "disableUnderline",
      type: "boolean",
    },
    {
      name: "endAdornment",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
    {
      name: "error",
      type: "boolean",
    },
    {
      name: "fullWidth",
      type: "boolean",
    },
    {
      name: "id",
      type: "string",
    },
    {
      name: "inputComponent",
      type: "string",
      meta: {
        ts: "ElementType<InputBaseComponentProps, keyof IntrinsicElements>",
      },
    },
    {
      name: "inputProps",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "InputBaseComponentProps",
      },
    },
    {
      name: "inputRef",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Ref<any>",
      },
    },
    {
      name: "margin",
      type: "string",
      enum: ["dense", "none"],
    },
    {
      name: "maxRows",
      type: "string",
      meta: {
        ts: "string | number",
      },
    },
    {
      name: "minRows",
      type: "string",
      meta: {
        ts: "string | number",
      },
    },
    {
      name: "multiline",
      type: "boolean",
    },
    {
      name: "name",
      type: "string",
    },
    {
      name: "placeholder",
      type: "string",
    },
    {
      name: "readOnly",
      type: "boolean",
    },
    {
      name: "ref",
      type: "string",
      meta: {
        ts: "ComponentProps extends { ref?: infer RefType; } ? RefType : Ref<unknown>",
      },
    },
    {
      name: "renderSuffix",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
    {
      name: "required",
      type: "boolean",
    },
    {
      name: "rows",
      type: "string",
      meta: {
        ts: "string | number",
      },
    },
    {
      name: "size",
      type: "string",
      enum: ["medium", "small"],
    },
    {
      name: "slotProps",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "{ root?: HTMLAttributes<HTMLDivElement> & InputBaseComponentsPropsOverrides & { sx?: SxProps<Theme>; }; input?: InputHTMLAttributes<...> & ... 1 more ... & { ...; }; }",
      },
    },
    {
      name: "slots",
      type: "string",
      meta: {
        ts: "{ root?: ElementType<any, keyof IntrinsicElements>; input?: ElementType<any, keyof IntrinsicElements>; }",
      },
    },
    {
      name: "startAdornment",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
    {
      name: "style",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "CSSProperties",
      },
    },
    {
      name: "sx",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "SxProps<Theme>",
      },
    },
    {
      name: "type",
      type: "string",
    },
    {
      name: "value",
      type: "string",
      meta: {
        ts: "unknown",
      },
    },
  ],
});
