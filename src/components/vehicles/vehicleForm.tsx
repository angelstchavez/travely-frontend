/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

interface Marca {
  id: string;
  name: string;
}

interface FormularioState {
  registrationCard: string;
  plate: string;
  model: string;
  engineNumber: string;
  manufacturingYear: number;
  numberOfSeats: number;
  brandId: string;
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
    registrationCard: "",
    plate: "",
    model: "",
    engineNumber: "",
    manufacturingYear: 2020,
    numberOfSeats: 5,
    brandId: "",
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

  return (
    <>
      <div className="bg-secondary-100 p-8 rounded-xl">
        <h1 className="text-2xl text-gray-300 text-center uppercase tracking-[8px] font-bold">
          Registrar <span className="text-primary">Vehiculos</span>{" "}
        </h1>
        <hr className="my-5 border-gray-400" />

        <form onSubmit={handleSubmit}>
          <div className="grid gap-6 mb-6 md:grid-cols-3">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Tarjeta de registro
              </label>
              <input
                type="text"
                onChange={handleChange}
                id="registrationCard"
                name="registrationCard"
                className=" px-2 outline-none bg-secondary-900 py-2 rounded-lg border border-gray-600 w-full hover:border-gray-400 duration-200 focus:border-blue-500 "
                placeholder="AB123CD"
                value={formulario.registrationCard}
                required
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Placa
              </label>
              <input
                type="text"
                onChange={handleChange}
                id="plate"
                name="plate"
                className=" px-2 outline-none bg-secondary-900 py-2 rounded-lg border border-gray-600 w-full hover:border-gray-400 duration-200 focus:border-blue-500 "
                placeholder="XYZ789"
                value={formulario.plate}
                required
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Modelo
              </label>
              <input
                type="text"
                onChange={handleChange}
                id="model"
                name="model"
                className=" px-2 outline-none bg-secondary-900 py-2 rounded-lg border border-gray-600 w-full hover:border-gray-400 duration-200 focus:border-blue-500 "
                placeholder="Transit 2022"
                value={formulario.model}
                required
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Número de motor
              </label>
              <input
                type="text"
                onChange={handleChange}
                id="engineNumber"
                name="engineNumber"
                className=" px-2 outline-none bg-secondary-900 py-2 rounded-lg border border-gray-600 w-full hover:border-gray-400 duration-200 focus:border-blue-500 "
                placeholder="E123456789CAR4D"
                value={formulario.engineNumber}
                required
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Año de fabricación
              </label>
              <input
                type="text"
                onChange={handleChange}
                id="manufacturingYear"
                name="manufacturingYear"
                className=" px-2 outline-none bg-secondary-900 py-2 rounded-lg border border-gray-600 w-full hover:border-gray-400 duration-200 focus:border-blue-500 "
                placeholder="2020"
                value={formulario.manufacturingYear}
                required
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Número de asientos
              </label>
              <input
                type="text"
                onChange={handleChange}
                id="numberOfSeats"
                name="numberOfSeats"
                className=" px-2 outline-none bg-secondary-900 py-2 rounded-lg border border-gray-600 w-full hover:border-gray-400 duration-200 focus:border-blue-500 "
                placeholder="5"
                value={formulario.numberOfSeats}
                required
              />
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
                {marcas.map((marcas) => (
                  <option key={marcas.id} value={marcas.id}>
                    {marcas.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex item-center">
              <button className="bg-primary rounded-lg px-6 py-2 text-black font-medium">
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
