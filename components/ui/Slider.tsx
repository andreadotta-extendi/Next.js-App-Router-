// /src/components/ui/Slider.tsx
"use client";
import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { cn } from "../../lib/utils";

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, value, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn("relative flex w-full touch-none select-none", className)}
    value={value}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-3 w-full grow overflow-hidden bg-gray-600">
      <SliderPrimitive.Range className="absolute h-full bg-blue-500" />
    </SliderPrimitive.Track>
    {Array.isArray(value) ? (
      value.map((_, index) => (
        <SliderPrimitive.Thumb
          key={index}
          className="block h-3 w-3 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        />
      ))
    ) : (
      <SliderPrimitive.Thumb className="block h-3 w-3 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" />
    )}
  </SliderPrimitive.Root>
));

Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
