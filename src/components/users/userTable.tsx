"use client";

import {
  useReactTable,
  flexRender,
  getPaginationRowModel,
  getCoreRowModel,
} from "@tanstack/react-table";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";

interface User {
  id: string;
  email: string;
  role: string;
  isActive: boolean;
  createdAt: string;
}

const PruebaTableUser = () => {
  const { data: session } = useSession();

  const [list, setList] = useState<User[]>([]);

  useEffect(() => {
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

  const columns = [
    {
      header: "Correo electrónico",
      accessorKey: "email" as const,
    },
    {
      header: "Rol",
      accessorKey: "role" as const,
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
  });

  console.log("a ver cuantas veces renderizas");

  return (
    <div className="px-2 py-2">
      <table className="w-full rounded-xl mb-4">
        <thead className="table-auto ">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr
              key={headerGroup.id}
              className="border-b border-gray-300 bg-secondary-900 "
            >
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
                <td key={cell.id} className="py-5 px-2">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button className="py-0.5">{"<<"}</button>
          <button className="" onClick={() => table.previousPage()}>
            {"<"}
          </button>
          <button className="" onClick={() => table.nextPage()}>
            {">"}
          </button>
          <button>{">>"}</button>
        </div>
      </div>
    </div>
  );
};

export default PruebaTableUser;
