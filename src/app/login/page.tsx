"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  RiMailFill,
  RiLock2Fill,
  RiEyeFill,
  RiEyeOffFill,
  RiGoogleFill,
} from "react-icons/ri";
import Link from "next/link";

const LoginPage = () => {
  const [errors, setErrors] = useState<string[]>([]);
  const [email, setEmail] = useState<string>("juan@example.com");
  const [password, setPassword] = useState<string>("P@ssw0rd123");
  const [labelFocused, setLabelFocused] = useState<string>(""); // Nuevo estado

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrors([]);

    const responseNextAuth = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (responseNextAuth?.error) {
      setErrors(responseNextAuth.error.split(","));
      return;
    }

    router.push("/dashboard/home");
  };

  const handleGoogleSignIn = async () => {
    // Iniciar sesión con Google
    await signIn("google", { redirect: false });
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center ">
        <div className="bg-secondary-100 p-8 rounded-2xl shadow-2xl w-auto lg:w-[450px]">
          <h1 className="text-white text-3xl uppercase font-bold tracking-[5px] mb-8 text-center">
            Travely <span className="text-primary">Manager</span>{" "}
          </h1>
          <form className="mb-4" onSubmit={handleSubmit}>
            <div className="pb-6">
              <label className="relative">
                <RiMailFill className="absolute top-1/2 -translate-y-1/2 left-3 text-gray-300" />
                <input
                  value={email}
                  onFocus={() => setLabelFocused("Usuario")}
                  onBlur={() => setLabelFocused("")}
                  onChange={(event) => setEmail(event.target.value)}
                  name="email"
                  id="email"
                  required
                  type="text"
                  className="px-10 py-2 w-full text-lg outline-none border-2
                  border-gray-600/30 border-gray-600 rounded-lg hover:border-gray-400 duration-200 peer focus:border-blue-500 bg-secondary-900 text-gray-300"
                />
                {labelFocused === "Usuario" && (
                  <span className="absolute left-0 -top-1 px-8 text-lg tracking-wide peer-focus:text-blue-500 pointer-events-none duration-200 peer-focus:text-sm peer-focus:-translate-y-5 ml-2 peer-valid:text-sm peer-valid:-translate-y-5 input-text text-gray-500">
                    Usuario
                  </span>
                )}
              </label>
            </div>
            <div className="mb-6">
              <label className="relative">
                <RiLock2Fill className="absolute top-1/2 -translate-y-1/2 left-3 text-gray-300" />
                <input
                  value={password}
                  onFocus={() => setLabelFocused("Contraseña")}
                  onBlur={() => setLabelFocused("")}
                  onChange={(event) => setPassword(event.target.value)}
                  name="password"
                  id="password"
                  required
                  type={showPassword ? "text" : "password"}
                  className="px-10 py-2 w-full text-lg outline-none border-2
                border-gray-600/30 rounded-lg hover:border-gray-400 duration-200 peer focus:border-blue-500 bg-secondary-900 text-gray-300"
                />
                {labelFocused === "Contraseña" && (
                  <span className="absolute left-0 -top-1 px-8 text-lg tracking-wide peer-focus:text-blue-500 pointer-events-none duration-200 peer-focus:text-sm peer-focus:-translate-y-5 ml-2 peer-valid:text-sm peer-valid:-translate-y-5 input-text text-gray-500">
                    Contraseña
                  </span>
                )}
                {showPassword ? (
                  <RiEyeOffFill
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute top-1/2 -translate-y-1/2 right-2 text-gray-300 hover:cursor-pointer"
                  />
                ) : (
                  <RiEyeFill
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute top-1/2 -translate-y-1/2 right-2 text-gray-300 hover:cursor-pointer"
                  />
                )}
              </label>
            </div>
            <div className="mb-6">
              <button
                type="submit"
                className="text-gray-300 bg-secondary-900 w-full py-2 px-4 rounded-lg font-bold hover:text-black hover:bg-primary duration-500 transition-colors"
              >
                Iniciar Sesión
              </button>
            </div>
          </form>

          <div className="text-center text-gray-200">
            <Link
              href="/forgot_password"
              className="hover:text-primary transition-colors"
            >
              ¿Olvidaste tu contraseña?
            </Link>
          </div>
          <div className="mb-6 mt-4">
            <button
              onClick={handleGoogleSignIn}
              className="text-gray-300 bg-secondary-900 w-full py-4 px-4 rounded-lg  hover:text-white hover:bg-red-600 duration-500 transition-colors flex items-center justify-center"
            >
              <RiGoogleFill className="mr-2" />
              Iniciar Sesión con Google
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
