/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import EmployeeForm from "@/components/employees/employeeForm";
import DashboardPage from "../page";
import EmployeeTable from "@/components/employees/employeeTable";
import EmployeeGeneralReport from "@/components/employees/employeeGeneralReport";
import ChiefForm from "@/components/employees/chiefs/chiefForm";
import ChiefTable from "@/components/employees/chiefs/chiefTable";
import ChiefReport from "@/components/employees/chiefs/chiefReport";
import AdminForm from "@/components/employees/admins/adminForm";
import AdminTable from "@/components/employees/admins/adminTable";
import AdminReport from "@/components/employees/admins/adminReport";
import { useState } from "react";
import DriverForm from "@/components/employees/drivers/driverForm";
import DriverTable from "@/components/employees/drivers/driverTable";
import DriverReport from "@/components/employees/drivers/driverReport";

interface TabProps {
  form: React.ReactNode;
  table: React.ReactNode;
  report: React.ReactNode;
}

const tabs: Record<string, TabProps> = {
  general: {
    form: <EmployeeForm />,
    table: <EmployeeTable />,
    report: <EmployeeGeneralReport />,
  },
  jefes: {
    form: <ChiefForm />,
    table: <ChiefTable />,
    report: <ChiefReport />,
  },
  administradores: {
    form: <AdminForm />,
    table: <AdminTable />,
    report: <AdminReport />,
  },
  vendedores: {
    form: <AdminForm />,
    table: <AdminTable />,
    report: <AdminReport />,
  },
  conductores: {
    form: <DriverForm />,
    table: <DriverTable />,
    report: <DriverReport />,
  },
};

function employeesPage() {
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
          onClick={() => handleTabClick("jefes")}
          disabled={activeTab === "jefes"}
        >
          Jefes
        </button>
        <button
          className="bg-primary text-black px-4 py-2 rounded-lg disabled:bg-secondary-100 disabled:text-white"
          onClick={() => handleTabClick("administradores")}
          disabled={activeTab === "administradores"}
        >
          Administradores
        </button>
        <button
          className="bg-primary text-black px-4 py-2 rounded-lg disabled:bg-secondary-100 disabled:text-white"
          onClick={() => handleTabClick("vendedores")}
          disabled={activeTab === "vendedores"}
        >
          Vendedores
        </button>
        <button
          className="bg-primary text-black px-4 py-2 rounded-lg disabled:bg-secondary-100 disabled:text-white"
          onClick={() => handleTabClick("conductores")}
          disabled={activeTab === "conductores"}
        >
          Conductores
        </button>
      </div>
      <div className="bg-secondary-100 rounded-xl mb-3">{form}</div>
      <div className="bg-secondary-100 p-4 rounded-xl mb-3">{table}</div>
      <div className="bg-secondary-100 p-4 rounded-xl mb-3">{report}</div>
    </DashboardPage>
  );
}

export default employeesPage;
