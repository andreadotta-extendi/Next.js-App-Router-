import React from "react";
import PersonalDataForm from "../Form/PersonalDataForm";
import PaymentMethodForm from "../Form/PaymentMethodForm";
import SubscriptionSummary from "./SubscriptionSummary";
import { Button, Typography } from "@mui/material";

const PaymentSection: React.FC = () => {
  return (
    <div className="flex flex-wrap lg:flex-nowrap flex-col-reverse lg:flex-row justify-center items-center lg:items-start lg:max-w-[1024] gap-6 items-start">
      <div className="w-full max-w-[600px]">
        <PersonalDataForm />
        <PaymentMethodForm />
        <div className="flex flex-wrap gap-2 justify-center items-center mt-2 w-full">
          <img
            loading="lazy"
            src="assets/checkout/ssl-secure.svg"
            alt="ssl secure"
          />
          <Typography color="textSecondary" variant="caption-500">
            Garanzia rimborso 30 giorni. Disdici quando vuoi
          </Typography>
        </div>
      </div>
      <SubscriptionSummary />
    </div>
  );
};

export default PaymentSection;
