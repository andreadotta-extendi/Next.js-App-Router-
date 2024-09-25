import PaymentDeniedPage from "@/components/Payment/PaymentDeniedPage";
import React from "react";

export default async function Page(props: { params: { page: any[] } }) {
  return (
    <>
      <PaymentDeniedPage />
    </>
  );
}
