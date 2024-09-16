import PaymentPage from "@/components/Payment/PaymentPage";
import React from "react";

export default async function Page(props: { params: { page: any[] } }) {
  return (
    <>
      <PaymentPage />
    </>
  );
}
