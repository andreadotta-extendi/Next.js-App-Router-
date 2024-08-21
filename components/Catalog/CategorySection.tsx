import React from "react";
import { SvgIcon, Theme, Typography } from "@mui/material";
import CourseCard from "./CourseCard";

interface CategorySectionProps {
  title: string;
}

export const CategorySection: React.FC<CategorySectionProps> = ({ title }) => {
  return (
    <section className="flex flex-col mt-10 w-full max-md:max-w-full">
      <div className="flex flex-wrap gap-10 justify-between items-center max-w-full w-[970px]">
        <div className="flex flex-wrap items-center self-stretch my-auto min-w-[240px] w-[570px] max-md:max-w-full">
          <Typography variant="h3" className="self-stretch my-auto">
            {title}
          </Typography>
          <div className="flex overflow-hidden flex-col justify-center items-center self-stretch p-2.5 my-auto w-9 rounded-lg">
            <SvgIcon className="w-4 min-h-[16px]" />
          </div>
        </div>
        <div className="flex gap-2 items-center self-stretch my-auto">
          <div className="flex overflow-hidden flex-col justify-center items-center self-stretch px-2.5 my-auto w-9 h-9 rounded-lg border border-gray-500 border-solid">
            <SvgIcon className="w-4 min-h-[16px]" />
          </div>
          <div className="flex overflow-hidden flex-col justify-center items-center self-stretch px-2.5 my-auto w-9 h-9 rounded-lg border border-indigo-500 border-solid">
            <SvgIcon className="w-4 min-h-[16px]" />
          </div>
        </div>
      </div>
      <div className="flex gap-4 mt-6 w-full max-md:max-w-full">
        <CourseCard
          imageSrc="https://images.unsplash.com/photo-1580832945253-9a8f87b606f2?q=80&w=2893&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          videoCount={19}
          title="Chitarra da zero"
          tags={["Jazz", "Pop", "Rock"]}
          instructor="Andrea Mazzanti"
          courseType="serie"
          avatar={["https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?q=80&w=3486&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
          "https://images.unsplash.com/photo-1706885093476-b1e54f3b7496?q=80&w=3840&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
          "https://images.unsplash.com/photo-1640951613773-54706e06851d?q=80&w=2967&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"]}
          level="avanzato"
          highlighted={false}
        />
      </div>
    </section>
  );
};
