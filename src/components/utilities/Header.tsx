import {
  RiArrowDownSLine,
  RiSettings3Line,
  RiLogoutCircleRLine,
} from "react-icons/ri";
import Link from "next/link";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import { useSession, signOut } from "next-auth/react";

const Header = () => {
  const { data: session } = useSession();

  return (
    <header
      className="h-[7vh] md:h-[10vh] border-b border-gray-400 px-4 flex
          items-center justify-end "
    >
      <nav className="flex items-center gap-x-5">
        <Menu
          menuButton={
            <MenuButton  className="flex items-center gap-x-2.5 hover:bg-secondary-100 py-2.5 px-3 rounded-lg transition-colors ">
              {/* Contenido */}
              <img
                className="w-6 h-6 rounded-full object-cover"
                src="https://img.freepik.com/foto-gratis/imagen-hombre-mayor-guapo-emocional-cabeza-calva-barba-gris-sonriendo-ampliamente-apuntando-dedo-indice-camara-riendose-historia-divertida-o-broma-posando-aislado-pared-blanca-estudio_343059-4227.jpg"
              />
              <span>Juan Pineda</span>
              <RiArrowDownSLine />
              {/* Fin contenido */}
            </MenuButton>
          }
          // arrow
          align="end"
          transition
          menuClassName="bg-secondary-100 p-4"
        >
          <MenuItem className="p-0 hover:bg-transparent">
            {" "}
            <Link
              href="/home"
              className="rounded-lg text-gray-300 hover:bg-secondary-900 transition-colors flex 
                  items-center gap-x-4 flex-1 px-6 py-2"
            >
              <div className="flex flex-col text-sm">
                <span>Juan Pineda</span>
                <span className="text-xs text-gray-500">
                  {session?.user?.email}
                </span>
              </div>
            </Link>
          </MenuItem>

          <hr className="my-3 border-gray-500" />

          <MenuItem className="p-0 hover:bg-transparent">
            <Link
              href="/configuracion"
              className="rounded-lg text-gray-300 hover:bg-secondary-900 transition-colors flex 
                items-center gap-x-4 py-2 px-6 flex-1"
            >
              {" "}
              {/*Se utiliza flex-1 para qué tome todo el ancho, aunque viendolo bien w-full hace la misma funcion, no sé cual sea la diferencia, si es porqué este item ya tiene un flex */}
              <RiSettings3Line className="w-5 h-5" />
              Configuracion
            </Link>
          </MenuItem>

          <MenuItem className="p-0 hover:bg-transparent">
            <Link
              href="/login"
              onClick={() => signOut()}
              className="rounded-lg text-gray-300 hover:bg-secondary-900 transition-colors flex 
                items-center gap-x-4 py-2 px-6 flex-1"
            >
              {" "}
              {/*Se utiliza flex-1 para qué tome todo el ancho, aunque viendolo bien w-full hace la misma funcion, no sé cual sea la diferencia, si es porqué este item ya tiene un flex */}
              <RiLogoutCircleRLine className="w-5 h-5" />
              Cerrar sesión
            </Link>
          </MenuItem>
        </Menu>
      </nav>
    </header>
  );
};

export default Header;
