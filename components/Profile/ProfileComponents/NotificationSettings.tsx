"use client";
import React from "react";
import NotificationToggle from "./NotificationToggle";
import FormCard from "./FormCard";

const notificationOptions = [
  { label: "Novità e aggiornamenti" },
  { label: "Promozioni" },
  { label: "Aggiornamenti della community" },
  { label: "Notifica di rinnovo" },
];

const NotificationSettings: React.FC = () => {
  return (
    <FormCard title="Notifiche">
      <div className="flex flex-wrap gap-x-10 gap-y-4 items-center w-full">
        {notificationOptions.map((option, index) => (
          <NotificationToggle
            key={index}
            label={option.label}
            checked={false}
            onChange={function (
              event: React.ChangeEvent<HTMLInputElement>
            ): void {
              throw new Error("Function not implemented.");
            }}
          />
        ))}
      </div>
    </FormCard>
  );
};

export default NotificationSettings;
