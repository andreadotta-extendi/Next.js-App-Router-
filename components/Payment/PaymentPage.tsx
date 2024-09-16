import React from "react";
import Layout from "../Shared/ui/Layout";
import { Typography } from "@mui/material";
import PaymentSection from "./Checkout/PaymentSection";

const SubscriptionPage: React.FC = () => {
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
