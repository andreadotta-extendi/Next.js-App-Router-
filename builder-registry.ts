"use client";
import { builder, Builder, withChildren } from "@builder.io/react";
import {
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  Alert,
  AlertTitle,
  AppBar,
  Avatar,
  AvatarGroup,
  Backdrop,
  Badge,
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Breadcrumbs,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  Chip,
  CircularProgress,
  ClickAwayListener,
  Collapse,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  Drawer,
  Fab,
  Fade,
  FilledInput,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  Grid,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Input,
  InputAdornment,
  InputLabel,
  LinearProgress,
  Link,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  ListSubheader,
  Menu,
  MenuItem,
  MenuList,
  Modal,
  OutlinedInput,
  Pagination,
  PaginationItem,
  Paper,
  Popover,
  Popper,
  Portal,
  Radio,
  RadioGroup,
  Rating,
  Select,
  Skeleton,
  Slide,
  Slider,
  Snackbar,
  SnackbarContent,
  SpeedDial,
  SpeedDialAction,
  SpeedDialIcon,
  Stack,
  Step,
  StepButton,
  StepConnector,
  StepContent,
  StepIcon,
  StepLabel,
  Stepper,
  SvgIcon,
  SwipeableDrawer,
  Switch,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  Tabs,
  TabScrollButton,
  TextareaAutosize,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Toolbar,
  Tooltip,
  Typography,
  Zoom,
} from "./app/mui-components";
import Counter from "./components/Counter/Counter";
import CreativeCheckbox from "./components/Shared/ui/CreativeCheckbox";
import StyledTextField from "./app/input_typography";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

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

Builder.registerComponent(Accordion, {
  name: "Accordion",
});

Builder.registerComponent(withChildren(AccordionActions), {
  name: "AccordionActions",
  inputs: [
    {
      name: "children",
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
        ts: "Partial<AccordionActionsClasses>",
      },
    },
    {
      name: "disableSpacing",
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

Builder.registerComponent(withChildren(AccordionDetails), {
  name: "AccordionDetails",
  inputs: [
    {
      name: "children",
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
        ts: "Partial<AccordionDetailsClasses>",
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
  ],
});

Builder.registerComponent(AccordionSummary, {
  name: "AccordionSummary",
});

Builder.registerComponent(withChildren(Alert), {
  name: "Alert",
  inputs: [
    {
      name: "action",
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
        ts: "Partial<AlertClasses>",
      },
    },
    {
      name: "closeText",
      type: "string",
    },
    {
      name: "color",
      type: "string",
      meta: {
        ts: "OverridableStringUnion<AlertColor, AlertPropsColorOverrides>",
      },
    },
    {
      name: "components",
      type: "string",
      meta: {
        ts: "{ CloseButton?: ElementType<any, keyof IntrinsicElements>; CloseIcon?: ElementType<any, keyof IntrinsicElements>; }",
      },
    },
    {
      name: "componentsProps",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "{ closeButton?: any; closeIcon?: any; }",
      },
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
      name: "iconMapping",
      type: "string",
      meta: {
        ts: "Partial<Record<OverridableStringUnion<AlertColor, AlertPropsColorOverrides>, ReactNode>>",
      },
    },
    {
      name: "severity",
      type: "string",
      meta: {
        ts: "OverridableStringUnion<AlertColor, AlertPropsColorOverrides>",
      },
    },
    {
      name: "slotProps",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "{ [P in keyof K]?: K[P]; }",
      },
    },
    {
      name: "slots",
      type: "string",
      meta: {
        ts: "Slots",
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
      meta: {
        ts: 'OverridableStringUnion<"standard" | "filled" | "outlined", AlertPropsVariantOverrides>',
      },
    },
  ],
});

Builder.registerComponent(Button, {
  name: "Button",
});

Builder.registerComponent(Chip, {
  name: "Chip",
});

Builder.registerComponent(withChildren(AlertTitle), {
  name: "AlertTitle",
  inputs: [
    {
      name: "children",
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
        ts: "Partial<AlertTitleClasses>",
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
  ],
});

Builder.registerComponent(AppBar, {
  name: "AppBar",
});

Builder.registerComponent(Avatar, {
  name: "Avatar",
});

Builder.registerComponent(withChildren(AvatarGroup), {
  name: "AvatarGroup",
  inputs: [
    {
      name: "children",
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
        ts: "Partial<AvatarGroupClasses>",
      },
    },
    {
      name: "component",
      type: "string",
      meta: {
        ts: "ElementType<any, keyof IntrinsicElements>",
      },
    },
    {
      name: "componentsProps",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "{ additionalAvatar?: any; }",
      },
    },
    {
      name: "max",
      type: "number",
    },
    {
      name: "renderSurplus",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
    {
      name: "slotProps",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "{ additionalAvatar?: any; }",
      },
    },
    {
      name: "spacing",
      type: "string",
      enum: ["medium", "small"],
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
      name: "total",
      type: "number",
    },
    {
      name: "variant",
      type: "string",
      meta: {
        ts: 'OverridableStringUnion<"circular" | "rounded" | "square", AvatarGroupPropsVariantOverrides>',
      },
    },
  ],
});

Builder.registerComponent(Backdrop, {
  name: "Backdrop",
});

Builder.registerComponent(Badge, {
  name: "Badge",
});

Builder.registerComponent(BottomNavigation, {
  name: "BottomNavigation",
});

Builder.registerComponent(BottomNavigationAction, {
  name: "BottomNavigationAction",
});

Builder.registerComponent(Box, {
  name: "Box",
});

Builder.registerComponent(Breadcrumbs, {
  name: "Breadcrumbs",
});

Builder.registerComponent(Card, {
  name: "Card",
});

Builder.registerComponent(CardActionArea, {
  name: "CardActionArea",
});

Builder.registerComponent(withChildren(CardActions), {
  name: "CardActions",
  inputs: [
    {
      name: "children",
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
        ts: "Partial<CardActionsClasses>",
      },
    },
    {
      name: "disableSpacing",
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

Builder.registerComponent(CardContent, {
  name: "CardContent",
});

Builder.registerComponent(CardHeader, {
  name: "CardHeader",
});

Builder.registerComponent(CardMedia, {
  name: "CardMedia",
});

Builder.registerComponent(CircularProgress, {
  name: "CircularProgress",
  inputs: [
    {
      name: "classes",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Partial<CircularProgressClasses>",
      },
    },
    {
      name: "color",
      type: "string",
      meta: {
        ts: 'OverridableStringUnion<"primary" | "secondary" | "error" | "info" | "success" | "warning" | "inherit", CircularProgressPropsColorOverrides>',
      },
    },
    {
      name: "disableShrink",
      type: "boolean",
    },
    {
      name: "size",
      type: "string",
      meta: {
        ts: "string | number",
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
      name: "thickness",
      type: "number",
    },
    {
      name: "value",
      type: "number",
    },
    {
      name: "variant",
      type: "string",
      enum: ["determinate", "indeterminate"],
    },
  ],
});

Builder.registerComponent(ClickAwayListener, {
  name: "ClickAwayListener",
});

Builder.registerComponent(withChildren(Collapse), {
  name: "Collapse",
  inputs: [
    {
      name: "children",
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
        ts: "Partial<CollapseClasses>",
      },
    },
    {
      name: "className",
      type: "string",
    },
    {
      name: "collapsedSize",
      type: "string",
      meta: {
        ts: "string | number",
      },
    },
    {
      name: "component",
      type: "string",
      meta: {
        ts: "ElementType<TransitionProps, keyof IntrinsicElements>",
      },
    },
    {
      name: "easing",
      type: "string",
      meta: {
        ts: "any",
      },
    },
    {
      name: "in",
      type: "boolean",
    },
    {
      name: "orientation",
      type: "string",
      enum: ["horizontal", "vertical"],
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
      name: "timeout",
      type: "string",
      meta: {
        ts: "any",
      },
    },
  ],
});

Builder.registerComponent(Container, {
  name: "Container",
});

Builder.registerComponent(withChildren(Dialog), {
  name: "Dialog",
  inputs: [
    {
      name: "children",
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
        ts: "Partial<DialogClasses>",
      },
    },
    {
      name: "disableEscapeKeyDown",
      type: "boolean",
    },
    {
      name: "fullScreen",
      type: "boolean",
    },
    {
      name: "fullWidth",
      type: "boolean",
    },
    {
      name: "maxWidth",
      type: "string",
      meta: {
        ts: "any",
      },
    },
    {
      name: "open",
      type: "string",
      meta: {
        ts: "any",
      },
      required: true,
    },
    {
      name: "PaperComponent",
      type: "string",
      meta: {
        ts: "JSXElementConstructor<any>",
      },
    },
    {
      name: "PaperProps",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Partial<any>",
      },
    },
    {
      name: "scroll",
      type: "string",
      enum: ["body", "paper"],
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
      name: "TransitionComponent",
      type: "string",
      meta: {
        ts: "JSXElementConstructor<TransitionProps & { children: ReactElement<any, any>; }>",
      },
    },
    {
      name: "transitionDuration",
      type: "string",
      meta: {
        ts: "any",
      },
    },
    {
      name: "TransitionProps",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "TransitionProps",
      },
    },
  ],
});

Builder.registerComponent(withChildren(DialogActions), {
  name: "DialogActions",
  inputs: [
    {
      name: "children",
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
        ts: "Partial<DialogActionsClasses>",
      },
    },
    {
      name: "disableSpacing",
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

Builder.registerComponent(withChildren(DialogContent), {
  name: "DialogContent",
  inputs: [
    {
      name: "children",
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
        ts: "Partial<DialogContentClasses>",
      },
    },
    {
      name: "dividers",
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

Builder.registerComponent(DialogContentText, {
  name: "DialogContentText",
});

Builder.registerComponent(DialogTitle, {
  name: "DialogTitle",
});

Builder.registerComponent(Divider, {
  name: "Divider",
});

Builder.registerComponent(withChildren(Drawer), {
  name: "Drawer",
  inputs: [
    {
      name: "anchor",
      type: "string",
      enum: ["bottom", "left", "right", "top"],
    },
    {
      name: "children",
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
        ts: "Partial<DrawerClasses>",
      },
    },
    {
      name: "elevation",
      type: "number",
    },
    {
      name: "ModalProps",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Partial<any>",
      },
    },
    {
      name: "open",
      type: "boolean",
    },
    {
      name: "PaperProps",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Partial<any>",
      },
    },
    {
      name: "SlideProps",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Partial<SlideProps>",
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
      name: "transitionDuration",
      type: "string",
      meta: {
        ts: "any",
      },
    },
    {
      name: "variant",
      type: "string",
      enum: ["permanent", "persistent", "temporary"],
    },
  ],
});

Builder.registerComponent(Fab, {
  name: "Fab",
});

Builder.registerComponent(withChildren(Fade), {
  name: "Fade",
  inputs: [
    {
      name: "appear",
      type: "boolean",
    },
    {
      name: "children",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactElement<any, any>",
      },
    },
    {
      name: "easing",
      type: "string",
      meta: {
        ts: "any",
      },
    },
    {
      name: "in",
      type: "boolean",
    },
    {
      name: "ref",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Ref<unknown>",
      },
    },
    {
      name: "timeout",
      type: "string",
      meta: {
        ts: "any",
      },
    },
  ],
});

Builder.registerComponent(FilledInput, {
  name: "FilledInput",
  inputs: [
    {
      name: "classes",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Partial<FilledInputClasses>",
      },
    },
    {
      name: "disableUnderline",
      type: "boolean",
    },
    {
      name: "hiddenLabel",
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

Builder.registerComponent(FormControl, {
  name: "FormControl",
});

Builder.registerComponent(withChildren(FormGroup), {
  name: "FormGroup",
  inputs: [
    {
      name: "children",
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
        ts: "Partial<FormGroupClasses>",
      },
    },
    {
      name: "row",
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

Builder.registerComponent(Grid, {
  name: "Grid",
});

Builder.registerComponent(ImageList, {
  name: "ImageList",
});

Builder.registerComponent(ImageListItem, {
  name: "ImageListItem",
});

Builder.registerComponent(withChildren(ImageListItemBar), {
  name: "ImageListItemBar",
  inputs: [
    {
      name: "actionIcon",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
    {
      name: "actionPosition",
      type: "string",
      enum: ["left", "right"],
    },
    {
      name: "classes",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Partial<ImageListItemBarClasses>",
      },
    },
    {
      name: "position",
      type: "string",
      enum: ["below", "bottom", "top"],
    },
    {
      name: "subtitle",
      type: "string",
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
      name: "title",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
  ],
});

Builder.registerComponent(InputAdornment, {
  name: "InputAdornment",
});

Builder.registerComponent(InputLabel, {
  name: "InputLabel",
});

Builder.registerComponent(LinearProgress, {
  name: "LinearProgress",
  inputs: [
    {
      name: "classes",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Partial<LinearProgressClasses>",
      },
    },
    {
      name: "color",
      type: "string",
      meta: {
        ts: 'OverridableStringUnion<"primary" | "secondary" | "error" | "info" | "success" | "warning" | "inherit", LinearProgressPropsColorOverrides>',
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
      type: "number",
    },
    {
      name: "valueBuffer",
      type: "number",
    },
    {
      name: "variant",
      type: "string",
      enum: ["buffer", "determinate", "indeterminate", "query"],
    },
  ],
});

Builder.registerComponent(List, {
  name: "List",
});

Builder.registerComponent(ListItem, {
  name: "ListItem",
});

Builder.registerComponent(withChildren(ListItemAvatar), {
  name: "ListItemAvatar",
  inputs: [
    {
      name: "children",
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
        ts: "Partial<ListItemAvatarClasses>",
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
  ],
});

Builder.registerComponent(ListItemButton, {
  name: "ListItemButton",
});

Builder.registerComponent(withChildren(ListItemIcon), {
  name: "ListItemIcon",
  inputs: [
    {
      name: "children",
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
        ts: "Partial<ListItemIconClasses>",
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
  ],
});

Builder.registerComponent(withChildren(ListItemSecondaryAction), {
  name: "ListItemSecondaryAction",
  inputs: [
    {
      name: "children",
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
        ts: "Partial<ListItemSecondaryActionClasses>",
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
  ],
});

Builder.registerComponent(withChildren(ListItemText), {
  name: "ListItemText",
  inputs: [
    {
      name: "children",
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
        ts: "Partial<ListItemTextClasses>",
      },
    },
    {
      name: "disableTypography",
      type: "boolean",
    },
    {
      name: "inset",
      type: "boolean",
    },
    {
      name: "primary",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
    {
      name: "primaryTypographyProps",
      type: "string",
      meta: {
        ts: "any",
      },
    },
    {
      name: "secondary",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
    {
      name: "secondaryTypographyProps",
      type: "string",
      meta: {
        ts: "any",
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
  ],
});

Builder.registerComponent(ListSubheader, {
  name: "ListSubheader",
});

Builder.registerComponent(withChildren(Menu), {
  name: "Menu",
  inputs: [
    {
      name: "anchorEl",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Element | (() => Element) | PopoverVirtualElement | (() => PopoverVirtualElement)",
      },
    },
    {
      name: "children",
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
        ts: "Partial<MenuClasses>",
      },
    },
    {
      name: "disableAutoFocusItem",
      type: "boolean",
    },
    {
      name: "MenuListProps",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Partial<any>",
      },
    },
    {
      name: "open",
      type: "boolean",
      required: true,
    },
    {
      name: "PopoverClasses",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Partial<PopoverClasses>",
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
      name: "transitionDuration",
      type: "string",
      meta: {
        ts: "any",
      },
    },
    {
      name: "TransitionProps",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "TransitionProps",
      },
    },
    {
      name: "variant",
      type: "string",
      enum: ["menu", "selectedMenu"],
    },
  ],
});

Builder.registerComponent(MenuItem, {
  name: "MenuItem",
});

Builder.registerComponent(MenuList, {
  name: "MenuList",
});

Builder.registerComponent(Modal, {
  name: "Modal",
});

Builder.registerComponent(withChildren(OutlinedInput), {
  name: "OutlinedInput",
  inputs: [
    {
      name: "classes",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Partial<OutlinedInputClasses>",
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
      name: "notched",
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

Builder.registerComponent(withChildren(Pagination), {
  name: "Pagination",
  inputs: [
    {
      name: "boundaryCount",
      type: "number",
    },
    {
      name: "classes",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Partial<PaginationClasses>",
      },
    },
    {
      name: "color",
      type: "string",
      meta: {
        ts: 'OverridableStringUnion<"primary" | "secondary" | "standard", PaginationPropsColorOverrides>',
      },
    },
    {
      name: "componentName",
      type: "string",
    },
    {
      name: "count",
      type: "number",
    },
    {
      name: "defaultPage",
      type: "number",
    },
    {
      name: "disabled",
      type: "boolean",
    },
    {
      name: "getItemAriaLabel",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: '(type: "page" | "first" | "last" | "next" | "previous" | "start-ellipsis" | "end-ellipsis", page: number, selected: boolean) => string',
      },
    },
    {
      name: "hideNextButton",
      type: "boolean",
    },
    {
      name: "hidePrevButton",
      type: "boolean",
    },
    {
      name: "page",
      type: "number",
    },
    {
      name: "renderItem",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
    {
      name: "shape",
      type: "string",
      enum: ["circular", "rounded"],
    },
    {
      name: "showFirstButton",
      type: "boolean",
    },
    {
      name: "showLastButton",
      type: "boolean",
    },
    {
      name: "siblingCount",
      type: "number",
    },
    {
      name: "size",
      type: "string",
      meta: {
        ts: 'OverridableStringUnion<"small" | "medium" | "large", PaginationPropsSizeOverrides>',
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
      meta: {
        ts: 'OverridableStringUnion<"text" | "outlined", PaginationPropsVariantOverrides>',
      },
    },
  ],
});

Builder.registerComponent(PaginationItem, {
  name: "PaginationItem",
});

Builder.registerComponent(Paper, {
  name: "Paper",
});

Builder.registerComponent(withChildren(Popover), {
  name: "Popover",
  inputs: [
    {
      name: "action",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Ref<PopoverActions>",
      },
    },
    {
      name: "anchorEl",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Element | (() => Element) | PopoverVirtualElement | (() => PopoverVirtualElement)",
      },
    },
    {
      name: "anchorOrigin",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "PopoverOrigin",
      },
    },
    {
      name: "anchorPosition",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "PopoverPosition",
      },
    },
    {
      name: "anchorReference",
      type: "string",
      enum: ["anchorEl", "anchorPosition", "none"],
    },
    {
      name: "children",
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
        ts: "Partial<PopoverClasses>",
      },
    },
    {
      name: "container",
      type: "string",
      meta: {
        ts: "any",
      },
    },
    {
      name: "elevation",
      type: "number",
    },
    {
      name: "marginThreshold",
      type: "number",
    },
    {
      name: "open",
      type: "boolean",
      required: true,
    },
    {
      name: "PaperProps",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Partial<any>",
      },
    },
    {
      name: "slotProps",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: '{ root?: SlotComponentProps<OverridableComponent<ModalTypeMap<"div", {}>>, {}, ModalOwnerState>; paper?: SlotComponentProps<OverridableComponent<PaperTypeMap<{}, "div">>, {}, {}>; }',
      },
    },
    {
      name: "slots",
      type: "string",
      meta: {
        ts: "{ root?: ElementType<any, keyof IntrinsicElements>; paper?: ElementType<any, keyof IntrinsicElements>; }",
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
      name: "transformOrigin",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "PopoverOrigin",
      },
    },
    {
      name: "TransitionComponent",
      type: "string",
      meta: {
        ts: "JSXElementConstructor<TransitionProps & { children: ReactElement<any, any>; }>",
      },
    },
    {
      name: "transitionDuration",
      type: "string",
      meta: {
        ts: "any",
      },
    },
    {
      name: "TransitionProps",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "TransitionProps",
      },
    },
  ],
});

Builder.registerComponent(Popper, {
  name: "Popper",
  inputs: [
    {
      name: "component",
      type: "string",
      meta: {
        ts: "ElementType<any, keyof IntrinsicElements>",
      },
    },
    {
      name: "components",
      type: "string",
      meta: {
        ts: "{ Root?: ElementType<any, keyof IntrinsicElements>; }",
      },
    },
    {
      name: "componentsProps",
      type: "string",
      meta: {
        ts: "BasePopperProps",
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
  ],
});

Builder.registerComponent(Portal, {
  name: "Portal",
});

Builder.registerComponent(withChildren(Radio), {
  name: "Radio",
  inputs: [
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
        ts: "Partial<RadioClasses>",
      },
    },
    {
      name: "color",
      type: "string",
      meta: {
        ts: 'OverridableStringUnion<"primary" | "secondary" | "error" | "info" | "success" | "warning" | "default", RadioPropsColorOverrides>',
      },
    },
    {
      name: "disabled",
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
      name: "size",
      type: "string",
      meta: {
        ts: 'OverridableStringUnion<"small" | "medium", RadioPropsSizeOverrides>',
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
  ],
});

Builder.registerComponent(RadioGroup, {
  name: "RadioGroup",
  inputs: [
    {
      name: "name",
      type: "string",
    },
    {
      name: "value",
      type: "string",
      meta: {
        ts: "any",
      },
    },
  ],
});

Builder.registerComponent(withChildren(Rating), {
  name: "Rating",
  inputs: [
    {
      name: "classes",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Partial<RatingClasses>",
      },
    },
    {
      name: "disabled",
      type: "boolean",
    },
    {
      name: "emptyIcon",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
    {
      name: "emptyLabelText",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
    {
      name: "getLabelText",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "(value: number) => string",
      },
    },
    {
      name: "highlightSelectedOnly",
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
      name: "IconContainerComponent",
      type: "string",
      meta: {
        ts: "ElementType<IconContainerProps, keyof IntrinsicElements>",
      },
    },
    {
      name: "max",
      type: "number",
    },
    {
      name: "name",
      type: "string",
    },
    {
      name: "precision",
      type: "number",
    },
    {
      name: "readOnly",
      type: "boolean",
    },
    {
      name: "size",
      type: "string",
      meta: {
        ts: 'OverridableStringUnion<"small" | "medium" | "large", RatingPropsSizeOverrides>',
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
      type: "number",
    },
  ],
});

Builder.registerComponent(withChildren(Select), {
  name: "Select",
  inputs: [
    {
      name: "autoWidth",
      type: "boolean",
    },
    {
      name: "children",
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
        ts: "Partial<SelectClasses>",
      },
    },
    {
      name: "defaultOpen",
      type: "boolean",
    },
    {
      name: "displayEmpty",
      type: "boolean",
    },
    {
      name: "IconComponent",
      type: "string",
      meta: {
        ts: "ElementType<any, keyof IntrinsicElements>",
      },
    },
    {
      name: "id",
      type: "string",
    },
    {
      name: "input",
      type: "string",
      meta: {
        ts: "ReactElement<any, any>",
      },
    },
    {
      name: "inputProps",
      type: "string",
      meta: {
        ts: "any",
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
      name: "labelId",
      type: "string",
    },
    {
      name: "MenuProps",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Partial<MenuProps>",
      },
    },
    {
      name: "multiple",
      type: "boolean",
    },
    {
      name: "native",
      type: "boolean",
    },
    {
      name: "open",
      type: "boolean",
    },
    {
      name: "renderValue",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
    {
      name: "SelectDisplayProps",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "HTMLAttributes<HTMLDivElement>",
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
      enum: [""],
    },
    {
      name: "variant",
      type: "string",
      enum: ["filled"],
      required: true,
    },
  ],
});

Builder.registerComponent(Skeleton, {
  name: "Skeleton",
});

Builder.registerComponent(withChildren(Slide), {
  name: "Slide",
  inputs: [
    {
      name: "appear",
      type: "boolean",
    },
    {
      name: "children",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactElement<any, any>",
      },
    },
    {
      name: "container",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Element | ((element: Element) => Element)",
      },
    },
    {
      name: "direction",
      type: "string",
      enum: ["down", "left", "right", "up"],
    },
    {
      name: "easing",
      type: "string",
      meta: {
        ts: "any",
      },
    },
    {
      name: "in",
      type: "string",
      meta: {
        ts: "any",
      },
    },
    {
      name: "ref",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Ref<unknown>",
      },
    },
    {
      name: "timeout",
      type: "string",
      meta: {
        ts: "any",
      },
    },
  ],
});

Builder.registerComponent(Slider, {
  name: "Slider",
});

Builder.registerComponent(withChildren(Snackbar), {
  name: "Snackbar",
  inputs: [
    {
      name: "action",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
    {
      name: "anchorOrigin",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "SnackbarOrigin",
      },
    },
    {
      name: "autoHideDuration",
      type: "number",
    },
    {
      name: "children",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactElement<any, any>",
      },
    },
    {
      name: "classes",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Partial<SnackbarClasses>",
      },
    },
    {
      name: "ClickAwayListenerProps",
      type: "string",
      meta: {
        ts: "ClickAwayListenerProps",
      },
    },
    {
      name: "ContentProps",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Partial<SnackbarContentProps>",
      },
    },
    {
      name: "disableWindowBlurListener",
      type: "boolean",
    },
    {
      name: "key",
      type: "string",
      meta: {
        ts: "any",
      },
    },
    {
      name: "message",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
    {
      name: "open",
      type: "boolean",
    },
    {
      name: "resumeHideDuration",
      type: "number",
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
      name: "TransitionComponent",
      type: "string",
      meta: {
        ts: "JSXElementConstructor<TransitionProps & { children: ReactElement<any, any>; }>",
      },
    },
    {
      name: "transitionDuration",
      type: "string",
      meta: {
        ts: "any",
      },
    },
    {
      name: "TransitionProps",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "TransitionProps",
      },
    },
  ],
});

Builder.registerComponent(withChildren(SnackbarContent), {
  name: "SnackbarContent",
  inputs: [
    {
      name: "action",
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
        ts: "Partial<SnackbarContentClasses>",
      },
    },
    {
      name: "message",
      type: "string",
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
  ],
});

Builder.registerComponent(withChildren(SpeedDial), {
  name: "SpeedDial",
  inputs: [
    {
      name: "children",
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
        ts: "Partial<SpeedDialClasses>",
      },
    },
    {
      name: "direction",
      type: "string",
      enum: ["down", "left", "right", "up"],
    },
    {
      name: "FabProps",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Partial<any>",
      },
    },
    {
      name: "hidden",
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
      name: "open",
      type: "boolean",
    },
    {
      name: "openIcon",
      type: "string",
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
      name: "TransitionComponent",
      type: "string",
      meta: {
        ts: "JSXElementConstructor<TransitionProps>",
      },
    },
    {
      name: "transitionDuration",
      type: "string",
      meta: {
        ts: "any",
      },
    },
    {
      name: "TransitionProps",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "TransitionProps",
      },
    },
  ],
});

Builder.registerComponent(withChildren(SpeedDialAction), {
  name: "SpeedDialAction",
  inputs: [
    {
      name: "classes",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Partial<SpeedDialActionClasses>",
      },
    },
    {
      name: "delay",
      type: "number",
    },
    {
      name: "FabProps",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Partial<any>",
      },
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
      name: "sx",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "SxProps<Theme>",
      },
    },
    {
      name: "TooltipClasses",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Partial<TooltipClasses>",
      },
    },
    {
      name: "tooltipOpen",
      type: "boolean",
    },
    {
      name: "tooltipPlacement",
      type: "string",
      enum: [
        "bottom",
        "bottom-end",
        "bottom-start",
        "left",
        "left-end",
        "left-start",
        "right",
        "right-end",
        "right-start",
        "top",
        "top-end",
        "top-start",
      ],
    },
    {
      name: "tooltipTitle",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
  ],
});

Builder.registerComponent(withChildren(SpeedDialIcon), {
  name: "SpeedDialIcon",
  inputs: [
    {
      name: "classes",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Partial<SpeedDialIconClasses>",
      },
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
      name: "open",
      type: "boolean",
    },
    {
      name: "openIcon",
      type: "string",
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
  ],
});

Builder.registerComponent(Stack, {
  name: "Stack",
});

Builder.registerComponent(Step, {
  name: "Step",
});

Builder.registerComponent(StepButton, {
  name: "StepButton",
});

Builder.registerComponent(StepConnector, {
  name: "StepConnector",
  inputs: [
    {
      name: "classes",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Partial<StepConnectorClasses>",
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
  ],
});

Builder.registerComponent(withChildren(StepContent), {
  name: "StepContent",
  inputs: [
    {
      name: "children",
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
        ts: "Partial<StepContentClasses>",
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
      name: "TransitionComponent",
      type: "string",
      meta: {
        ts: "JSXElementConstructor<TransitionProps & { children: ReactElement<any, any>; }>",
      },
    },
    {
      name: "transitionDuration",
      type: "string",
      meta: {
        ts: "any",
      },
    },
    {
      name: "TransitionProps",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "TransitionProps",
      },
    },
  ],
});

Builder.registerComponent(withChildren(StepIcon), {
  name: "StepIcon",
  inputs: [
    {
      name: "active",
      type: "boolean",
    },
    {
      name: "classes",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Partial<StepIconClasses>",
      },
    },
    {
      name: "completed",
      type: "boolean",
    },
    {
      name: "error",
      type: "boolean",
    },
    {
      name: "icon",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
      required: true,
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

Builder.registerComponent(withChildren(StepLabel), {
  name: "StepLabel",
  inputs: [
    {
      name: "children",
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
        ts: "Partial<StepLabelClasses>",
      },
    },
    {
      name: "componentsProps",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "{ label?: HTMLProps<HTMLSpanElement>; }",
      },
    },
    {
      name: "error",
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
      name: "optional",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
    {
      name: "slotProps",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "{ label?: HTMLProps<HTMLSpanElement>; }",
      },
    },
    {
      name: "StepIconComponent",
      type: "string",
      meta: {
        ts: "ElementType<StepIconProps, keyof IntrinsicElements>",
      },
    },
    {
      name: "StepIconProps",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Partial<StepIconProps>",
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
  ],
});

Builder.registerComponent(Stepper, {
  name: "Stepper",
});

Builder.registerComponent(withChildren(StyledTextField), {
  name: "StyledTextField",
  inputs: [
    {
      name: "children",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
    {
      name: "variant",
      type: "string",
      meta: {
        ts: "Variant",
      },
    },
  ],
});

Builder.registerComponent(SwipeableDrawer, {
  name: "SwipeableDrawer",
  inputs: [
    {
      name: "allowSwipeInChildren",
      type: "string",
      meta: {
        ts: "boolean | ((e: TouchEvent, swipeArea: HTMLDivElement, paper: HTMLDivElement) => boolean)",
      },
    },
    {
      name: "disableBackdropTransition",
      type: "boolean",
    },
    {
      name: "disableDiscovery",
      type: "boolean",
    },
    {
      name: "disableSwipeToOpen",
      type: "boolean",
    },
    {
      name: "hysteresis",
      type: "number",
    },
    {
      name: "minFlingVelocity",
      type: "number",
    },
    {
      name: "open",
      type: "boolean",
    },
    {
      name: "SwipeAreaProps",
      type: "object",
      hideFromUI: true,
    },
    {
      name: "swipeAreaWidth",
      type: "number",
    },
  ],
});

Builder.registerComponent(withChildren(Switch), {
  name: "Switch",
  inputs: [
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
        ts: "Partial<SwitchClasses>",
      },
    },
    {
      name: "color",
      type: "string",
      meta: {
        ts: 'OverridableStringUnion<"primary" | "secondary" | "error" | "info" | "success" | "warning" | "default", SwitchPropsColorOverrides>',
      },
    },
    {
      name: "disabled",
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
      name: "size",
      type: "string",
      meta: {
        ts: 'OverridableStringUnion<"small" | "medium", SwitchPropsSizeOverrides>',
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

Builder.registerComponent(Tab, {
  name: "Tab",
});

Builder.registerComponent(Table, {
  name: "Table",
});

Builder.registerComponent(TableBody, {
  name: "TableBody",
});

Builder.registerComponent(withChildren(TableCell), {
  name: "TableCell",
  inputs: [
    {
      name: "align",
      type: "string",
      enum: ["center", "inherit", "justify", "left", "right"],
    },
    {
      name: "children",
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
        ts: "Partial<TableCellClasses>",
      },
    },
    {
      name: "component",
      type: "string",
      meta: {
        ts: "ElementType<TableCellBaseProps, keyof IntrinsicElements>",
      },
    },
    {
      name: "padding",
      type: "string",
      enum: ["checkbox", "none", "normal"],
    },
    {
      name: "scope",
      type: "string",
    },
    {
      name: "size",
      type: "string",
      meta: {
        ts: 'OverridableStringUnion<"small" | "medium", TableCellPropsSizeOverrides>',
      },
    },
    {
      name: "sortDirection",
      type: "string",
      enum: ["asc", "desc"],
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
      meta: {
        ts: 'OverridableStringUnion<"body" | "footer" | "head", TableCellPropsVariantOverrides>',
      },
    },
  ],
});

Builder.registerComponent(TableContainer, {
  name: "TableContainer",
});

Builder.registerComponent(TableFooter, {
  name: "TableFooter",
});

Builder.registerComponent(TableHead, {
  name: "TableHead",
});

Builder.registerComponent(TablePagination, {
  name: "TablePagination",
});

Builder.registerComponent(TableRow, {
  name: "TableRow",
});

Builder.registerComponent(TableSortLabel, {
  name: "TableSortLabel",
});

Builder.registerComponent(Tabs, {
  name: "Tabs",
});

Builder.registerComponent(withChildren(TabScrollButton), {
  name: "TabScrollButton",
  inputs: [
    {
      name: "children",
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
        ts: "Partial<TabScrollButtonClasses>",
      },
    },
    {
      name: "direction",
      type: "string",
      enum: ["left", "right"],
      required: true,
    },
    {
      name: "disabled",
      type: "boolean",
    },
    {
      name: "orientation",
      type: "string",
      enum: ["horizontal", "vertical"],
      required: true,
    },
    {
      name: "slotProps",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: '{ startScrollButtonIcon?: SlotComponentProps<OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string; }, TabScrollButtonStartIconSlotPropsOverrides, TabScrollButtonOwnerState>; endScrollButtonIcon?: SlotComponentProps<...>; }',
      },
    },
    {
      name: "slots",
      type: "string",
      meta: {
        ts: "{ StartScrollButtonIcon?: ElementType<any, keyof IntrinsicElements>; EndScrollButtonIcon?: ElementType<any, keyof IntrinsicElements>; }",
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
  ],
});

Builder.registerComponent(TextareaAutosize, {
  name: "TextareaAutosize",
});

Builder.registerComponent(ToggleButton, {
  name: "ToggleButton",
});

Builder.registerComponent(withChildren(ToggleButtonGroup), {
  name: "ToggleButtonGroup",
  inputs: [
    {
      name: "children",
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
        ts: "Partial<ToggleButtonGroupClasses>",
      },
    },
    {
      name: "color",
      type: "string",
      meta: {
        ts: 'OverridableStringUnion<"standard" | "primary" | "secondary" | "error" | "info" | "success" | "warning", ToggleButtonGroupPropsColorOverrides>',
      },
    },
    {
      name: "disabled",
      type: "boolean",
    },
    {
      name: "exclusive",
      type: "boolean",
    },
    {
      name: "fullWidth",
      type: "boolean",
    },
    {
      name: "orientation",
      type: "string",
      enum: ["horizontal", "vertical"],
    },
    {
      name: "size",
      type: "string",
      meta: {
        ts: 'OverridableStringUnion<"small" | "medium" | "large", ToggleButtonGroupPropsSizeOverrides>',
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
        ts: "any",
      },
    },
  ],
});

Builder.registerComponent(Toolbar, {
  name: "Toolbar",
});

Builder.registerComponent(withChildren(Tooltip), {
  name: "Tooltip",
  inputs: [
    {
      name: "arrow",
      type: "boolean",
    },
    {
      name: "children",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactElement<any, any>",
      },
    },
    {
      name: "classes",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Partial<TooltipClasses>",
      },
    },
    {
      name: "components",
      type: "string",
      meta: {
        ts: "{ Popper?: ElementType<PopperProps, keyof IntrinsicElements>; Transition?: ElementType<any, keyof IntrinsicElements>; Tooltip?: ElementType<...>; Arrow?: ElementType<...>; }",
      },
    },
    {
      name: "componentsProps",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "{ popper?: Partial<PopperProps> & TooltipComponentsPropsOverrides; transition?: TransitionProps & TooltipComponentsPropsOverrides; tooltip?: HTMLProps<...> & ... 1 more ... & TooltipComponentsPropsOverrides; arrow?: HTMLProps<...> & ... 1 more ... & TooltipComponentsPropsOverrides; }",
      },
    },
    {
      name: "describeChild",
      type: "boolean",
    },
    {
      name: "disableFocusListener",
      type: "boolean",
    },
    {
      name: "disableHoverListener",
      type: "boolean",
    },
    {
      name: "disableInteractive",
      type: "boolean",
    },
    {
      name: "disableTouchListener",
      type: "boolean",
    },
    {
      name: "enterDelay",
      type: "number",
    },
    {
      name: "enterNextDelay",
      type: "number",
    },
    {
      name: "enterTouchDelay",
      type: "number",
    },
    {
      name: "followCursor",
      type: "boolean",
    },
    {
      name: "id",
      type: "string",
    },
    {
      name: "leaveDelay",
      type: "number",
    },
    {
      name: "leaveTouchDelay",
      type: "number",
    },
    {
      name: "open",
      type: "boolean",
    },
    {
      name: "placement",
      type: "string",
      enum: [
        "bottom",
        "bottom-end",
        "bottom-start",
        "left",
        "left-end",
        "left-start",
        "right",
        "right-end",
        "right-start",
        "top",
        "top-end",
        "top-start",
      ],
    },
    {
      name: "PopperComponent",
      type: "string",
      meta: {
        ts: "JSXElementConstructor<PopperProps>",
      },
    },
    {
      name: "PopperProps",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Partial<PopperProps>",
      },
    },
    {
      name: "slotProps",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "{ popper?: Partial<PopperProps> & TooltipComponentsPropsOverrides; transition?: TransitionProps & TooltipComponentsPropsOverrides; tooltip?: HTMLProps<...> & ... 1 more ... & TooltipComponentsPropsOverrides; arrow?: HTMLProps<...> & ... 1 more ... & TooltipComponentsPropsOverrides; }",
      },
    },
    {
      name: "slots",
      type: "string",
      meta: {
        ts: "{ popper?: ElementType<PopperProps, keyof IntrinsicElements>; transition?: ElementType<any, keyof IntrinsicElements>; tooltip?: ElementType<...>; arrow?: ElementType<...>; }",
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
      name: "title",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
      required: true,
    },
    {
      name: "TransitionComponent",
      type: "string",
      meta: {
        ts: "JSXElementConstructor<TransitionProps & { children: ReactElement<any, any>; }>",
      },
    },
    {
      name: "TransitionProps",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "TransitionProps",
      },
    },
  ],
});

Builder.registerComponent(Typography, {
  name: "Typography",
});

Builder.registerComponent(withChildren(Zoom), {
  name: "Zoom",
  inputs: [
    {
      name: "appear",
      type: "boolean",
    },
    {
      name: "children",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactElement<any, any>",
      },
    },
    {
      name: "easing",
      type: "string",
      meta: {
        ts: "any",
      },
    },
    {
      name: "in",
      type: "boolean",
    },
    {
      name: "ref",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Ref<unknown>",
      },
    },
    {
      name: "timeout",
      type: "string",
      meta: {
        ts: "any",
      },
    },
  ],
});

Builder.registerComponent(Counter, {
  name: "Counter",
  inputs: [
    {
      name: "initialCount",
      type: "number",
    },
  ],
});

Builder.registerComponent(CreativeCheckbox, {
  name: "CreativeCheckbox",
  inputs: [
    {
      name: "altText",
      type: "string",
      required: true,
    },
    {
      name: "imageSrc",
      type: "string",
      required: true,
    },
    {
      name: "name",
      type: "string",
      required: true,
    },
    {
      name: "value",
      type: "string",
    },
  ],
});
