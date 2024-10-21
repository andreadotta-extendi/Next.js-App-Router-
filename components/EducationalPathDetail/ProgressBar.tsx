"use client";
import React from "react";

interface ProgressBarProps {
  completionPercentage: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ completionPercentage }) => {
  return (
    <div className="flex gap-2 items-center min-w-[240px]">
      <div className="self-stretch my-auto text-base font-semibold text-gray-400">
        Completato
      </div>
      <div className="flex flex-col self-stretch my-auto w-40 rounded-none">
        <div className="flex flex-col items-start rounded-2xl bg-gray-600 bg-opacity-70 max-md:pr-5">
          <div
            className="flex shrink-0 h-4 bg-violet-500 rounded-lg"
            style={{ width: `${completionPercentage}%` }}
          />
        </div>
      </div>
      <div className="self-stretch my-auto text-base font-semibold text-zinc-200">
        {completionPercentage}%
      </div>
    </div>
  );
};

export default ProgressBar;
