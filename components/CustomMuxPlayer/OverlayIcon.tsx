import React from "react";

interface OverlayIconProps {
  children: React.ReactNode;
}

export function OverlayIcon({ children }: OverlayIconProps) {
  return (
    <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
      <div className="bg-black bg-opacity-50 rounded-full p-4">{children}</div>
    </div>
  );
}
