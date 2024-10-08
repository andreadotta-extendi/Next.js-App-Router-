import React from "react";

interface ContentCardProps {
  description: string;
  requirements: string;
}

const ContentCard: React.FC<ContentCardProps> = ({
  description,
  requirements,
}) => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col p-6 w-full text-base font-medium leading-6 rounded-2xl bg-neutral-900 text-zinc-200 max-md:px-5">
        <p>{description}</p>
      </div>
      <div className="flex flex-col p-6 mt-4 w-full rounded-2xl bg-neutral-900 max-md:px-5">
        <h2 className="text-lg font-bold leading-loose text-gray-400">
          Requisiti
        </h2>
        <p className="mt-2 text-base font-medium leading-6 text-zinc-200">
          {requirements}
        </p>
      </div>
    </div>
  );
};

export default ContentCard;
