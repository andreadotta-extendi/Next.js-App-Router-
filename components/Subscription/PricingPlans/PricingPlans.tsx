"use client";
import React from "react";
import PricingCard from "./PricingCard";
import { PricingPlan } from "./types";
import { Grid } from "@mui/material";

const pricingPlans: PricingPlan[] = [
  {
    title: "Mensile",
    price: "€29,99",
    description: "Pagamento mensile",
    buttonText: "Scegli",
    disclaimer: "Garanzia rimborso 30 giorni. Disdici quando vuoi",
    isPopular: false,
    discountCode: null,
    variant: "default",
  },
  {
    title: "Trimestrale",
    price: "€8,30",
    originalPrice: "€16,60",
    description: "Per mese, pagamento annuale €24,90",
    buttonText: "Scegli",
    disclaimer: "Garanzia rimborso 30 giorni. Disdici quando vuoi",
    isPopular: true,
    discountCode: "SPRING24TRIM",
    variant: "highlighted",
  },
  {
    title: "Annuale",
    price: "€11,49",
    originalPrice: "€16,40",
    description: "Per mese, pagamento annuale €137,90",
    buttonText: "Scegli",
    disclaimer: "Garanzia rimborso 30 giorni. Disdici quando vuoi",
    isPopular: true,
    discountCode: "SPRING24TRIM",
    variant: "default",
  },
];

const PricingPlans: React.FC = () => {
  return (
    <Grid
      container
      spacing={{ md: 2 }}
      rowSpacing={{ xs: 2 }}
      className="w-full m-auto"
      alignItems="stretch"
    >
      {pricingPlans.map((plan, index) => (
        <Grid key={index} item xs={12} md={4}>
          <PricingCard {...plan} />
        </Grid>
      ))}
    </Grid>
  );
};

export default PricingPlans;
