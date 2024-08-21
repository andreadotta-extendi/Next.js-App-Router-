import theme from "@/app/theme";
import {
  Avatar,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Typography,
} from "@mui/material";
import React from "react";

interface CourseCardProps {
  imageSrc?: string;
  chipLabel?: string;
  chipColor?: "primary" | "secondary" | "tertiary";
  videoCount?: number;
  title?: string;
  tags?: string[]; // tags should be an array
  instructor?: string;
  courseType?: "program" | "percorsi" | "serie"; // Renamed from `type` to `courseType`
}

const CourseCard: React.FC<CourseCardProps> = ({
  imageSrc,
  chipLabel,
  chipColor = "primary",
  videoCount,
  title,
  tags = [],
  instructor,
  courseType, // Updated usage
}) => {
  return (
    <Card
      className="min-w-[300px]"
      sx={{
        boxShadow: "none",
        backgroundColor:
          (courseType === "program" ? "#6C7AFF" : undefined) || // primary main - theme.palette.primary.main
          (courseType === "percorsi" ? "#B3EEFF" : undefined) || // secondary main
          (courseType === "serie" ? "#FF6043" : undefined), // complementary main
      }}
    >
      <div className="flex flex-col w-full rounded">
        <CardMedia component="img" image={imageSrc} alt={title} className="object-cover relative w-full h-[196px]" />
          {chipLabel && (
            <Chip
              label={chipLabel}
              size="small"
              color={chipColor}
              variant="filled"
              className="absolute top-4 left-4 min-h-[24px]"
            />
          )}
          {videoCount !== undefined && (
            <Chip
              label={`${videoCount} video${videoCount > 1 ? "s" : ""}`}
              size="medium"
              color="primary"
              variant="outlined"
              className="absolute bottom-[19px] right-[17px]"
              avatar={<Avatar />}
            />
          )}
          <CardContent className="w-full" style={{ color: (courseType === "percorsi" ? "#15151A" : "#E2E3E9") }}>
            <Typography variant="h5" className="gap-2.5 self-stretch w-full">
              {title}
            </Typography>
            <div className="flex flex-wrap gap-2">
              {Array.isArray(tags) &&
                tags.map((tag, index) => (
                  <Chip
                    key={index}
                    label={tag}
                    size="small"
                    color="primary"
                    variant="outlined"
                    className="px-1 py-1 rounded-md border border-solid border-zinc-200 min-h-[24px]"
                  />
                ))}
            </div>
            <div className="flex items-center mt-4">
              <Avatar className="mr-2" sx={{ height: "32px", width: "32px" }} />
              <Typography variant="body2">{instructor}</Typography>
            </div>
          </CardContent>
      </div>
    </Card>
  );
};

export default CourseCard;
