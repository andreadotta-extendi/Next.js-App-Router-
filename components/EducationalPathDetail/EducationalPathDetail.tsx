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
import Layout from "../Shared/ui/Layout";
import ContentCard from "./Components/ContentCard";
import InfoCard from "./Components/InfoCard";
import { DetailEduPathProps } from "@/components/types/Course";
import { CourseData } from "@/components/types/Course";

// Utility function for instructor names
const getInstructorName = (instructors: CourseData["instructors"]) => {
  if (instructors.length === 1) {
    return instructors[0].name;
  } else if (instructors.length > 1) {
    return `${instructors.length} Insegnanti`;
  }
  return "";
};

const EducationalPathDetail: React.FC<DetailEduPathProps> = ({
  title,
  level,
  instructors = [], // Default to an empty array
  description,
  requirements,
}) => {
  return (
    <Layout isLogged>
      <Container maxWidth="lg">
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={4}
        >
          <Typography variant="h1" component="h1">
            {title}
          </Typography>
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={12} lg={8}>
            <Stack spacing={2}>
              <Box
                component="img"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9129cd4cb7d39654955dd5cbecc405e8ba084bb488eccfb7a247a0ee0ab7d236?placeholderIfAbsent=true&apiKey=64022e778ac9432c834a77987bf09f24"
                alt={`Cover for ${title} course`}
                loading="lazy"
                sx={{
                  objectFit: "contain",
                  borderRadius: 2,
                  aspectRatio: "1.83",
                }}
              />
              <Grid container spacing={2} className="w-full">
                <Grid item xs={12} md={3} spacing={2}>
                  <InfoCard title="Difficoltà">
                    <Chip
                      label={level}
                      size="medium"
                      color="primary"
                      variant="filled"
                    />
                  </InfoCard>
                </Grid>
                <Grid item xs={12} md={3}>
                  <InfoCard title="Numero Video">
                    <Typography variant="body1">45</Typography>
                  </InfoCard>
                </Grid>
                <Grid item xs={12} md={6}>
                  <InfoCard
                    title="Insegnanti"
                    button={
                      <Button
                        variant="outlined"
                        onClick={() => {
                          /* Show all instructors logic */
                        }}
                      >
                        Mostra tutti
                      </Button>
                    }
                  >
                    <Box display="flex" alignItems="center">
                      <AvatarGroup max={3}>
                        {Array.isArray(instructors) &&
                        instructors.length > 0 ? (
                          instructors.map((instructor, index) => (
                            <MUIAvatar
                              key={index}
                              src={instructor.avatarUrl}
                              alt={`${instructor.name}'s avatar`}
                              sx={{
                                height: 32,
                                width: 32,
                                borderColor: "#15151A",
                              }}
                            />
                          ))
                        ) : (
                          <Typography variant="body2">
                            Nessun insegnante disponibile
                          </Typography>
                        )}
                      </AvatarGroup>
                      <Typography variant="body2" ml={2}>
                        {getInstructorName(instructors)}
                      </Typography>
                    </Box>
                  </InfoCard>
                </Grid>
              </Grid>
            </Stack>
          </Grid>
          <Grid item xs={12} lg={4}>
            <Stack spacing={2}>
              <InfoCard>
                <Typography variant="body1">{description}</Typography>
              </InfoCard>

              <InfoCard title="Requisiti">
                <Typography variant="body1">{requirements}</Typography>
              </InfoCard>

              <Button variant="contained" color="primary" fullWidth>
                <Typography variant="button">Accedi a tutti i corsi</Typography>
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

export default EducationalPathDetail;
