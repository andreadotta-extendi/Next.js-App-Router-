import {
  AvatarGroup,
  Button,
  Avatar as MUIAvatar,
  Typography,
} from "@mui/material";
import { AvatarProps } from "@/components/types/Avatar";
import { ListRounded } from "@mui/icons-material";
import { CourseData } from "@/components/types/Course";

interface TeacherCardProps {
  title: string;
  instructors: CourseData["instructors"];
}

// TODO: IMPORT FROM UTILS
const getInstructorName = (instructors: CourseData["instructors"]) => {
  if (instructors.length === 1) {
    return instructors[0].name;
  } else if (instructors.length > 1) {
    return `${instructors.length} Insegnanti`;
  } else {
    return "";
  }
};

const TeacherCard: React.FC<TeacherCardProps & AvatarProps> = ({
  title,
  instructors,
}) => {
  return (
    <div className="flex flex-col gap-2 p-6 rounded-2xl bg-paper">
      <div className="flex">
        <Typography variant="s1" color="textSecondary">
          {title}
        </Typography>

        <Button color="primary" variant="text">
          <ListRounded />
          Mostra Tutti
        </Button>
      </div>

      {/* AvatarGroup for displaying the teacher avatars */}
      <AvatarGroup max={3}>
        {Array.isArray(instructors) &&
          instructors.map((instructor, index) => (
            <MUIAvatar
              key={index} // Provide a key for each avatar
              src={instructor.avatarUrl}
              alt="Avatar"
              className="mr-2"
              sx={{
                height: "32px",
                width: "32px",
                borderColor: "#15151A",
              }}
            />
          ))}
      </AvatarGroup>

      {/* Display instructor names */}
      <Typography variant="body2">{getInstructorName(instructors)}</Typography>
    </div>
  );
};

export default TeacherCard;
