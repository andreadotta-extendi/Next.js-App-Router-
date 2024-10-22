import React from "react";
import Layout from "../Shared/ui/Layout";
import PersonalInfo from "./ProfileComponents/PersonalInfo";
import { Button, Box, Typography } from "@mui/material";
import NotificationSettings from "./ProfileComponents/NotificationSettings";
import ProfileSidebar from "./ProfileComponents/Sidebar/ProfileSidebar";

const ProfilePage: React.FC = () => {
  // Define the sidebar items
  const sidebarItems = [
    { label: "Overview", isActive: true },
    { label: "Settings", isActive: false },
    { label: "Activity", isActive: false },
  ];
  return (
    <>
      <Layout isProfile={true}>
        <div className="relative">
          {/* <ProfileSidebar items={sidebarItems} /> */}
          <div className="px-4 max-w-[1440px] m-auto">
            <div className="space-y-6">
              <Typography variant="h1" component="h1">
                Profilo
              </Typography>

              <Box sx={{ mt: 2 }}>
                <PersonalInfo />
              </Box>

              <Box sx={{ mt: 2 }}>
                <NotificationSettings />
              </Box>

              <div className="flex flex-1 justify-end">
                <Button
                  size="medium"
                  variant="contained"
                  color="primary"
                  disabled
                >
                  <Typography variant="button-l">Salva modifiche</Typography>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default ProfilePage;
