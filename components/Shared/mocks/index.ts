import {
  CourseData,
  Courses,
  CourseHighlight,
  DetailEduPathProps,
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
        profession: faker.person.jobArea(),
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

// Function to generate a single DetailEduPathProps with richer content
export function generateDetailEduPathProps(): DetailEduPathProps {
  const course = generateCourse(); // Get a generated course

  return {
    title: `${course.title} - A Deep Dive into ${chance.pickone(
      course.genres
    )}`, // Enhanced course title with genre
    lessonCount: course.lessonCount, // Total number of lessons
    level: `${course.level} - Suitable for ${
      course.level === "base"
        ? "beginners"
        : course.level === "intermedio"
        ? "intermediate learners"
        : "advanced musicians"
    }`, // Enhanced level with details
    genres: course.genres, // Selected genres
    duration: `${course.duration} - Over ${course.lessonCount} lessons and ${course.videoCount} videos`, // Duration with extra detail
    instructors: course.instructors.map((instructor) => ({
      ...instructor,
      bio: faker.lorem.sentences(2), // Adding a short bio for each instructor
      expertise: chance.pickone([
        "Guitar",
        "Drums",
        "Piano",
        "Vocals",
        "Songwriting",
      ]), // Adding an expertise area for the instructor
    })), // Instructors with bios and expertise
    courseType: `${
      course.courseType
    } - Perfect for those looking for structured learning in ${course.genres.join(
      ", "
    )}`, // Enhanced course type with context
    description: `${
      course.description
    } This course will guide you through essential techniques in ${chance.pickone(
      course.genres
    )}. You'll learn through practical exercises, breakdowns of classic songs, and tips from experienced instructors. Whether you're just starting out or looking to hone your skills, this course is designed to help you progress.`,
    requirements: `To take this course, you need ${chance.pickone([
      "a basic understanding of music theory",
      "some experience with your instrument",
      "an interest in improving your skills",
      "a desire to master advanced techniques",
    ])}. You should also have access to ${chance.pickone([
      "a guitar or keyboard",
      "basic recording equipment",
      "sheet music",
      "a metronome",
    ])}.`,
  };
}

// Function to generate an array of DetailEduPathProps
export function generateDetailEduPaths(
  numberOfPaths: number
): DetailEduPathProps[] {
  return Array.from({ length: numberOfPaths }, generateDetailEduPathProps); // Generate a specified number of educational paths
}

// Example usage
const sampleDetailEduPaths = generateDetailEduPaths(10); // Generates an array of 10 mock educational paths
console.log(sampleDetailEduPaths); // Log the generated paths for inspection
