import SubscriptionPage from "@/components/Subscription/SubscriptionPage";
import React from "react";

export default async function Page(props: { params: { page: any[] } }) {
  return (
    <>
      <SubscriptionPage />
    </>
  );
}
