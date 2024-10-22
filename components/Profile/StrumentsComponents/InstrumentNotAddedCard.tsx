import React from "react";
import { Button, Typography } from "@mui/material";
import { Add } from "@mui/icons-material";

interface InstrumentNotAddedCardProps {
  imageSrc: string;
  title: string;
}

const InstrumentNotAddedCard: React.FC<InstrumentNotAddedCardProps> = ({
  imageSrc,
  title,
}) => {
  return (
    <div className="bg-paper border border-action-divider rounded-lg w-full h-full">
      <div className="flex flex-col gap-2 justify-center p-2 w-full">
        <img
          src={imageSrc}
          alt={`${title} instrument`}
          className="w-[72px] h-auto m-auto"
        />
        <Typography
          variant="s2"
          component="p"
          className="mt-2 w-full text-center"
        >
          {title}
        </Typography>
        <Button size="medium" variant="text" color="primary" className="w-full">
          <Add />
          <Typography variant="button-l">Aggiungi</Typography>
        </Button>
      </div>
    </div>
  );
};

export default InstrumentNotAddedCard;
