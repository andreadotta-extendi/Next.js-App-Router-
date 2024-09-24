import React from "react";
import Layout from "../Shared/ui/Layout";
import PaymentSection from "./Checkout/PaymentSection";
import Heading from "./Shared/Heading";

const SubscriptionPage: React.FC = () => {
  return (
    <Layout hasSubNavbar leftButtonSubNavbar>
      <div className="relative space-y-10">
        <Heading title="Checkout" />
        <PaymentSection />
      </div>
    </Layout>
  );
};

export default SubscriptionPage;
