"use client";
import { Box, Stack, Typography } from "@mui/material";
import { generateDetailEduPaths } from "../Shared/mocks";
import EducationalPathDetail from "./Components/EducationalPathDetail";
import Layout from "../Shared/ui/Layout";
import { DetailEduPathProps } from "../types/Course";
import LessonList from "./LessonComponents/LessonList";

// Generate some mock educational paths
const mockDetailEduPathProps = generateDetailEduPaths(1)[0];

// Render the component with mock data
const EducationalPathDetailPage: React.FC<DetailEduPathProps> = ({
  lessonCount,
}) => {
  const lessons = [
    {
      title: "I gruppi da 2 e 4",
      duration: "11:12",
      isWatched: true,
    },
    {
      title: "Studiare gli Assoli - Parte 1",
      duration: "04.31",
      isCurrent: true,
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/cca9be9ede5af6a2730bf03e93fbab24307c23e11b3b5dfa08b1978a926e2da6?placeholderIfAbsent=true&apiKey=64022e778ac9432c834a77987bf09f24",
    },
    {
      title: "Jukebox - La canzone del sole",
      duration: "04.31",
      isJukebox: true,
    },
    {
      title: "Studiare gli Assoli - Parte 2",
      duration: "06:24",
      isLocked: true,
    },
  ];
  return (
    <Layout isLogged hasSubNavbar leftButtonSubNavbar>
      <main className="space-y-12">
        <div>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb={4}
          >
            <Typography variant="h1" component="h1">
              {mockDetailEduPathProps.title}
            </Typography>
          </Box>
          <EducationalPathDetail
            title={mockDetailEduPathProps.title}
            level={mockDetailEduPathProps.level}
            instructors={mockDetailEduPathProps.instructors}
            description={mockDetailEduPathProps.description}
            requirements={mockDetailEduPathProps.requirements}
            lessonCount={lessonCount}
          />
        </div>
        <div className="max-w-[800px] m-auto">
          <div className="mb-12">
            <div className="flex justify-between items-center w-full mb-6">
              <Typography variant="h3">Lezioni</Typography>
              <Typography variant="s1">{lessonCount} elementi</Typography>
            </div>
            <LessonList lessons={lessons} />
          </div>
          <div className="mb-12">
            <div className="flex justify-between items-center w-full mb-6">
              <Typography variant="h3">Serie</Typography>
              <Typography variant="s1">{lessonCount} elementi</Typography>
            </div>
            <LessonList lessons={lessons} />
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default EducationalPathDetailPage;
