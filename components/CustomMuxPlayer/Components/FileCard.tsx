"use client";
import { Box, Typography, Button } from "@mui/material";
import { DownloadRounded } from "@mui/icons-material";
import { ReactElement, ElementType } from "react";

interface FileCardProps {
  icon: ElementType;
  files: { name: string }[];
}

const FileCard: React.FC<FileCardProps> = ({ icon: Icon, title, files }) => (
  <Box className="bg-paper rounded-lg p-4">
    <div className="flex items-center gap-2 text-text-secondary pb-2">
      <Icon /> {/* Rendering the passed Icon component */}
      <Typography variant="h5">{title}</Typography>
    </div>
    {files.map((file, index) => (
      <div className="flex items-center justify-between py-2" key={index}>
        <Typography variant="s2">{file.name}</Typography>
        <Button
          variant="outlined"
          color="primary"
          size="small"
          className="gap-2"
          sx={{ padding: "10px 16px !important" }}
        >
          <DownloadRounded className="w-[16px] h-[16px]" />
          <Typography variant="button-s">Download</Typography>
        </Button>
      </div>
    ))}
  </Box>
);

export default FileCard;
