

"use client";

import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { VscFilePdf } from "react-icons/vsc";
const employeeReport = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data: session } = useSession();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (session?.user?.token) {
    }
  }, [session?.user?.token]);

  const downloadPDF = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/employees/pdf/download`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${session?.user.token}`,
          },
        }
      );

      const blob = await response.blob();

      // Crear un enlace temporal para descargar el archivo
      const url = window.URL.createObjectURL(new Blob([blob]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "informe-empleados.pdf");

      // Abrir el enlace en una nueva pestaña/ventana
      link.setAttribute("target", "_blank");

      document.body.appendChild(link);
      link.click();

      // Limpiar el enlace y la URL creada
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error al descargar el PDF:", error);
    }
  };

  return (
    <button
      className="flex items-center rounded-lg bg-primary  px-1 py-2 m-1 text-black hover:bg-primary/50 active:bg-primary/10"
      onClick={downloadPDF}
    >
      <VscFilePdf className="mr-2" />
      Descargar reporte
    </button>
  );
};

export default employeeReport;


