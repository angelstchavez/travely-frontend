"use client";

import Header from "@/components/utilities/Header";
import Sidebar from "@/components/utilities/Sidebar";
import React, { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const DashboardPage: React.FC<Props> = ({ children }) => {
  return (
    <>
      <div className="text-white min-h-screen grid grid-cols-1 xl:grid-cols-8 bg-secondary-900">
        <Sidebar />
        <div className="xl:col-span-7">
          <Header />
          <div className="h-[90vh] overflow-y-scroll p-8 bg-secondary-900">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
