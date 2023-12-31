/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";

// Importa los íconos necesarios
import React, { useState } from "react";
import {
  useReactTable,
  flexRender,
  getPaginationRowModel,
  getCoreRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";
import { useSession } from "next-auth/react";
import { MdAdminPanelSettings } from "react-icons/md";
import { ImUserTie } from "react-icons/im";
import { TbUserFilled } from "react-icons/tb";
interface User {
  id: string;
  email: string;
  role: string;
  isActive: boolean;
  createdAt: string;
}

const userTable = () => {
  const { data: session } = useSession();
  const [list, setList] = React.useState<User[]>([]);
  const [globalFilter, setGlobalFilter] = useState<string>("");

  console.log(globalFilter);

  React.useEffect(() => {
    if (session?.user?.token) {
      getUserList();
    }
  }, [session?.user?.token]);

  const getUserList = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/users`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${session?.user.token}`,
          },
        }
      );

      const data = await response.json();

      setList(data);
    } catch (error) {
      console.error("Error al traer la data:", error);
    }
  };

  const formatStatus = (isActive: boolean) => {
    return isActive ? "Activo" : "Inactivo";
  };

  const formatType = (user: User) => {
    switch (user.role) {
      case "Admin":
        return "Administrador";
      case "Manager":
        return "Jefe";
      case "User":
      default:
        return "Usuario";
    }
  };

  const getRoleInfo = (role: string) => {
    switch (role) {
      case "Admin":
        return { color: "red", icon: <MdAdminPanelSettings /> };
      case "Manager":
        return { color: "sky", icon: <ImUserTie /> };
      case "User":
      default:
        return { color: "lime", icon: <TbUserFilled /> };
    }
  };

  const columns = [
    {
      header: "Correo electrónico",
      accessorKey: "email" as const,
    },
    {
      header: "Rol",
      accessorKey: "role" as const,
      cell: (data: any) => {
        const roleInfo = getRoleInfo(data.row.original.role);
        return (
          <div className="flex items-center">
            <span className={`text-${roleInfo.color}-600 mr-2 font-semibold`}>
              {formatType(data.row.original)}
            </span>
            {roleInfo.icon}
          </div>
        );
      },
    },
    {
      header: "Estado",
      accessorKey: "isActive" as const,
      cell: (data: any) => formatStatus(data.row.original.isActive),
    },
    {
      header: "Fecha de creación",
      accessorKey: "createdAt" as const,
    },
  ];

  const table = useReactTable({
    columns,
    data: list,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      globalFilter,
    },
    onGlobalFilterChange: setGlobalFilter,
  });

  // console.log("a ver cuántas veces renderizas");

  return (
    <div className="px-2 py-2 m-4">
      {list.length > 0 && (
        <div className="mb-3 text-right">
          <input
            type="text"
            onChange={(event) => setGlobalFilter(event.target.value)}
            className="px-2 outline-none bg-secondary-900 py-2 w-[25%] rounded-lg border border-gray-600 hover:border-gray-400 duration-200 focus:border-blue-500 "
            placeholder="Buscar..."
          />
        </div>
      )}

      <div className="overflow-x-auto">
        {list.length > 0 ? (
          <table className="w-full rounded-xl mb-4">
            <thead className="table-auto bg-secondary-900 text-primary">
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id} className=" border-gray-300">
                  {headerGroup.headers.map((header) => (
                    <th key={header.id} className="text-left py-2 px-2">
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.map((row) => (
                <tr
                  key={row.id}
                  className="text-gray-300 hover:bg-secondary-900 hover:text-white"
                >
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id} className="py-2 px-2 sm:py-5 sm:px-5">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>Cargando datos...</p>
        )}

        {list.length > 0 && (
          <div className="mt-4 flex flex-col sm:flex-row items-center justify-between">
            <div className="flex items-center gap-2">
              <button
                className="text-gray-400 bg-secondary-900 py-1 px-3 rounded border border-secondary-900/5"
                onClick={() => table.setPageIndex(0)}
                disabled={!table.getCanPreviousPage()}
              >
                {"Primera página"}
              </button>
              <button
                className="text-gray-400 bg-secondary-900 py-1 px-3 rounded border border-secondary-900/5 disabled:hover:bg-secondary-900 disabled:hover:text-white"
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
              >
                {"Anterior"}
              </button>
              <button
                className="text-gray-400 bg-secondary-900 py-1 px-3 rounded border border-secondary-900/5"
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
              >
                {"Siguiente"}
              </button>
              <button
                className="text-gray-400 bg-secondary-900 py-1 px-3 rounded border border-secondary-900/5"
                onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                disabled={!table.getCanNextPage()}
              >
                {"Última página"}
              </button>
            </div>

            <div className="font-semibold text-gray-500">
              <p>
                {Number(table.getRowModel().rows[0]?.id) + 1} de{" "}
                {Number(
                  table.getRowModel().rows[table.getRowModel().rows.length - 1]
                    ?.id
                ) + 1}{" "}
                Total: {list.length} registros{" "}
              </p>
              <p className="text-xs"> </p>
            </div>

            <select
              className="px-2 outline-none bg-secondary-900 py-2 rounded-lg border border-gray-600  hover:border-gray-400 duration-200 focus:border-blue-500"
              onChange={(event) => {
                table.setPageSize(Number(event.target.value));
              }}
            >
              <option value="10">10 pág</option>
              <option value="20">20 pág</option>
              <option value="25">25 pág</option>
              <option value="50">50 pág</option>
            </select>
          </div>
        )}
      </div>
    </div>
  );
};

export default userTable;
