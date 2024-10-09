import React from "react";
import LessonItem from "./LessonItem";

interface Lesson {
  title: string;
  duration: string;
  isWatched?: boolean;
  isLocked?: boolean;
  imageSrc?: string;
}

interface LessonListProps {
  lessons: Lesson[];
}

const LessonList: React.FC<LessonListProps> = ({ lessons }) => {
  return (
    <section className="space-y-3">
      {lessons.map((lesson, index) => (
        <LessonItem key={index} {...lesson} />
      ))}
    </section>
  );
};

export default LessonList;
