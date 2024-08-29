import EmailSentPage from "@/components/Auth/PasswordReset/EmailSentPage";
import React from "react";
// See the full code: https://www.builder.io/c/docs/integrate-section-building?codeFramework=nextApp#add-an-announcement-bar-section-to-your-app

// Put your API key here

export default async function Page(props: { params: { page: any[] } }) {
  return (
    <>
      {/* Render the Builder page */}
      <EmailSentPage />
    </>
  );
}
