"use client";
import { ReactNode } from "react";
import {
  RiAccountBoxLine,
  RiCarLine,
  RiMap2Line,
  RiSteering2Line,
  RiTicketLine,
} from "react-icons/ri";

interface Props {
  cantidad: number | null;
  icon: ReactNode;
  title: ReactNode; // Puedes ajustar el tipo según la naturaleza del contenido del título
}

const BoxReport = ({ cantidad, icon, title }: Props) => {
  return (
    <div className="bg-secondary-900 p-8 rounded-xl">
      <div className="flex items-center justify-between mb-4">
        <div>{title}</div>
        <div>{icon}</div>
      </div>
      <div>
        <h1 className="text-4xl text-white font-bold">{cantidad}</h1>
      </div>
    </div>
  );
};

export default BoxReport;
