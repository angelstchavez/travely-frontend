"use client";

import Header from "@/components/utilities/Header";
import Sidebar from "@/components/utilities/Sidebar";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const DashboardPage = ({ children }: Props) => {
  return (
    <>
      <div className="text-white min-h-screen grid grid-cols-1 xl:grid-cols-6 bg-secondary-900">
        <Sidebar />
        <div className="xl:col-span-5">
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
