/**
 * This code was generated by Builder.io.
 */
import React from "react";

const ProgressBar: React.FC = () => {
  return (
    <div className="flex z-0 gap-2 items-center self-center">
      <div className="flex overflow-hidden flex-col items-center self-stretch my-auto w-[72px]">
        <div className="flex bg-indigo-500 rounded-3xl min-h-[16px] min-w-[24px] w-[72px]" />
      </div>
      <div className="flex overflow-hidden flex-col items-center self-stretch my-auto w-[72px]">
        <div className="flex bg-indigo-500 rounded-3xl min-h-[16px] min-w-[24px] w-[72px]" />
      </div>
      <div className="flex overflow-hidden flex-col items-center self-stretch my-auto w-[72px]">
        <div className="flex rounded-3xl bg-gray-600 bg-opacity-70 min-h-[16px] min-w-[24px] w-[72px]" />
      </div>
    </div>
  );
};

export default ProgressBar;
