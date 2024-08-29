import { CourseData, Courses } from "@/components/types/Course";
import { faker } from "@faker-js/faker";
import { Chance } from "chance";
const chance = new Chance();
export function generateCourse(): CourseData {
  return {
    title: faker.music.songName(),
    level: chance.pickone(["mai suonato", "base", "intermedio", "avanzato"]),
    genres: chance.pickset(
      ["Rock", "Blues", "Classico", "Jazz", "Metal", "Pop"],
      chance.integer({ min: 1, max: 3 })
    ),
    instructors: [
      { name: faker.name.fullName(), avatarUrl: faker.image.avatar() },
    ],
    description: faker.lorem.paragraph(),
    videoUrl: faker.internet.url(),
    logoUrl: faker.image.imageUrl(150, 150, "music"),
    lessonCount: chance.integer({ min: 5, max: 20 }),
    duration: `${chance.integer({ min: 30, max: 120 })} min`,
    progressValue: chance.integer({ min: 0, max: 100 }),
    status: chance.pickone(["completed", "uncompleted"]),
    imageSrc: faker.image.imageUrl(300, 300, "music"),
    videoCount: chance.integer({ min: 1, max: 10 }),
    categoryTags: chance.pickset(
      [
        "In evidenza",
        "Impara da zero",
        "Ultime uscite",
        "Più seguiti",
        "Masterclass",
      ],
      chance.integer({ min: 1, max: 3 })
    ),
    courseType: chance.pickone(["program", "percorsi", "serie"]),
    highlighted: chance.bool(),
  };
}
export function generateCourses(numberOfCourses: number): Courses {
  return Array.from({ length: numberOfCourses }, generateCourse);
}
