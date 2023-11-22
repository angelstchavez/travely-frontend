/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import BoxReport from "@/components/utilities/BoxReport";
import DashboardPage from "@/app/dashboard/page";
import { RiTicketLine } from "react-icons/ri";

interface User {
  email: string;
  role: string;
}

const officeReportBox = () => {
  const { data: session } = useSession();
  const [countData, setCountData] = useState<number | null>(null);

  useEffect(() => {
    if (session?.user?.token) {
      getCustomerCount();
    }
  }, [session?.user?.token]);

  const getCustomerCount = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/offices/active/count`,
        {
          method: "GET",
          headers: {
            accept: "*/*",
            Authorization: `Bearer ${session?.user.token}`,
          },
        }
      );
      const data = await response.json();

      console.log("Conteo de clientes:", data);
      // Aseguramos que data sea un número
      const countAsNumber = Number(data);
      setCountData(countAsNumber);
    } catch (error) {
      console.error("Error al obtener el conteo de clientes:", error);
    }
  };

  return (
    <BoxReport
      cantidad={countData}
      icon={
        <RiTicketLine className="text-2xl bg-orange-500/10 text-orange-500 p-2 box-content rounded-xl" />
      }
      title={<h1 className="text-orange-500 text-2xl font-semibold">Oficinas activas</h1>}
    />
  );
};

export default officeReportBox;
