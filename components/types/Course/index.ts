export type Courses = CourseData[];

export type CategoryTags =
  | "In evidenza"
  | "Impara da zero"
  | "Ultime uscite"
  | "Più seguiti"
  | "Masterclass"
  | string;

export interface CourseData {
  title?: string;
  level?: DifficultyLevel;
  genres?: string[];
  instructors: {
    name: string;
    avatarUrl: string;
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
  categoryTags?: CategoryTags[];
  courseType?: CourseType;
  highlighted?: boolean;
}

export interface ModalMetadataProps
  extends Pick<
    CourseData,
    "lessonCount" | "level" | "genres" | "duration" | "instructors"
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
    | "categoryTags"
    | "courseType"
    | "highlighted"
  > {}

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
