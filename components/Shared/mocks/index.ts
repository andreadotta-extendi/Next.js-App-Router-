import {
  CourseData,
  Courses,
  CourseHighlight,
} from "@/components/types/Course"; // Ensure these types are defined appropriately
import { faker } from "@faker-js/faker";
import { Chance } from "chance";

const chance = new Chance();

// Function to generate a single course
export function generateCourse(): CourseData {
  const lessonCount = chance.integer({ min: 5, max: 20 });
  const videoCount = chance.integer({ min: 1, max: 10 });
  const videoPercentage = chance.integer({ min: 0, max: 100 });
  const isCourseStarted = videoPercentage > 0; // Course is considered started if videoPercentage is greater than 0

  return {
    title: faker.music.songName(), // Random song title for the course
    level: chance.pickone(["mai suonato", "base", "intermedio", "avanzato"]), // Random difficulty level
    genres: chance.pickset(
      ["Rock", "Blues", "Classico", "Jazz", "Metal", "Pop"],
      chance.integer({ min: 1, max: 3 }) // Random selection of genres
    ),
    instructors: Array.from(
      { length: chance.integer({ min: 1, max: 3 }) }, // Random number of instructors
      () => ({
        name: faker.person.fullName(), // Random instructor name
        avatarUrl: faker.image.avatar(), // Random avatar image for the instructor
      })
    ),
    description: faker.lorem.paragraph(), // Random course description
    videoUrl: faker.internet.url(), // Random video URL
    logoUrl: faker.image.url({ width: 150, height: 150 }), // Random logo image
    lessonCount, // Total number of lessons
    duration: `${chance.integer({ min: 30, max: 120 })} min`, // Random duration between 30 and 120 minutes
    progressValue: videoPercentage, // Aligning progress with videoPercentage
    status: videoPercentage === 100 ? "completed" : "uncompleted", // Course status based on progress
    imageSrc: faker.image.url({ width: 300, height: 300 }), // Random course image
    videoCount, // Total number of videos
    videoPercentage, // Progress percentage
    categoryTags: chance.pickset(
      [
        "In evidenza",
        "Impara da zero",
        "Ultime uscite",
        "Più seguiti",
        "Masterclass",
      ],
      chance.integer({ min: 1, max: 3 }) // Random selection of category tags
    ),
    courseType: chance.pickone(["program", "percorsi", "serie"]), // Random course type
    courseHighlight: chance.weighted<CourseHighlight>(
      ["highlightedCourses", "regularCourses"],
      [0.8, 0.2] // chance for highlighted and regular courses
    ),
  };
}

// Function to generate an array of courses
export function generateCourses(numberOfCourses: number): Courses {
  return Array.from({ length: numberOfCourses }, generateCourse); // Generate a specified number of courses
}

// Example usage
const sampleCourses = generateCourses(10); // Generates an array of 10 mock courses
console.log(sampleCourses); // Log the generated courses for inspection
