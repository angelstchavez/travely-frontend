// CustomerReport.tsx
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { VscFilePdf } from "react-icons/vsc";

interface CustomerReportProps {
  endpoint: string;
  label: string;
}

const customerReport: React.FC<CustomerReportProps> = ({ endpoint, label }) => {
  const { data: session } = useSession();

  useEffect(() => {
    if (session?.user?.token) {
    }
  }, [session?.user?.token]);

  const downloadPDF = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/customers/pdf/download${endpoint}`,
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
      link.setAttribute("download", `informe-clientes${endpoint}.pdf`);

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
      className="flex items-center rounded-lg bg-primary px-1 py-2 m-1 text-black hover:bg-primary/50 active:bg-primary/10"
      onClick={downloadPDF}
    >
      <VscFilePdf className="mr-2" />
      {label}
    </button>
  );
};

export default customerReport;
