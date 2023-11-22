"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Dashboard from "@/app/dashboard/page";

const UserForm = () => {
  const router = useRouter();

  const [email, setEmail] = useState<string>("pedrooo@example.com");
  const [password, setPassword] = useState<string>("P@ssw0rd123");
  const [role, setRole] = useState<string>("Admin");

  const [errors, setErrors] = useState<string[]>([]);

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrors([]);

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          role,
          isActive: true,
        }),
      }
    );

    const responseAPI = await res.json();
    console.log(responseAPI);

    if (!res.ok) {
      setErrors(responseAPI.message);
      return;
    }

    router.push("/dashboard/home");
  };

  return (
    <>
      <div className="bg-secondary-100 p-8 rounded-xl mb-3">
        <h1 className="text-3xl text-gray-300 text-center uppercase tracking-[8px] font-bold">
          Registrar <span className="text-primary">Usuarios</span>{" "}
        </h1>
        <hr className="my-5 border-gray-400" />

        <form onSubmit={handleSubmit}>
          <div className="grid gap-6 mb-10 md:grid-cols-2">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Correo
              </label>
              <input
                type="email"
                onChange={(event) => setEmail(event.target.value)}
                id="correo"
                name="correo"
                className=" px-2 outline-none bg-secondary-900 py-2 rounded-lg border border-gray-600 w-full hover:border-gray-400 duration-200 focus:border-blue-500 "
                placeholder="test@test.com"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Contraseña
              </label>
              <input
                value={password}
                type="password"
                onChange={(event) => setPassword(event.target.value)}
                id="contraseña"
                name="contraseña"
                className=" px-2 outline-none bg-secondary-900 py-2 rounded-lg border border-gray-600 w-full hover:border-gray-400 duration-200 focus:border-blue-500 "
                placeholder="contraseña"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Rol
              </label>
              <select
                id="roles"
                className="px-2 outline-none bg-secondary-900 py-2 rounded-lg border border-gray-600 w-full hover:border-gray-400 duration-200 focus:border-blue-500 "
                onChange={(event) => setRole(event.target.value)}
                required
              >
                <option value="User">Usuario</option>
                <option value="Admin">Administrador</option>
                <option value="Manager">Jefe</option>
              </select>
            </div>
            <div className="flex item-center">
              <button
                type="submit"
                className="bg-primary rounded-lg px-6 py-1 text-black font-semibold hover:bg-primary/50 active:bg-primary/10"
              >
                Crear usuario
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default UserForm;
