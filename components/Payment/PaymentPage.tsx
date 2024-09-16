import React from "react";
import Layout from "../Shared/ui/Layout";
import { Grid, Typography } from "@mui/material";
import CourseCard from "../Catalog/CourseCard";
import { generateCourse } from "../Shared/mocks";
import PaymentSection from "./PaymentSection";

const SubscriptionPage: React.FC = () => {
  const courseData = [
    {
      title: "I corsi",
      subtitle: "Sono sempre tutti inclusi nell'abbonamento.",
      features: [
        "Lezioni passo-passo",
        "Il catalogo delle lezioni si espande ogni settimana",
        "Difficoltà crescente: da zero, principiante, intermedio, avanzato",
      ],
      titleColor: "text-indigo-500",
    },
    {
      title: "Le masterclass",
      subtitle: "Lezioni in diretta con interazione insegnante-studenti",
      features: [
        "Lezioni di approfondimento",
        "Lezioni di approfondimento",
        "Ottieni le risposte alle tue domande",
      ],
      titleColor: "text-sky-200",
    },
  ];

  const course = generateCourse();

  return (
    <Layout hasSubNavbar leftButtonSubNavbar>
      <div className="relative space-y-10">
        <Typography variant="h1" component="h1" className="text-center mb-8">
          Checkout
        </Typography>
        <PaymentSection />
      </div>
    </Layout>
  );
};

export default SubscriptionPage;
