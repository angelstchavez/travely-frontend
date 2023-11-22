"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FcOk } from "react-icons/fc";
import { Toaster, toast } from "sonner";

const CustomerPersonForm = () => {
  const router = useRouter();

  const [person, setPerson] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    secondLastName: "",
    identificationNumber: "",
    gender: "",
    documentType: "",
    birthdate: "",
    email: "",
    mobilePhone: "",
  });

  const [errors, setErrors] = useState<string[]>([]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrors([]);

    // Filtrar solo las propiedades que tienen valores en la parte de persona
    const filteredPerson = Object.fromEntries(
      Object.entries(person).filter(([_, value]) => value !== "")
    );

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/customers`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ person: filteredPerson }),
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
          <span className="text-primary"> persona</span>{" "}
        </h1>
        <hr className="my-5 border-gray-400" />

        <form onSubmit={handleSubmit}>
          <div className="grid gap-6 mb-10 md:grid-cols-4">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Nombres
              </label>
              <input
                type="text"
                name="firstName"
                value={person.firstName}
                onChange={(event) =>
                  setPerson((prev) => ({
                    ...prev,
                    firstName: event.target.value,
                  }))
                }
                className="px-2 outline-none bg-secondary-900 py-2 rounded-lg border border-gray-600 w-full hover:border-gray-400 duration-200 focus:border-blue-500"
                placeholder="John"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Segundo Nombre
              </label>
              <input
                type="text"
                name="middleName"
                value={person.middleName}
                onChange={(event) =>
                  setPerson((prev) => ({
                    ...prev,
                    middleName: event.target.value,
                  }))
                }
                className="px-2 outline-none bg-secondary-900 py-2 rounded-lg border border-gray-600 w-full hover:border-gray-400 duration-200 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Apellidos
              </label>
              <input
                type="text"
                name="lastName"
                value={person.lastName}
                onChange={(event) =>
                  setPerson((prev) => ({
                    ...prev,
                    lastName: event.target.value,
                  }))
                }
                className="px-2 outline-none bg-secondary-900 py-2 rounded-lg border border-gray-600 w-full hover:border-gray-400 duration-200 focus:border-blue-500"
                placeholder="Doe"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Segundo Apellido
              </label>
              <input
                type="text"
                name="secondLastName"
                value={person.secondLastName}
                onChange={(event) =>
                  setPerson((prev) => ({
                    ...prev,
                    secondLastName: event.target.value,
                  }))
                }
                className="px-2 outline-none bg-secondary-900 py-2 rounded-lg border border-gray-600 w-full hover:border-gray-400 duration-200 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Número de Identificación
              </label>
              <input
                type="text"
                name="identificationNumber"
                value={person.identificationNumber}
                onChange={(event) =>
                  setPerson((prev) => ({
                    ...prev,
                    identificationNumber: event.target.value,
                  }))
                }
                className="px-2 outline-none bg-secondary-900 py-2 rounded-lg border border-gray-600 w-full hover:border-gray-400 duration-200 focus:border-blue-500"
                placeholder="1234567890"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Género
              </label>
              <select
                name="gender"
                className="px-2 outline-none bg-secondary-900 py-2 rounded-lg border border-gray-600 w-full hover:border-gray-400 duration-200 focus:border-blue-500"
                onChange={(event) =>
                  setPerson((prev) => ({ ...prev, gender: event.target.value }))
                }
                required
              >
                <option value="Masculino">Masculino</option>
                <option value="Femenino">Femenino</option>
                <option value="Otro">Otro</option>
              </select>
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Tipo de Documento
              </label>
              <select
                name="documentType"
                className="px-2 outline-none bg-secondary-900 py-2 rounded-lg border border-gray-600 w-full hover:border-gray-400 duration-200 focus:border-blue-500"
                onChange={(event) =>
                  setPerson((prev) => ({
                    ...prev,
                    documentType: event.target.value,
                  }))
                }
                required
              >
                <option value="Cédula de Ciudadanía">
                  Cédula de Ciudadanía
                </option>
                <option value="Cédula de Extranjería">
                  Cédula de Extranjería
                </option>
                <option value="Pasaporte">Pasaporte</option>
                {/* Agregar más opciones según sea necesario */}
              </select>
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Fecha de Nacimiento
              </label>
              <input
                type="date"
                name="birthdate"
                value={person.birthdate}
                onChange={(event) =>
                  setPerson((prev) => ({
                    ...prev,
                    birthdate: event.target.value,
                  }))
                }
                className="px-2 outline-none bg-secondary-900 py-2 rounded-lg border border-gray-600 w-full hover:border-gray-400 duration-200 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Correo Electrónico
              </label>
              <input
                type="email"
                name="email"
                value={person.email}
                onChange={(event) =>
                  setPerson((prev) => ({ ...prev, email: event.target.value }))
                }
                className="px-2 outline-none bg-secondary-900 py-2 rounded-lg border border-gray-600 w-full hover:border-gray-400 duration-200 focus:border-blue-500"
                placeholder="john.doe@example.com"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Teléfono Móvil
              </label>
              <input
                type="tel"
                name="mobilePhone"
                value={person.mobilePhone}
                onChange={(event) =>
                  setPerson((prev) => ({
                    ...prev,
                    mobilePhone: event.target.value,
                  }))
                }
                className="px-2 outline-none bg-secondary-900 py-2 rounded-lg border border-gray-600 w-full hover:border-gray-400 duration-200 focus:border-blue-500"
                placeholder="+573023459685"
                required
              />
            </div>
          </div>
          <div className="flex items-center">
            <button
              onClick={() => {
                toast("Cliente de tipo persona registra exitosamente", {
                  description: "Gracias por usar Travely Manager",
                  icon: <FcOk />,
                });
              }}
              type="submit"
              className="bg-primary rounded-lg px-6 py-2 text-black font-semibold"
            >
              Registrar
            </button>
            <Toaster theme="system" position="top-center" />
          </div>
        </form>
      </div>
    </>
  );
};

export default CustomerPersonForm;
