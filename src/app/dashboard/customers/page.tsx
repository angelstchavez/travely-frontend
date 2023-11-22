"use client";

import React, { useState } from "react";
import DashboardPage from "../page";
import CustomerForm from "@/components/customers/customerForm";
import CustomerTable from "@/components/customers/customerTable";
import CustomerReport from "@/components/customers/customerReport";
import CustomerPersonForm from "@/components/customers/persons/customerPersonForm";
import CustomerPersonTable from "@/components/customers/persons/customerPersonTable";
import CustomerCompanyReport from "@/components/customers/companies/customerCompanyReport";
import CustomerCompanyForm from "@/components/customers/companies/customerCompanyForm";
import CustomerCompanyTable from "@/components/customers/companies/customerCompanyTable";
import CustomerPersonReport from "@/components/customers/persons/customerPersonReport";

interface TabProps {
  form: React.ReactNode;
  table: React.ReactNode;
  report: React.ReactNode;
}

const tabs: Record<string, TabProps> = {
  general: {
    form: <CustomerForm />,
    table: <CustomerTable />,
    report: <CustomerReport />,
  },
  personas: {
    form: <CustomerPersonForm />,
    table: <CustomerPersonTable />,
    report: <CustomerPersonReport />,
  },
  company: {
    form: <CustomerCompanyForm />,
    table: <CustomerCompanyTable />,
    report: <CustomerCompanyReport />,
  },
};

function CustomerPage() {
  const [activeTab, setActiveTab] = useState<string>("general");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const { form, table, report } = tabs[activeTab];

  return (
    <DashboardPage>
      <div className="flex gap-3 mb-3">
        <button
          className="bg-primary text-black px-4 py-2 rounded-lg disabled:bg-secondary-100 disabled:text-white"
          onClick={() => handleTabClick("general")}
          disabled={activeTab === "general"}
        >
          General
        </button>
        <button
          className="bg-primary text-black px-4 py-2 rounded-lg disabled:bg-secondary-100 disabled:text-white"
          onClick={() => handleTabClick("personas")}
          disabled={activeTab === "personas"}
        >
          Personas
        </button>
        <button
          className="bg-primary text-black px-4 py-2 rounded-lg disabled:bg-secondary-100 disabled:text-white"
          onClick={() => handleTabClick("company")}
          disabled={activeTab === "company"}
        >
          Empresas
        </button>
      </div>
      <div className="bg-secondary-100 rounded-xl mb-3">{form}</div>
      <div className="bg-secondary-100 p-4 rounded-xl mb-3">{table}</div>
      <div className="bg-secondary-100 p-4 rounded-xl mb-3">{report}</div>
    </DashboardPage>
  );
}

export default CustomerPage;
