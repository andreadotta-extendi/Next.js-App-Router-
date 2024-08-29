"use client";
import theme from "@/app/theme";
import {
  CourseHighlight,
  CourseType,
  CardColorsMetadata,
  CourseData,
} from "../types/Course";

const setImportant = (string: string) => `${string} !important`;
console.log("//////////////////////// THEME ", theme);
const colorMapping: Record<
  CourseHighlight,
  Record<CourseType, CardColorsMetadata>
> = {
  highlightedCourses: {
    program: {
      cardBg: theme.palette.primary.main,
      chipBg: theme.palette.primary.contrastText,
      textColor: theme.palette.primary.contrastText,
      chipTextColor: theme.palette.primary.main,
    },
    percorsi: {
      cardBg: theme.palette.secondary.main,
      chipBg: theme.palette.secondary.contrastText,
      textColor: theme.palette.secondary.contrastText,
      chipTextColor: theme.palette.primary.contrastText,
    },
    serie: {
      cardBg: theme.palette.complementary.main,
      chipBg: theme.palette.primary.contrastText,
      textColor: theme.palette.primary.contrastText,
      chipTextColor: theme.palette.complementary.main,
    },
  },
  regularCourses: {
    program: {
      cardBg: theme.palette.paper.main,
      chipBg: theme.palette.neutral.main,
      textColor: theme.palette.primary.contrastText,
      chipTextColor: theme.palette.primary.contrastText,
    },
    percorsi: {
      cardBg: theme.palette.paper.main,
      chipBg: theme.palette.neutral.main,
      textColor: theme.palette.primary.contrastText,
      chipTextColor: theme.palette.primary.contrastText,
    },
    serie: {
      cardBg: theme.palette.paper.main,
      chipBg: theme.palette.neutral.main,
      textColor: theme.palette.primary.contrastText,
      chipTextColor: theme.palette.primary.contrastText,
    },
  },
};

export const getCardColors = (
  courseType?: CourseType,
  courseHighlight?: boolean
): CardColorsMetadata | undefined => {
  const metadata =
    courseType && courseHighlight
      ? colorMapping[
          courseHighlight ? "highlightedCourses" : "regularCourses"
        ]?.[courseType]
      : undefined;

  return metadata
    ? {
        chipTextColor: setImportant(metadata.chipTextColor),
        cardBg: setImportant(metadata.cardBg),
        chipBg: setImportant(metadata.chipBg),
        textColor: setImportant(metadata.textColor),
      }
    : undefined;
};

export const getInstructorName = (instructors: CourseData["instructors"]) => {
  if (instructors.length === 1) {
    return instructors[0].name;
  } else if (instructors.length > 1) {
    return `${instructors.length} Insegnanti`;
  } else {
    return "";
  }
};
