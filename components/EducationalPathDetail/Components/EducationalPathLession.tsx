"use client";
import {
  AvatarGroup,
  Avatar as MUIAvatar,
  Chip,
  Button,
  Typography,
  Box,
  Container,
  Grid,
  Stack,
} from "@mui/material";
import Layout from "../../Shared/ui/Layout";
import InfoCard from "./InfoCard";
import { DetailEduPathProps } from "@/components/types/Course";
import { CourseData } from "@/components/types/Course";
import { ListRounded } from "@mui/icons-material";

const EducationalPathLession: React.FC<DetailEduPathProps> = ({
  title,
  level,
  instructors = [], // Default to an empty array
  description,
  requirements,
}) => {
  return <>ciao</>;
};

export default EducationalPathLession;
