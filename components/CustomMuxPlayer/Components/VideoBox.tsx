"use client";
import { Box, Typography, Chip } from "@mui/material";
import CheckRounded from "@mui/icons-material/CheckRounded"; // Assuming you're using MUI icons

interface BoxItemProps {
  status: "active" | "default" | "seen";
  title: string;
  image: string;
  duration: string;
}

const VideoBox = ({ status, title, image, duration }) => {
  return (
    <Box
      className={`rounded-xl gap-2 ${
        status === "active" ? "bg-neutral-main" : ""
      }`}
    >
      <div className="flex items-center">
        <div
          className="overflow-hidden rounded-lg h-[80px] w-[90px] relative"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            position: "relative",
          }}
        >
          {/* Conditionally render "seen" overlay */}
          {status === "seen" && (
            <div
              className="absolute inset-0 text-primary"
              style={{ backgroundColor: "#20212795" }}
            >
              <div className="flex flex-col items-center justify-center h-full gap-1">
                <CheckRounded className="h-[32px] w-[32px]" />
                <Typography variant="caption-500">Guardato</Typography>
              </div>
            </div>
          )}
        </div>

        <div className="pl-3">
          <Typography variant="s2" className="block mb-1">
            {title}
          </Typography>
          <Chip
            size="small"
            className={`flex-none ${
              status === "active" || status === "seen" ? "bg-neutral-main" : ""
            }`}
            label={duration}
          />
        </div>
      </div>
    </Box>
  );
};

export default VideoBox;
