import {
  RiBarChart2Line,
  RiEarthLine,
  RiMessage2Line,
  RiCalendarTodoLine,
  RiLogoutCircleLine,
  RiArrowRightSLine,
  RiMenu3Line,
  RiCloseLine,
} from "react-icons/ri";
import { useState } from "react";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

const Sidebar = () => {
  const [showSubMenu, setShowSubMenu] = useState<boolean>();
  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <>
      <div
        className={`xl:h-[100vh] overflow-y-scroll xl:static fixed w-[80%] md:w-[50%] lg:w-[50%] xl:w-auto  h-full top-0 bg-secondary-100 z-50 
            pt-8 px-2 flex flex-col justify-between ${
              showMenu ? "left-0" : "-left-full"
            } transition-all text-[14.7px]
            `}
      >
        {" "}
        {/*Aqui solo cambie los padding porque se me corrian todos- el video dice padding-8        agg text-[14.7px]     */}
        <div>
          <h1 className="text-center text-2xl font-bold mb-6">
            Ad<span className="text-primary ">min.</span>
          </h1>

          <ul>
            <li>
              <Link
                href="/"
                className="flex items-center py-2 px-4  gap-4 rounded-lg hover:bg-secondary-900 transition-colors"
              >
                <RiBarChart2Line className="text-primary" /> Analytic
              </Link>
            </li>

            <li>
              <button
                onClick={() => setShowSubMenu(!showSubMenu)}
                className="w-full flex items-center py-2 px-4 gap-4 rounded-lg hover:bg-secondary-900 transition-colors"
              >
                <span className="flex items-center gap-4">
                  <RiEarthLine className="text-primary" /> Administrar
                </span>
                <RiArrowRightSLine
                  className={`mt-1 ${
                    showSubMenu ? "rotate-90 transition-all" : "transition-all"
                  }`}
                />
              </button>

              <ul
                className={`text-gray-400 ${
                  showSubMenu ? "h-[100px]" : "h-0"
                } overflow-hidden transition-all`}
                // className={`my-2 text-gray-400 ${!showSubMenu && "hidden"}`}
              >
                <li>
                  <Link
                    href="/dashboard/vehicles"
                    className=" py-2 px-4 border-l border-gray-500 ml-6 block
                                    relative before:absolute before:w-3 before:h-3 before:bg-primary before:rounded-full
                                    before:-left-[6px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-secondary-100 hover:text-white transition-colors  
                                    "
                  >
                    Vehiculos
                  </Link>
                </li>
                <li>
                  <Link
                    href="/dashboard/offices"
                    className=" py-2 px-4 border-l border-gray-500 ml-6 block
                                    relative before:absolute before:w-3 before:h-3 before:bg-primary before:rounded-full
                                    before:-left-[6px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-secondary-100 hover:text-white transition-colors  
                                    "
                  >
                    Oficinas
                  </Link>
                </li>
                <li>
                  <Link
                    href="/dashboard/customers"
                    className=" py-2 px-4 border-l border-gray-500 ml-6 block
                                    relative before:absolute before:w-3 before:h-3 before:bg-primary before:rounded-full
                                    before:-left-[6px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-secondary-100 hover:text-white transition-colors  
                                    "
                  >
                    Clientes
                  </Link>
                </li>
                <li>
                  <Link
                    href="/dashboard/register_vehicle"
                    className="px-4 border-l border-gray-500 ml-6 block
                                    relative before:absolute before:w-3 before:h-3 before:bg-gray-500 before:rounded-full
                                    before:-left-[6px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-secondary-100  hover:text-white transition-colors
                                    "
                  >
                    Estadisticas
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="py-2 px-4 border-l border-gray-500 ml-6 block
                                    relative before:absolute before:w-3 before:h-3 before:bg-gray-500 before:rounded-full
                                    before:-left-[6px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-secondary-100  hover:text-white transition-colors
                                    "
                  >
                    Redes
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link
                href="/"
                className="flex items-center py-2 px-4 gap-4 rounded-lg hover:bg-secondary-900 transition-colors"
              >
                <RiMessage2Line className="text-primary" /> Mensajes
              </Link>
            </li>

            <li>
              <Link
                href="/"
                className="flex items-center py-2 px-4 gap-4 rounded-lg hover:bg-secondary-900 transition-colors"
              >
                <RiCalendarTodoLine className="text-primary" /> Calendario
              </Link>
            </li>
          </ul>
        </div>
        <nav>
          {/* <button
                    onClick={() => signOut()}
                    className="flex w-full items-center py-2 px-6 gap-4 rounded-lg hover:bg-secondary-900 transition-colors"
                    
                  >
                    <RiLogoutCircleLine className="text-primary"/> Cerrar Sesion
                  </button> */}

          <Link
            href="/login"
            onClick={() => signOut()}
            className="flex items-center py-2 px-4  gap-4 rounded-lg hover:bg-secondary-900 transition-colors"
          >
            <RiLogoutCircleLine className="text-primary" /> Cerrar Sesion
          </Link>
        </nav>
      </div>

      <button
        onClick={() => setShowMenu(!showMenu)}
        className="xl:hidden fixed right-4 bottom-4 bg-primary rounded-full text-black p-3 z-50"
      >
        {showMenu ? <RiCloseLine /> : <RiMenu3Line />}
      </button>
    </>
  );
};

export default Sidebar;
