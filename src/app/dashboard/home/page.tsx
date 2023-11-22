"use client";

import DashboardPage from "../page";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import BoxReport from "@/components/utilities/BoxReport";

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
      <BoxReport ventas={email} clientes={role} />
    </DashboardPage>
  );
};

export default HomePage;
