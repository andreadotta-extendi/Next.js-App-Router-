"use client";
import React from "react";
import SubscriptionOfferCard from "./SubscriptionOfferCard";
import Layout from "../Shared/ui/Layout";
import { Grid, Typography } from "@mui/material";
import CourseCard from "../Catalog/CourseCard";
import { generateCourse } from "../Shared/mocks";
import PricingPlans from "./PricingPlans/PricingPlans";

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
    <Layout isLogged>
      <div className="relative space-y-10">
        <img
          src="assets/subscription/bg-abbonamento.svg"
          className="hidden lg:block absolute inset-x-0 m-auto -z-10 top-[-50px]"
        />

        <Typography variant="h1" component="h1" className="text-center mb-8">
          Scegli il piano adatto a te
        </Typography>

        <div className="max-w-[330px] relative justify-center mx-auto pb-10">
          <div className="max-w-[330px] absolute left-[-20px] md:left-[-100px] lg:left-[-200px] top-0 -z-10 rotate-[-6deg] scale-90">
            <CourseCard {...course} />
          </div>
          <div className="max-w-[330px] z-20">
            <CourseCard {...course} />
          </div>
          <div className="max-w-[330px] absolute right-[-20px] md:right-[-100px] lg:right-[-200px] top-0 -z-10 rotate-[6deg] scale-90">
            <CourseCard {...course} />
          </div>
        </div>

        <div className="space-y-8 pb-16">
          <div className="text-center">
            <Typography variant="h3" component="h3" className="mb-2">
              Tutto in un unico abbonamento
            </Typography>
            <Typography
              variant="body-500"
              component="p"
              className="text-text-secondary"
            >
              Ecco tutto ciò che mettiamo a disposizione dei nostri studenti
              iscritti a Vibly
            </Typography>
          </div>
          <Grid
            container
            spacing={{ md: 2 }}
            rowSpacing={{ xs: 2 }}
            className="w-full max-w-[1136px] m-auto"
            alignItems="stretch"
          >
            {courseData.map((course, index) => (
              <Grid key={index} item xs={12} md={6}>
                <SubscriptionOfferCard
                  title={course.title}
                  subtitle={course.subtitle}
                  features={course.features}
                  titleColor={course.titleColor}
                />
              </Grid>
            ))}
          </Grid>
        </div>

        <div className="space-y-4">
          <div className="space-y-10">
            <Typography variant="h2" component="h2" className="text-center">
              Abbonamenti disponibili
            </Typography>
            <PricingPlans />
          </div>
          <Typography
            variant="caption-500"
            component="p"
            color="text-secondary"
            textAlign="center"
          >
            Pagamento sicuro. Offerta valida solo per i nuovi abbonati a
            vibly.tv. Il rimborso non si applica sui rinnovi mensili e annuali.
          </Typography>
        </div>
      </div>
    </Layout>
  );
};

export default SubscriptionPage;
