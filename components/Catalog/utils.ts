"use client";
import theme from "@/app/theme";
import {
  CourseHighlight,
  CourseType,
  CardColorsMetadata,
  CourseData,
} from "../types/Course";

// Helper to add "!important" to a string
const setImportant = (string: string) => `${string} !important`;

// Updated color mapping with separated `isCoureStarted` logic
const colorMapping: Record<
  CourseHighlight,
  Record<CourseType, CardColorsMetadata>
> & {
  isCourseStarted: CardColorsMetadata;
} = {
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
  isCourseStarted: {
    cardBg: theme.palette.paper.main,
    chipBg: theme.palette.neutral.main,
    textColor: theme.palette.primary.contrastText,
    chipTextColor: theme.palette.primary.contrastText,
  },
};

// Utility to apply "!important" to all styles in CardColorsMetadata
const applyImportantToMetadata = (
  metadata: CardColorsMetadata
): CardColorsMetadata => ({
  cardBg: setImportant(metadata.cardBg),
  chipBg: setImportant(metadata.chipBg),
  textColor: setImportant(metadata.textColor),
  chipTextColor: setImportant(metadata.chipTextColor),
});

export const getCardColors = (
  courseType?: CourseType,
  courseHighlight?: boolean,
  isCoureStarted?: boolean
): CardColorsMetadata | undefined => {
  // Handle "isCoureStarted" as the highest priority
  if (isCoureStarted) {
    return applyImportantToMetadata(colorMapping.isCourseStarted);
  }

  const highlightType: CourseHighlight = courseHighlight
    ? "highlightedCourses"
    : "regularCourses";

  // If courseType is undefined, return undefined
  if (!courseType) return undefined;

  const metadata = colorMapping[highlightType]?.[courseType];

  // Apply !important to all styles if metadata is found, otherwise return undefined
  return metadata ? applyImportantToMetadata(metadata) : undefined;
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
