/**
 * This code was generated by Builder.io.
 */
import React from "react";
import CourseGrid from "../components/CourseGrid";

const courses = [
  {
    id: 1,
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/8bbfb583b7aef49a3eb6d5fca35305b0c8160f5dd8d18c9e97673343139eb838?placeholderIfAbsent=true&apiKey=ab14136582c84aab8af41f16349d0438",
    chipLabel: "Programs",
    chipColor: "primary" as const,
    videoCount: 19,
    title: "Session Man: La chitarra in Studio di Registrazione",
    tags: ["Jazz"],
    instructor: "Giuvazza Maggiore",
  },
  {
    id: 2,
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/8bbfb583b7aef49a3eb6d5fca35305b0c8160f5dd8d18c9e97673343139eb838?placeholderIfAbsent=true&apiKey=ab14136582c84aab8af41f16349d0438",
    chipLabel: "Programs",
    chipColor: "primary" as const,
    videoCount: 19,
    title: "Session Man: La chitarra in Studio di Registrazione",
    tags: ["Jazz"],
    instructor: "Giuvazza Maggiore",
  },
  {
    id: 3,
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/37c42378fea85a5d2508c03395cd42984031311b1e97458ebd327531676f4b44?placeholderIfAbsent=true&apiKey=ab14136582c84aab8af41f16349d0438",
    chipLabel: "Percorsi",
    chipColor: "secondary" as const,
    videoCount: 19,
    title: "Chitarra da zero",
    tags: [],
    instructor: "Giuvazza Maggiore",
  },
  {
    id: 4,
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/37c42378fea85a5d2508c03395cd42984031311b1e97458ebd327531676f4b44?placeholderIfAbsent=true&apiKey=ab14136582c84aab8af41f16349d0438",
    chipLabel: "Percorsi",
    chipColor: "secondary" as const,
    videoCount: 19,
    title: "Chitarra da zero",
    tags: [],
    instructor: "Giuvazza Maggiore",
  },
  {
    id: 5,
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/4a7e610fa140080e0489bd20b5136ff64528e31b4f7387779be24484d8b6c621?placeholderIfAbsent=true&apiKey=ab14136582c84aab8af41f16349d0438",
    chipLabel: "Serie",
    chipColor: "tertiary" as const,
    videoCount: 19,
    title: "Chitarra Rock - Gli assoli",
    tags: ["Jazz"],
    instructor: "Giuvazza Maggiore",
  },
  {
    id: 6,
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/4a7e610fa140080e0489bd20b5136ff64528e31b4f7387779be24484d8b6c621?placeholderIfAbsent=true&apiKey=ab14136582c84aab8af41f16349d0438",
    chipLabel: "Serie",
    chipColor: "tertiary" as const,
    videoCount: 19,
    title: "Chitarra Rock - Gli assoli",
    tags: ["Jazz"],
    instructor: "Giuvazza Maggiore",
  },
];

const CoursesPage: React.FC = () => {
  return (
    <main>
      <CourseGrid courses={courses} />
    </main>
  );
};

export default CoursesPage;