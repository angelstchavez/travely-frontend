/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";

interface Municipios {
  id: string;
  city: string;
}
interface Jefes {
  id: string;
  isActive: boolean;
  createdAt: string;
  employee: {
    id: string;
    isActive: boolean;
    createdAt: string;
    person: {
      id: string;
      gender: string;
      documentType: string;
      firstName: string;
      middleName: string | null;
      lastName: string;
      secondLastName: string | null;
      identificationNumber: string;
      birthdate: string;
      email: string;
      mobilePhone: string;
      createdAt: string;
    };
  };
  user: {
    id: string;
    email: string;
    role: string;
    isActive: boolean;
    createdAt: string;
  };
}

const officeForm = () => {
  const [jefes, setJefes] = useState<{ employeeChiefs: Jefes[] }>({
    employeeChiefs: [],
  });
  const [selectedDpto, setSelectedDpto] = useState<string>("");
  const [municipios, setMunicipios] = useState<Municipios[]>([]);
  const { data: session } = useSession();
  const [dpto, setDpto] = useState<string[]>([]);
  const [errors, setErrors] = useState<string[]>([]);

  useEffect(() => {
    if (session?.user?.token) {
      getDptodId();
      getChiefsId();
    }
  }, [session?.user?.token]);

  const getChiefsId = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/employees-chiefs`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${session?.user.token}`,
          },
        }
      );

      const data = await response.json();
      setJefes(data);
      console.log("Este es data", data);
    } catch (error) {
      console.error("Error al traer la data:", error);
    }
  };

  const getDptodId = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/locations/departments`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${session?.user.token}`,
          },
        }
      );

      const data = await response.json();
      setDpto(data);
    } catch (error) {
      console.error("Error al traer la data:", error);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrors([]);

    console.log(office);
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/offices`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${session?.user?.token}`,
      },
      body: JSON.stringify(office),
    });

    const responseAPI = await res.json();
    console.log(responseAPI);

    if (!res.ok) {
      setErrors(responseAPI.message);
      return;
    }
  };

  const [office, setOffice] = useState({
    name: "",
    address: "",
    numberContact: "",
    locationId: "",
    chiefId: "",
    isActive: true,
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setOffice((Prevformulario) => ({
      ...Prevformulario,
      [name]: value,
    }));
  };
  const handleDepartamentoChange = async (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedDepartamento = e.target.value;
    setSelectedDpto(selectedDepartamento);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/locations/cities/${selectedDepartamento}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${session?.user.token}`,
          },
        }
      );

      const data = await response.json();
      setMunicipios(data);
    } catch (error) {
      console.error("Error al traer la data:", error);
    }
  };

  return (
    <>
      <div className="bg-secondary-100 p-8 rounded-xl mb-3">
        <h1 className="text-3xl text-gray-300 text-center uppercase tracking-[8px] font-bold">
          Registrar oficinas
        </h1>
        <hr className="my-5 border-gray-400" />
        <form onSubmit={handleSubmit}>
          <div className="grid gap-6 mb-6 md:grid-cols-3">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Nombre de la oficina
              </label>
              <input
                type="text"
                name="name"
                value={office.name}
                onChange={handleChange}
                className="px-2 outline-none bg-secondary-900 py-2 rounded-lg border border-gray-600 w-full hover:border-gray-400 duration-200 focus:border-blue-500"
                placeholder="Oficina de Valledupar"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Direccion de la oficina
              </label>
              <input
                type="text"
                name="address"
                value={office.address}
                onChange={handleChange}
                className="px-2 outline-none bg-secondary-900 py-2 rounded-lg border border-gray-600 w-full hover:border-gray-400 duration-200 focus:border-blue-500"
                placeholder="carrera 40a #30-12"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Número de Contacto
              </label>
              <input
                type="text"
                name="numberContact"
                onChange={handleChange}
                value={office.numberContact}
                className="px-2 outline-none bg-secondary-900 py-2 rounded-lg border border-gray-600 w-full hover:border-gray-400 duration-200 focus:border-blue-500"
                placeholder="+1234567890"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Departamento
              </label>
              <select
                id="departamentorig"
                name="departamentorig"
                className="px-2 outline-none bg-secondary-900 py-2 rounded-lg border border-gray-600 w-full hover:border-gray-400 duration-200 focus:border-blue-500 "
                required
                onChange={handleDepartamentoChange}
                value={selectedDpto}
              >
                <option value=""></option>
                {dpto.map((dpto) => (
                  <option key={dpto} value={dpto}>
                    {dpto}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Ciudad
              </label>
              <select
                id="locationId"
                name="locationId"
                className="px-2 outline-none bg-secondary-900 py-2 rounded-lg border border-gray-600 w-full hover:border-gray-400 duration-200 focus:border-blue-500 "
                required
                onChange={handleChange}
              >
                {municipios.map((muni) => (
                  <option key={muni.id} value={muni.id}>
                    {muni.city}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Jefes
              </label>
              <select
                id="chiefId"
                name="chiefId"
                className="px-2 outline-none bg-secondary-900 py-2 rounded-lg border border-gray-600 w-full hover:border-gray-400 duration-200 focus:border-blue-500 "
                required
                onChange={handleChange}
              >
                {jefes.employeeChiefs.map((jefe) => {
                  const { firstName, middleName, lastName, secondLastName } =
                    jefe.employee.person;

                  return (
                    <option key={jefe.id} value={jefe.id}>
                      {`${firstName} ${middleName} ${lastName} ${secondLastName}`}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className="flex item-center">
              <button
                type="submit"
                className="bg-primary rounded-lg px-6 py-2 text-black font-medium hover:bg-primary/50 active:bg-primary/10"
              >
                <span className="text-xl font-semibold">Agregar Oficina</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
export default officeForm;
