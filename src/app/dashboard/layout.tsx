import React, { ReactNode } from "react";
// import Sidebar from "./_components/SideBar";
import DashboardHeader from "./_components/DashboardHeader";
import routes from "@src/views/routes"; // import your routes
import Sidebar from "@/src/components/sidebar/Sidebar";


interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen bg-navy-900 text-white">
      <Sidebar/>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <DashboardHeader />

        {/* Page Content */}
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
