"use client";
import { Button, Typography } from "@mui/material";
import React from "react";
import ChevronLeftFilled from "@mui/icons-material/ChevronLeft";
import ChevronRightFilled from "@mui/icons-material/ChevronRight";

type SubNavbarProps = {
  leftButton?: boolean;
  rightButton?: boolean;
};

const SubNavbar: React.FC<SubNavbarProps> = ({ leftButton, rightButton }) => {
  return (
    <header className="flex justify-center items-center px-12 py-4 w-full justify-between">
      <div>
        {leftButton && (
          <Button
            size="large"
            variant="text"
            color="primary"
            className="flex-1 shrink my-auto"
          >
            <ChevronLeftFilled />
            <Typography variant="button-l" className="hidden md:block">
              Indietro
            </Typography>
          </Button>
        )}
      </div>
      <div>
        {rightButton && (
          <Button
            size="large"
            variant="text"
            color="primary"
            className="flex-1 shrink my-auto"
          >
            <Typography variant="button-l" className="hidden md:block">
              Avanti
            </Typography>
            <ChevronRightFilled />
          </Button>
        )}
      </div>
    </header>
  );
};

export default SubNavbar;
