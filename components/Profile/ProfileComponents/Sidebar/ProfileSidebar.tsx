import React from "react";
import { List, Button } from "@mui/material";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import SidebarItem from "./SidebarItem"; // Assuming SidebarItem is a custom component

interface SidebarProps {
  items: Array<{
    label: string;
    isActive?: boolean;
  }>;
}

const ProfileSidebar: React.FC<SidebarProps> = ({ items }) => {
  return (
    <nav className="bg-paper w-[264px] py-4 flex flex-col absolute inset-y-0 left-0">
      <List style={{ flexGrow: 1 }}>
        {items.map((item, index) => (
          <SidebarItem
            key={index}
            label={item.label}
            isActive={item.isActive}
          />
        ))}
      </List>

      <Button
        fullWidth
        startIcon={<LogoutRoundedIcon />}
        style={{ marginTop: "auto", padding: "12px 24px" }}
      >
        Logout
      </Button>
    </nav>
  );
};

export default ProfileSidebar;
