"use client";
import { PlayCircleOutlineRounded } from "@mui/icons-material";
import React from "react";

interface ModalVideoProps {
  videoUrl: string;
}

const ModalVideo: React.FC<ModalVideoProps> = ({ videoUrl }) => {
  return (
    <div className="relative w-full rounded-xl overflow-hidden h-[400px] mb-6">
      <video className="absolute z-10">
        <source src={videoUrl} />
      </video>
      <PlayCircleOutlineRounded
        className="absolute m-auto inset-0 z-20 text-white"
        sx={{ fontSize: 80 }}
      />
    </div>
  );
};

export default ModalVideo;
