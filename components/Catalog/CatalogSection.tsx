import React from "react";
import { IconButton,Modal,Typography } from "@mui/material";
import CourseCard from "./CourseCard";
import { ChevronLeftRounded, ChevronRightRounded } from "@mui/icons-material";
import ModalDetails from "./ModalDetails/ModalDetails";

interface CategorySectionProps {
  title: string;
  hasLink?: boolean;
}

export const CatalogSection: React.FC<CategorySectionProps> = ({ title, hasLink }) => {
  return (
    <section className="w-full">
      <div className="flex flex-wrap gap-4 justify-between items-center">
        <div className="flex items-center gap-2">
          <Typography variant="h3" className="self-stretch my-auto">
            {title}
          </Typography>
          {hasLink && 
            <IconButton>
              <ChevronRightRounded />
            </IconButton>
          }
        </div>
        <div className="flex gap-2 items-center self-stretch my-auto">
         <IconButton color="inherit" disabled>
            <ChevronLeftRounded />
          </IconButton>
          <IconButton color="inherit">
            <ChevronRightRounded />
          </IconButton>
        </div>
      </div>
      <div className="flex gap-4 mt-6">
        <ModalDetails 
          title={"Session Man: La chitarra in Studio di  Registrazione"}
          description={"Giuvazza Maggiore, grazie alla sua grande esperienza da Session Man, ci guida nel mondo della chitarra in studio e non solo. L'obiettivo di questa serie è rendere le nostre parti di chitarra interessanti e funzionali. Ogni genere musicale ha bisogno di un diverso tipo di suono, di fraseggio e di intenzione; Giuvazza analizza questi aspetti e li declina in vari ambiti: pop, rock, funk. Se vuoi imparare a scrivere le chitarre come i veri Session Men, questa è la Serie Didattica che fa per te."}
          videoUrl={"https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm"}
          logoUrl={"logo"}
          lessonCount={0}
          duration={"2h 15min"}
          level={"base"}
          genre={"Jazz"}
          instructor={{
            name: "Giuvazza Maggiore",
            avatarUrl: "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }} 
          progressValue={50}
          status={"completed"} 
        />
        <CourseCard
          imageSrc="https://images.unsplash.com/photo-1580832945253-9a8f87b606f2?q=80&w=2893&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          videoCount={19}
          title="Chitarra da zero"
          tags={["Jazz", "Pop", "Rock"]}
          instructor="Andrea Mazzanti"
          courseType="serie"
          avatar={["https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?q=80&w=3486&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
          "https://images.unsplash.com/photo-1706885093476-b1e54f3b7496?q=80&w=3840&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
          "https://images.unsplash.com/photo-1640951613773-54706e06851d?q=80&w=2967&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"]}
          level="avanzato"
          highlighted={true}
        />
      </div>
    </section>
  );
};
