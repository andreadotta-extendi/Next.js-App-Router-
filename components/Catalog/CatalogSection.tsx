import React from "react";
import { IconButton, Modal, Typography } from "@mui/material";
import CourseCard from "./CourseCard";
import { ChevronLeftRounded, ChevronRightRounded } from "@mui/icons-material";
import ModalDetails from "./ModalDetails/ModalDetails";
import { generateCourse } from "../Shared/mocks";

interface CategorySectionProps {
  title: string;
  hasLink?: boolean;
  hasNavigationButtons?: boolean;
  hasNumberResults?: boolean;
  resultsNumber?: number;
}

export const CatalogSection: React.FC<CategorySectionProps> = ({
  title,
  hasLink,
  hasNavigationButtons,
  hasNumberResults,
  resultsNumber,
}) => {
  const course = generateCourse();
  return (
    <section className="w-full">
      <div className="flex flex-wrap gap-4 justify-between items-center">
        <div className="flex items-center gap-2">
          <Typography
            variant="h3"
            className="self-stretch my-auto"
            component="h3"
          >
            {title}
          </Typography>
          {hasLink && (
            <IconButton>
              <ChevronRightRounded />
            </IconButton>
          )}
        </div>

        {hasNavigationButtons && (
          <div className="hidden md:inline-block">
            <div className="flex gap-2 items-center self-stretch my-auto">
              <IconButton color="inherit" disabled>
                <ChevronLeftRounded />
              </IconButton>
              <IconButton color="inherit">
                <ChevronRightRounded />
              </IconButton>
            </div>
          </div>
        )}

        {hasNumberResults && (
          <div className="flex gap-2 items-center self-stretch my-auto">
            <Typography variant="s1">{resultsNumber} risultati</Typography>
          </div>
        )}
      </div>
      <div className="flex gap-4 mt-6">
        <ModalDetails
          title={"Session Man: La chitarra in Studio di  Registrazione"}
          description={
            "Giuvazza Maggiore, grazie alla sua grande esperienza da Session Man, ci guida nel mondo della chitarra in studio e non solo. L'obiettivo di questa serie è rendere le nostre parti di chitarra interessanti e funzionali. Ogni genere musicale ha bisogno di un diverso tipo di suono, di fraseggio e di intenzione; Giuvazza analizza questi aspetti e li declina in vari ambiti: pop, rock, funk. Se vuoi imparare a scrivere le chitarre come i veri Session Men, questa è la Serie Didattica che fa per te."
          }
          videoUrl={
            "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm"
          }
          logoUrl={"logo"}
          lessonCount={0}
          duration={"2h 15min"}
          level={"base"}
          genres={["Jazz", "Pop"]}
          instructors={{
            name: "Giuvazza Maggiore",
            avatarUrl:
              "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          }}
          progressValue={50}
          status={"completed"}
        />
        <CourseCard {...course} />
        <CourseCard {...course} />
        <CourseCard {...course} />
        <CourseCard {...course} />
        <CourseCard isCourseStarted {...course} />
      </div>
    </section>
  );
};
