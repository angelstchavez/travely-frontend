/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

interface Marca {
  id: string;
  name: string;
}

interface FormularioState {
  plate: string;
  reference: string;
  model: number;
  brandId: string;
  type: string;
}

const vehicleForm = () => {
  const { data: session } = useSession();
  const [marcas, setMarcas] = useState<Marca[]>([]);
  const [errors, setErrors] = useState<string[]>([]);

  useEffect(() => {
    if (session?.user?.token) {
      getBrandId();
    }
  }, [session?.user?.token]);

  const getBrandId = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/brands`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${session?.user.token}`,
          },
        }
      );

      const data = await response.json();
      setMarcas(data);
    } catch (error) {
      console.error("Error al traer la data:", error);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrors([]);

    console.log(formulario);
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/vehicles`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${session?.user?.token}`,
      },
      body: JSON.stringify(formulario),
    });

    const responseAPI = await res.json();
    console.log(responseAPI);

    if (!res.ok) {
      setErrors(responseAPI.message);
      return;
    }
  };

  const [formulario, setFormulario] = useState<FormularioState>({
    plate: "",
    reference: "",
    model: 0,
    brandId: "",
    type: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setFormulario((Prevformulario) => ({
      ...Prevformulario,
      [name]: value,
    }));
  };

  function generateYearOptions() {
    const currentYear = new Date().getFullYear();
    const startYear = 1990;
    const years = [];

    for (let year = currentYear; year >= startYear; year--) {
      years.push(
        <option key={year} value={year}>
          {year}
        </option>
      );
    }

    return years;
  }

  

  return (
    <>
      <div className="bg-secondary-100 p-6 rounded-xl">
        <h1 className="text-3xl text-gray-300 text-center uppercase tracking-[8px] font-bold">
          Registrar <span className="text-primary">Vehiculos</span>{" "}
        </h1>
        <hr className="my-5 border-gray-400" />

        <form onSubmit={handleSubmit}>
          <div className="grid gap-6 mb-6 md:grid-cols-3">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Placa
              </label>
              <input
                type="text"
                onChange={handleChange}
                id="plate"
                name="plate"
                className=" px-2 outline-none bg-secondary-900 py-2 rounded-lg border border-gray-600 w-full hover:border-gray-400 duration-200 focus:border-blue-500 uppercase"
                placeholder="XYZ789"
                value={formulario.plate}
                required
                maxLength={6}
                pattern="[A-Za-z]{3}\d{3}"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Referencia
              </label>
              <input
                type="text"
                onChange={handleChange}
                id="reference"
                name="reference"
                className=" px-2 outline-none bg-secondary-900 py-2 rounded-lg border border-gray-600 w-full hover:border-gray-400 duration-200 focus:border-blue-500 "
                placeholder="Land-cruiser txl"
                value={formulario.reference}
                required
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Modelo
              </label>
              <select
                id="model"
                name="model"
                className="px-2 outline-none bg-secondary-900 py-2 rounded-lg border border-gray-600 w-full hover:border-gray-400 duration-200 focus:border-blue-500"
                required
                onChange={handleChange}
                value={formulario.model}
              >
                <option value=""></option>

                {generateYearOptions()}
              </select>
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Marca
              </label>
              <select
                id="brandId"
                name="brandId"
                className="px-2 outline-none bg-secondary-900 py-2 rounded-lg border border-gray-600 w-full hover:border-gray-400 duration-200 focus:border-blue-500 "
                required
                onChange={handleChange}
                value={formulario.brandId}
              >
                <option value=""></option>
                {marcas.map((marcas) => (
                  <option key={marcas.id} value={marcas.id}>
                    {marcas.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Tipo
              </label>
              <select
                id="type"
                name="type"
                className="px-2 outline-none bg-secondary-900 py-2 rounded-lg border border-gray-600 w-full hover:border-gray-400 duration-200 focus:border-blue-500 "
                required
                onChange={handleChange}
                value={formulario.type}
              >
                <option value=""></option>
                <option value="Particular">Particular</option>
                <option value="Minivan">Minivan</option>
                <option value="Autobus">Autobus</option>
              </select>
            </div>
            <div className="flex item-center">
              <button
                type="submit"
                className="bg-primary rounded-lg px-6 py-2 text-black font-medium hover:bg-primary/50 active:bg-primary/10"
              >
                <span className="text-xl font-semibold">Agregar vehiculo</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default vehicleForm;
