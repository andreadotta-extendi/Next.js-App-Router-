import React from "react";
import { RotateCcw } from "lucide-react";

export function RewindIcon() {
  return (
    <div className="relative">
      <RotateCcw className="h-6 w-6" />
      <span className="absolute inset-0 flex items-center justify-center text-xs font-bold">
        10
      </span>
    </div>
  );
}
