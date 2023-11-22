"use client";

import DashboardPage from "../page";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import CustomerReportBox from "../../../components/utilities/reports/CustomersReportBox";
import CustomerPersonReportBox from "../../../components/utilities/reports/customersPersonReportBox";
import CustomerCompanyReportBox from "../../../components/utilities/reports/customersCompanyReportBox";
import UserReportBox from "../../../components/utilities/reports/usersReportBox";
import LoginReportBox from "../../../components/utilities/reports/loginReportBox";
import OfficeReportBox from "../../../components/utilities/reports/officeReportBox";
import VehicleReportBox from "../../../components/utilities/reports/vehiclesReportBox";
interface User {
  email: string;
  role: string;
}

const HomePage = () => {
  const { data: session } = useSession();
  const [nombre, setNombre] = useState<User>({
    email: "",
    role: "",
  });

  useEffect(() => {
    if (session?.user?.token) {
      getDatas();
    }
  }, [session?.user?.token]);

  const getDatas = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/profile`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${session?.user.token}`,
          },
        }
      );
      const data = await response.json();

      console.log("Soy data", data);
      setNombre(data);
    } catch (error) {
      console.error("Error al traer la data:", error);
    }
  };

  const { email, role } = nombre;

  console.log("aa");

  return (
    <DashboardPage>
      <div className="bg-secondary-100 p-8 rounded-xl mb-3">
        <div className="grid gap-6 mb-6 grid-cols-1 md:grid-cols-4 xl:grid-cols-4 lg:grid-cols-3">
          <CustomerReportBox></CustomerReportBox>
          <CustomerPersonReportBox></CustomerPersonReportBox>
          <CustomerCompanyReportBox></CustomerCompanyReportBox>
          <UserReportBox></UserReportBox>
          <LoginReportBox></LoginReportBox>
          <OfficeReportBox></OfficeReportBox>
          <VehicleReportBox></VehicleReportBox>
        </div>
      </div>
    </DashboardPage>
  );
};

export default HomePage;
