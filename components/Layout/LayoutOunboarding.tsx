/**
 * This code was generated by Builder.io.
 */
import React from "react";
import HeaderOnboarding from "./HeaderOnboarding";

interface LayoutProps {
  headerLeftButton?: boolean;
  headerRightButton?: boolean;
  children: React.ReactNode;
  stepsPage?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ headerLeftButton, headerRightButton, stepsPage, children }) => {
  return (
    <div className="flex flex-col lg:h-screen">
      <HeaderOnboarding leftButton={headerLeftButton} rightButton={headerRightButton} />
        <main className={`${!stepsPage && 'flex flex-col lg:justify-center items-center'} py-16 px-4`} style={{height: `calc(100vh - 100px)`}}>
        {children}
      </main>
    </div>
  );
};

export default Layout;