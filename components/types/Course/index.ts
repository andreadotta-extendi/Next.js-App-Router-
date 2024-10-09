// Interfaces and Types
export type Courses = CourseData[];

export type CategoryTags =
  | "In evidenza"
  | "Impara da zero"
  | "Ultime uscite"
  | "Più seguiti"
  | "Masterclass"
  | string;

export interface CourseData {
  isCourseStarted?: boolean;
  courseHighlight?: CourseHighlight;
  title?: string;
  level?: DifficultyLevel;
  genres?: string[];
  instructors: {
    name: string;
    avatarUrl: string;
    profession?: string;
  }[];
  description: string;
  videoUrl: string;
  logoUrl: string;
  lessonCount: number;
  duration: string;
  progressValue: number;
  status: "completed" | "uncompleted";
  imageSrc?: string;
  videoCount?: number;
  coursePercentage?: number;
  categoryTags?: CategoryTags[];
  courseType?: CourseType;
  highlighted?: boolean;
}

export interface ModalMetadataProps
  extends Pick<
    CourseData,
    | "lessonCount"
    | "level"
    | "genres"
    | "duration"
    | "instructors"
    | "highlighted"
  > {}

export interface ModalDetailsProps
  extends Pick<
    CourseData,
    | "title"
    | "level"
    | "genres"
    | "instructors"
    | "description"
    | "videoUrl"
    | "logoUrl"
    | "lessonCount"
    | "duration"
    | "progressValue"
    | "status"
  > {
  dialogIsOpen: boolean;
  dialogToggle: () => void;
}

export interface CourseCardProps
  extends Pick<
    CourseData,
    | "title"
    | "level"
    | "genres"
    | "instructors"
    | "imageSrc"
    | "videoCount"
    | "coursePercentage"
    | "categoryTags"
    | "courseType"
    | "highlighted"
    | "courseHighlight"
  > {}

export interface DetailEduPathProps
  extends Pick<
    CourseData,
    | "title"
    | "videoCount"
    | "level"
    | "genres"
    | "instructors"
    | "courseType"
    | "lessonCount"
  > {
  description: string;
  requirements: string;
}

export type CourseType = "program" | "percorsi" | "serie";
export type DifficultyLevel =
  | "mai suonato"
  | "base"
  | "intermedio"
  | "avanzato";
export type CourseHighlight = "highlightedCourses" | "regularCourses";
export type CardColorsMetadata = {
  chipBg: string;
  cardBg: string;
  chipTextColor: string;
  textColor: string;
};
