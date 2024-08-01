import React from "react";
import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from '@/components/builder';
// See the full code: https://www.builder.io/c/docs/integrate-section-building?codeFramework=nextApp#add-an-announcement-bar-section-to-your-app


// Put your API key here
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export default async function Page(props: { params: { page: any[]; }; }) {
  const content = await builder
    .get("page", {
      userAttributes: {
        urlPath: "/" + (props?.params?.page?.join("/") || ""),
      },
    })
    .toPromise();
    console.log("PAGE")
  return (
    <>
      {/* Render the Builder page */}
      <RenderBuilderContent content={content} model={"page"} />
    </>
  );
}
