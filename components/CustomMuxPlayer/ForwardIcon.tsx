import React from "react";
import { RotateCw } from "lucide-react";

export function ForwardIcon() {
  return (
    <div className="relative">
      <RotateCw className="h-6 w-6" />
      <span className="absolute inset-0 flex items-center justify-center text-xs font-bold">
        10
      </span>
    </div>
  );
}
