"use client";

import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <nav className="bg-secondary-900 p-4 w-full top-0 z-10">
      <div className="container mx-auto flex items-center justify-between">
        <a href="#" className="text-white text-lg font-semibold tracking-[3px]">
          T<span className="text-primary">M</span>
        </a>
        <div className="flex items-center space-x-4 text-gray-400">
          <Link href="/" className="hover:text-primary duration-200">
            Inicio
          </Link>
          <Link href="/about" className="hover:text-primary duration-200">
            Acerca de
          </Link>
          <Link href="/contact" className=" hover:text-primary">
            Contacto
          </Link>
          {session ? (
            <>
              <p className="text-green-500">
                Registrado como {session.user?.email}
              </p>
              <button
                onClick={() => signOut()}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
              >
                Cerrar sesión
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => signIn()}
                className="hover:bg-primary hover:text-black text-white bg-secondary-100 duration-300 transition-color px-3 py-2 rounded-lg"
              >
                Iniciar sesión
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
