import React, { ReactNode } from "react";
import Sidebar from "./_components/SideBar";
import DashboardHeader from "./_components/DashboardHeader";

interface DashboardLayoutProps {
  children: ReactNode;
}

function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <DashboardHeader />
        <div>{children}</div>
      </div>
    </div>
  );
}

export default DashboardLayout;
