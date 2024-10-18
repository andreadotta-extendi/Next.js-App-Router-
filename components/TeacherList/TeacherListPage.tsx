"use client";
import React from "react";
import Layout from "../Shared/ui/Layout";
import { Grid, Typography } from "@mui/material";
import TeacherCard from "./Card/TeacherCard";

const TeacherListPage: React.FC = () => {
  const teachers = [
    {
      name: "John Doe",
      instruments: [{ name: "Guitar" }, { name: "Piano" }],
      imageUrl:
        "https://images.unsplash.com/photo-1512148709442-eee63c4f5326?q=80&w=5070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Jane Smith",
      instruments: [{ name: "Violin" }],
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1661380724908-95e5e98e47ba?q=80&w=5070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Alex Johnson",
      instruments: [{ name: "Drums" }, { name: "Bass" }],
      imageUrl:
        "https://images.unsplash.com/photo-1468817814611-b7edf94b5d60?q=80&w=1825&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Emily Davis",
      instruments: [{ name: "Flute" }],
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1682293779538-dc07a400e604?q=80&w=5070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <Layout isLogged>
      <div className="text-center mb-10">
        <Typography
          variant="h1"
          component="h1"
          color="textPrimary"
          className="text-center mb-4"
        >
          I nostri insegnanti
        </Typography>
        <Typography variant="s1" color="textSecondary" component="h2">
          Esplora il nostro corpo insegnanti
        </Typography>
      </div>

      <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-4 gap-2">
        <Typography variant="h3" component="p">
          Elenco insegnanti
        </Typography>
        <Typography variant="s1" component="p">
          {teachers.length} elementi
        </Typography>
      </div>

      <Grid container spacing={2}>
        {teachers.map((teacher, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <TeacherCard
              name={teacher.name}
              instruments={teacher.instruments}
              imageUrl={teacher.imageUrl}
              onClick={() => {
                // Handle click event, e.g., navigate to a detail page
                console.log(`${teacher.name} clicked`);
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Layout>
  );
};

export default TeacherListPage;
