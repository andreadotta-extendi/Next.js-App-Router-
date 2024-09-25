import CheckoutEmailSentPage from "@/components/Payment/CheckoutEmailSentPage";
import React from "react";

export default async function Page(props: { params: { page: any[] } }) {
  return (
    <>
      <CheckoutEmailSentPage />
    </>
  );
}
