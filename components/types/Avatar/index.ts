import { CourseData } from "../Course";

export interface AvatarProps
  extends Pick<CourseData, "instructors" | "courseType" | "highlighted"> {}
