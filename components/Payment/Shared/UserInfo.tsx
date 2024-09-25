import React from "react";
import { Typography } from "@mui/material";

export interface UserInfo {
  firstName: string;
  email: string;
}

const UserInfo: React.FC<UserInfo> = ({ firstName, email }) => {
  return (
    <div className="flex flex-col p-6 w-full rounded-2xl bg-paper max-md:px-5">
      <Typography variant="h3" component="h3" color="textPrimary">
        Ciao {firstName}
      </Typography>
      <Typography variant="s1" color="textSecondary">
        {email}
      </Typography>
    </div>
  );
};

export default UserInfo;
