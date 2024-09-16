import PaymentConfirmed from "@/components/Payment/PaymentConfirmed";
import React from "react";

export default async function Page(props: { params: { page: any[] } }) {
  return (
    <>
      <PaymentConfirmed />
    </>
  );
}
