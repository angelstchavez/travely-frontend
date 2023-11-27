/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import {
  useReactTable,
  flexRender,
  getPaginationRowModel,
  getCoreRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { FaBuilding, FaUserTie } from "react-icons/fa6";

interface Person {
  id: string;
  firstName: string;
  middleName: string | null;
  lastName: string;
  secondLastName: string | null;
  mobilePhone: string;
  createdAt: string;
}

interface Company {
  id: string;
  name: string;
  contactNumber: string;
  createdAt: string;
}

interface Customer {
  id: string;
  company: Company | null;
  person: Person | null;
}

const customerTable = () => {
  const { data: session } = useSession();
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [globalFilter, setGlobalFilter] = useState<string>("");

  useEffect(() => {
    if (session?.user?.token) {
      getCustomerList();
    }
  }, [session?.user?.token]);

  const getCustomerList = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/customers`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${session?.user.token}`,
          },
        }
      );

      const data = await response.json();

      setCustomers(data.customers);
    } catch (error) {
      console.error("Error al traer la data:", error);
    }
  };

  const formatType = (customer: Customer) => {
    return customer.company ? "Empresa" : "Persona";
  };

  const columns = [
    {
      header: "Nombre",
      accessorKey: "name" as const,
      cell: (data: any) => {
        const { person, company } = data.row.original;
        return person
          ? `${person.firstName} ${person.middleName || ""} ${
              person.lastName
            } ${person.secondLastName || ""}`
          : company?.name || "";
      },
    },
    {
      header: "Número de Contacto",
      accessorKey: "contactNumber" as const,
      cell: (data: any) =>
        data.row.original.person?.mobilePhone ||
        data.row.original.company?.contactNumber ||
        "",
    },
    {
      header: "Tipo de Cliente",
      accessorKey: "type" as const,
      cell: (data: any) => (
        <div className="flex items-center">
          <span
            className={`text-${
              data.row.original.company ? "blue" : "green"
            }-700 mr-2 font-semibold`}
          >
            {formatType(data.row.original)}
          </span>
          {data.row.original.company ? (
            <FaBuilding className="text-blue-600" />
          ) : (
            <FaUserTie className="text-green-600" />
          )}
        </div>
      ),
    },
    {
      header: "Fecha de Creación",
      accessorKey: "createdAt" as const,
      cell: (data: any) => data.row.original.createdAt || "",
    },
  ];

  const table = useReactTable({
    columns,
    data: customers,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      globalFilter,
    },
    onGlobalFilterChange: setGlobalFilter,
  });

  console.log("a ver cuántas veces renderizas");

  return (
    <div className="px-2 py-2 m-4">
      {customers.length > 0 && (
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
        {customers.length > 0 ? (
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

        {customers.length > 0 && (
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
                {"Ultima página"}
              </button>
            </div>

            <div className="font-semibold text-gray-500">
              <p>
                {Number(table.getRowModel().rows[0]?.id) + 1} de{" "}
                {Number(
                  table.getRowModel().rows[table.getRowModel().rows.length - 1]
                    ?.id
                ) + 1}{" "}
                Total: {customers.length} registros{" "}
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

export default customerTable;
