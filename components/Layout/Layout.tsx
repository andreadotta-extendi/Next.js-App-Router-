import React from "react";
import Header from "../Shared/ui/Header";

interface LayoutProps {
  isLogged?: boolean;
  children: React.ReactNode;
  stepsPage?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ isLogged, stepsPage, children }) => {
  return (
    <React.Fragment>
      <Header isLogged={isLogged} />
      <main className="py-16 px-4 max-w-[1440px] m-auto">{children}</main>
    </React.Fragment>
  );
};

export default Layout;
