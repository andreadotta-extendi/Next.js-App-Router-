import React from "react";
import Header from "./Header";
import SubNavbar from "./SubNavbar";

interface LayoutProps {
  isLogged?: boolean;
  children: React.ReactNode;
  hasSubNavbar?: boolean;
  stepsPage?: boolean;
  leftButtonSubNavbar?: boolean;
  rightButtonSubNavbar?: boolean;
}

const Layout: React.FC<LayoutProps> = ({
  isLogged,
  hasSubNavbar,
  leftButtonSubNavbar,
  rightButtonSubNavbar,
  children,
}) => {
  return (
    <React.Fragment>
      <Header isLogged={isLogged} />
      {hasSubNavbar && (
        <SubNavbar
          leftButton={leftButtonSubNavbar}
          rightButton={rightButtonSubNavbar}
        />
      )}
      <main
        className={`${
          hasSubNavbar ? "pt-0 pb-16" : "py-16"
        } px-4 max-w-[1440px] m-auto`}
      >
        {children}
      </main>
    </React.Fragment>
  );
};

export default Layout;
