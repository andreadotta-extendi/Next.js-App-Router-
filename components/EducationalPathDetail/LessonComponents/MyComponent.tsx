"use client";
import React from "react";
import LessonList from "./LessonList";

const MyComponent: React.FC = () => {
  const lessons = [
    {
      title: "I gruppi da 2 e 4",
      duration: "11:12",
      isWatched: true,
    },
    {
      title: "Studiare gli Assoli - Parte 1",
      duration: "04.31",
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/cca9be9ede5af6a2730bf03e93fbab24307c23e11b3b5dfa08b1978a926e2da6?placeholderIfAbsent=true&apiKey=64022e778ac9432c834a77987bf09f24",
    },
    {
      title: "Jukebox - La canzone del sole",
      duration: "04.31",
    },
    {
      title: "Studiare gli Assoli - Parte 2",
      duration: "06:24",
      isLocked: true,
    },
  ];

  return <LessonList lessons={lessons} />;
};

export default MyComponent;
