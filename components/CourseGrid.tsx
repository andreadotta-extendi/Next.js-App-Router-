"use client";
import React from "react";
import CourseCard from "./Catalog/CourseCard";

interface Course {
  id: number;
  imageSrc: string;
  chipLabel: string;
  chipColor: "primary" | "secondary" | "tertiary";
  videoCount: number;
  title: string;
  tags: string[];
  instructor: string;
}

interface CourseGridProps {
  courses: Course[];
}

const CourseGrid: React.FC<CourseGridProps> = ({ courses }) => {
  return (
    <div className="flex overflow-hidden flex-col max-w-[736px]">
      {[0, 1, 2].map((rowIndex) => (
        <div
          key={rowIndex}
          className={`${
            rowIndex > 0 ? "mt-12" : ""
          } w-full max-md:mt-10 max-md:max-w-full`}
        >
          <div className="flex gap-5 max-md:flex-col">
            {courses.slice(rowIndex * 2, rowIndex * 2 + 2).map((course) => (
              <div
                key={course.id}
                className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full"
              >
                <CourseCard
                  imageSrc={course.imageSrc}
                  chipLabel={course.chipLabel}
                  chipColor={course.chipColor}
                  videoCount={course.videoCount}
                  title={course.title}
                  tags={course.tags}
                  instructor={course.instructor}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseGrid;
