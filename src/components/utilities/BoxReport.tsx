"use client";
import {
  RiAccountBoxFill,
  RiAccountBoxLine,
  RiCarLine,
  RiCommunityLine,
  RiMap2Line,
  RiSteering2Line,
  RiTicketLine,
} from "react-icons/ri";

interface Props {
  ventas: string;
  clientes: string;
}

const BoxReport = ({ ventas, clientes }: Props) => {
  return (
    <div className="bg-secondary-100 p-8 rounded-xl mb-3">
      <div className="grid gap-6 mb-6 grid-cols-1 md:grid-cols-4 xl:grid-cols-4 lg:grid-cols-3">
        {/* Card */}
        <div className="bg-secondary-900 p-8 rounded-xl">
          <div className=" flex items-center justify-between mb-4">
            <div>
              <h1 className="text-red-500 text-xl font-semibold">Ventas </h1>
            </div>
            <div>
              <RiTicketLine className="text-2xl bg-red-500/10 text-red-500 p-2 box-content rounded-xl" />
            </div>
          </div>
          <div>
            <h1 className="text-2xl text-white">&euro; {ventas}</h1>
            <h1 className="text-2xl text-white">&euro; {clientes}</h1>
          </div>
        </div>
        <div className="bg-secondary-900 p-8 rounded-xl">
          <div className=" flex items-center justify-between mb-4">
            <div>
              <h1 className="text-green-500 text-xl font-semibold">
                Clientes{" "}
              </h1>
            </div>
            <div>
              <RiAccountBoxLine className="text-2xl bg-green-500/10 text-green-500 p-2 box-content rounded-xl" />
            </div>
          </div>
          <div>
            <h1 className="text-2xl text-white">&euro; {ventas}</h1>
            <h1 className="text-2xl text-white">&euro; {clientes}</h1>
          </div>
        </div>
        <div className="bg-secondary-900 p-8 rounded-xl">
          <div className=" flex items-center justify-between mb-4">
            <div>
              <h1 className="text-blue-500 text-xl font-semibold">
                Vehiculos{" "}
              </h1>
            </div>
            <div>
              <RiCarLine className="text-2xl bg-blue-500/10 text-blue-500 p-2 box-content rounded-xl" />
            </div>
          </div>
          <div>
            <h1 className="text-2xl text-white">&euro; {ventas}</h1>
            <h1 className="text-2xl text-white">&euro; {clientes}</h1>
          </div>
        </div>
        <div className="bg-secondary-900 p-8 rounded-xl">
          <div className=" flex items-center justify-between mb-4">
            <div>
              <h1 className="text-yellow-500 text-xl font-semibold">
                Empresas{" "}
              </h1>
            </div>
            <div>
              <RiCommunityLine className="text-2xl bg-yellow-500/10 text-yellow-500 p-2 box-content rounded-xl" />
            </div>
          </div>
          <div>
            <h1 className="text-2xl text-white">&euro; {ventas}</h1>
            <h1 className="text-2xl text-white">&euro; {clientes}</h1>
          </div>
        </div>
        <div className="bg-secondary-900 p-8 rounded-xl">
          <div className=" flex items-center justify-between mb-4">
            <div>
              <h1 className="text-orange-500 text-xl font-semibold">
                Viajes realizados{" "}
              </h1>
            </div>
            <div>
              <RiMap2Line className="text-2xl bg-orange-500/10 text-orange-500 p-2 box-content rounded-xl" />
            </div>
          </div>
          <div>
            <h1 className="text-2xl text-white">&euro; {ventas}</h1>
            <h1 className="text-2xl text-white">&euro; {clientes}</h1>
          </div>
        </div>
        <div className="bg-secondary-900 p-8 rounded-xl">
          <div className=" flex items-center justify-between mb-4">
            <div>
              <h1 className="text-purple-500 text-xl font-semibold">
                Pasajeros registrados{" "}
              </h1>
            </div>
            <div>
              <RiTicketLine className="text-2xl bg-purple-500/10 text-purple-500 p-2 box-content rounded-xl" />
            </div>
          </div>
          <div>
            <h1 className="text-2xl text-white">&euro; {ventas}</h1>
            <h1 className="text-2xl text-white">&euro; {clientes}</h1>
          </div>
        </div>
        <div className="bg-secondary-900 p-8 rounded-xl">
          <div className=" flex items-center justify-between mb-4">
            <div>
              <h1 className="text-pink-500 text-xl font-semibold">
                Administradores{" "}
              </h1>
            </div>
            <div>
              <RiTicketLine className="text-2xl bg-pink-500/10 text-pink-500 p-2 box-content rounded-xl" />
            </div>
          </div>
          <div>
            <h1 className="text-2xl text-white">&euro; {ventas}</h1>
            <h1 className="text-2xl text-white">&euro; {clientes}</h1>
          </div>
        </div>
        <div className="bg-secondary-900 p-8 rounded-xl">
          <div className=" flex items-center justify-between mb-4">
            <div>
              <h1 className="text-green-400 text-xl font-semibold">
                Conductores{" "}
              </h1>
            </div>
            <div>
              <RiSteering2Line className="text-2xl bg-green-400/10 text-green-400 p-2 box-content rounded-xl" />
            </div>
          </div>

          <div>
            <h1 className="text-2xl text-white">&euro; {ventas}</h1>
            <h1 className="text-2xl text-white">&euro; {clientes}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoxReport;
