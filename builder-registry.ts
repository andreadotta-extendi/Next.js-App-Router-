"use client";
import { builder, Builder, withChildren } from "@builder.io/react";
import {
  Button,
  Checkbox,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Input,
  Link,
  SvgIcon,
  TextField,
} from "./app/mui-components";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.registerComponent(Button, {
  name: "Button",
});

Builder.registerComponent(withChildren(Checkbox), {
  name: "Checkbox",
  inputs: [
    {
      name: "checked",
      type: "boolean",
    },
    {
      name: "checkedIcon",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
    {
      name: "classes",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Partial<CheckboxClasses>",
      },
    },
    {
      name: "color",
      type: "string",
      meta: {
        ts: 'OverridableStringUnion<"primary" | "secondary" | "error" | "info" | "success" | "warning" | "default", CheckboxPropsColorOverrides>',
      },
    },
    {
      name: "disabled",
      type: "boolean",
    },
    {
      name: "disableRipple",
      type: "boolean",
    },
    {
      name: "icon",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
    {
      name: "id",
      type: "string",
    },
    {
      name: "indeterminate",
      type: "boolean",
    },
    {
      name: "indeterminateIcon",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
    {
      name: "inputProps",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "InputHTMLAttributes<HTMLInputElement>",
      },
    },
    {
      name: "inputRef",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Ref<HTMLInputElement>",
      },
    },
    {
      name: "required",
      type: "boolean",
    },
    {
      name: "size",
      type: "string",
      meta: {
        ts: 'OverridableStringUnion<"small" | "medium" | "large", CheckboxPropsSizeOverrides>',
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
      name: "value",
      type: "string",
      meta: {
        ts: "unknown",
      },
    },
  ],
});

Builder.registerComponent(withChildren(FormControlLabel), {
  name: "FormControlLabel",
  inputs: [
    {
      name: "checked",
      type: "boolean",
    },
    {
      name: "classes",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Partial<FormControlLabelClasses>",
      },
    },
    {
      name: "componentsProps",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "{ typography?: any; }",
      },
    },
    {
      name: "control",
      type: "string",
      meta: {
        ts: "ReactElement<any, any>",
      },
      required: true,
    },
    {
      name: "disabled",
      type: "boolean",
    },
    {
      name: "disableTypography",
      type: "boolean",
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
      name: "label",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
      required: true,
    },
    {
      name: "labelPlacement",
      type: "string",
      enum: ["bottom", "end", "start", "top"],
    },
    {
      name: "name",
      type: "string",
    },
    {
      name: "required",
      type: "boolean",
    },
    {
      name: "slotProps",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "{ typography?: any; }",
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
      name: "value",
      type: "string",
      meta: {
        ts: "unknown",
      },
    },
  ],
});

Builder.registerComponent(FormHelperText, {
  name: "FormHelperText",
});

Builder.registerComponent(FormLabel, {
  name: "FormLabel",
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

Builder.registerComponent(Link, {
  name: "Link",
});

Builder.registerComponent(SvgIcon, {
  name: "SvgIcon",
});

Builder.registerComponent(withChildren(TextField), {
  name: "TextField",
  inputs: [
    {
      name: "autoComplete",
      type: "string",
    },
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
        ts: "Partial<TextFieldClasses>",
      },
    },
    {
      name: "color",
      type: "string",
      meta: {
        ts: 'OverridableStringUnion<"primary" | "secondary" | "error" | "info" | "success" | "warning", TextFieldPropsColorOverrides>',
      },
    },
    {
      name: "disabled",
      type: "boolean",
    },
    {
      name: "error",
      type: "boolean",
    },
    {
      name: "FormHelperTextProps",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Partial<any>",
      },
    },
    {
      name: "fullWidth",
      type: "boolean",
    },
    {
      name: "helperText",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
    {
      name: "id",
      type: "string",
    },
    {
      name: "InputLabelProps",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Partial<any>",
      },
    },
    {
      name: "InputProps",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Partial<FilledInputProps>",
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
      name: "label",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
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
      name: "select",
      type: "boolean",
    },
    {
      name: "SelectProps",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Partial<SelectProps>",
      },
    },
    {
      name: "size",
      type: "string",
      meta: {
        ts: 'OverridableStringUnion<"small" | "medium", TextFieldPropsSizeOverrides>',
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
      meta: {
        ts: "HTMLInputTypeAttribute",
      },
    },
    {
      name: "value",
      type: "string",
      meta: {
        ts: "unknown",
      },
    },
    {
      name: "variant",
      type: "string",
      enum: ["filled"],
      required: true,
    },
  ],
});
