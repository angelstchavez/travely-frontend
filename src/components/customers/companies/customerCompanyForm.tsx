import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Toaster, toast } from "sonner";
import { FcOk } from "react-icons/fc";

const CustomerCompanyForm = () => {
  const router = useRouter();

  const [company, setCompany] = useState({
    name: "",
    nit: "",
    contactNumber: "",
    address: "",
    isActive: true,
  });

  const [errors, setErrors] = useState<string[]>([]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrors([]);

    // Filtrar solo las propiedades que tienen valores en la parte de empresa
    const filteredCompany = Object.fromEntries(
      Object.entries(company).filter(([_, value]) => value !== "")
    );

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/customers`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ company: filteredCompany }),
      }
    );

    const responseAPI = await res.json();
    console.log(responseAPI);

    if (!res.ok) {
      setErrors(responseAPI.message);
      return;
    }

    router.push("/dashboard/customers");
  };

  return (
    <>
      <div className="bg-secondary-100 p-8 rounded-xl mb-3">
        <h1 className="text-3xl text-gray-300 text-center uppercase tracking-[8px] font-bold">
          Registrar clientes de tipo
          <span className="text-primary"> empresa</span>{" "}
        </h1>
        <hr className="my-5 border-gray-400" />

        <form onSubmit={handleSubmit}>
          <div className="grid gap-6 mb-10 md:grid-cols-4">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Nombre de la Empresa
              </label>
              <input
                type="text"
                name="name"
                value={company.name}
                onChange={(event) =>
                  setCompany((prev) => ({
                    ...prev,
                    name: event.target.value,
                  }))
                }
                className="px-2 outline-none bg-secondary-900 py-2 rounded-lg border border-gray-600 w-full hover:border-gray-400 duration-200 focus:border-blue-500"
                placeholder="Acme Corporation"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                NIT
              </label>
              <input
                type="text"
                name="nit"
                value={company.nit}
                onChange={(event) =>
                  setCompany((prev) => ({
                    ...prev,
                    nit: event.target.value,
                  }))
                }
                className="px-2 outline-none bg-secondary-900 py-2 rounded-lg border border-gray-600 w-full hover:border-gray-400 duration-200 focus:border-blue-500"
                placeholder="123456789"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Número de Contacto
              </label>
              <input
                type="text"
                name="contactNumber"
                value={company.contactNumber}
                onChange={(event) =>
                  setCompany((prev) => ({
                    ...prev,
                    contactNumber: event.target.value,
                  }))
                }
                className="px-2 outline-none bg-secondary-900 py-2 rounded-lg border border-gray-600 w-full hover:border-gray-400 duration-200 focus:border-blue-500"
                placeholder="+1234567890"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Dirección
              </label>
              <input
                type="text"
                name="address"
                value={company.address}
                onChange={(event) =>
                  setCompany((prev) => ({
                    ...prev,
                    address: event.target.value,
                  }))
                }
                className="px-2 outline-none bg-secondary-900 py-2 rounded-lg border border-gray-600 w-full hover:border-gray-400 duration-200 focus:border-blue-500"
                placeholder="123 Main Street, Cityville"
                required
              />
            </div>
          </div>
          <div className="flex items-center">
            <button
              onClick={() => {
                toast("Cliente empresarial registra exitosamente", {
                  description: "Gracias por usar Travely Manager",
                  icon: <FcOk />,
                });
              }}
              type="submit"
              className="bg-primary rounded-lg px-6 py-1 text-black font-semibold"
            >
              Registrar empresa
            </button>
            <Toaster />
          </div>
        </form>
      </div>
    </>
  );
};

export default CustomerCompanyForm;
