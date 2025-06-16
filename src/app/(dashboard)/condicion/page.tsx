"use client";

import { useState } from "react";
import { FiEdit, FiTrash2, FiSearch } from "react-icons/fi";
import { LuCalendarDays, LuEye, LuSettings } from "react-icons/lu";
import  Card  from "@/components/ui/card/Card";
import Button from "@/components/ui/button/Button";

const condiciones = [
  {
    id: "COND001",
    nombre: "Contado",
    tipo: "Pago",
    dias: "0 días",
    descuento: "-",
    aplica: "Ventas",
    uso: 45,
    estado: "Activa",
  },
  {
    id: "COND002",
    nombre: "Crédito 30 días",
    tipo: "Crédito",
    dias: "30 días",
    descuento: "-",
    aplica: "Ventas",
    uso: 23,
    estado: "Activa",
  },
  {
    id: "COND003",
    nombre: "Crédito 60 días",
    tipo: "Crédito",
    dias: "60 días",
    descuento: "-",
    aplica: "Ventas",
    uso: 12,
    estado: "Activa",
  },
  {
    id: "COND004",
    nombre: "Contado con descuento",
    tipo: "Pago",
    dias: "0 días",
    descuento: "5%",
    aplica: "Ventas",
    uso: 18,
    estado: "Activa",
  },
  {
    id: "COND005",
    nombre: "Proveedor 15 días",
    tipo: "Crédito",
    dias: "15 días",
    descuento: "-",
    aplica: "Compras",
    uso: 5,
    estado: "Inactiva",
  },
];

export default function CondicionesPage() {
  const [tab, setTab] = useState("lista");
  const total = condiciones.length;
  const activas = condiciones.filter((c) => c.estado === "Activa").length;
  const credito = condiciones.filter((c) => c.tipo === "Crédito").length;
  const usoTotal = condiciones.reduce((a, b) => a + b.uso, 0);

  return (
    <div className="p-8 w-full flex flex-col gap-6 bg-gray-50">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-x-4">
          <span className="bg-blue-600 p-3 rounded-xl">
            <FiSearch size={28} className="text-white" />
          </span>
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold">Gestión de Condiciones</h1>
            <p className="text-sm text-gray-600">
              Administra las condiciones de pago y crédito de MURGISA
            </p>
          </div>
        </div>
        <Button className="bg-blue-600 text-white font-semibold px-4 py-2 rounded hover:bg-blue-700">
          + Nueva Condición
        </Button>
      </div>

      <div className="grid grid-cols-4 gap-x-4 mt-6">
        <Card
          title="Total de Condiciones"
          icon={<LuSettings size={28} className="text-white" />}
          description={`${total}`}
          extra="Registradas"
          className={{
            container: "bg-purple-100 shadow-lg",
            icon: "bg-purple-600 rounded-full p-3",
            text: {
              title: "text-purple-700",
              description: "text-purple-900 text-3xl",
              extra: "text-purple-600",
            },
          }}
        />
        <Card
          title="Condiciones Activas"
          icon={<FiSearch size={28} className="text-white" />}
          description={`${activas}`}
          extra="Disponibles"
          className={{
            container: "bg-green-100 shadow-lg",
            icon: "bg-green-600 rounded-full p-3",
            text: {
              title: "text-green-700",
              description: "text-green-900 text-3xl",
              extra: "text-green-600",
            },
          }}
        />
        <Card
          title="Condiciones de Crédito"
          icon={<LuCalendarDays size={28} className="text-white" />}
          description={`${credito}`}
          extra="Tipo Crédito"
          className={{
            container: "bg-blue-100 shadow-lg",
            icon: "bg-blue-600 rounded-full p-3",
            text: {
              title: "text-blue-700",
              description: "text-blue-900 text-3xl",
              extra: "text-blue-600",
            },
          }}
        />
        <Card
          title="Uso Total"
          icon={<LuEye size={28} className="text-white" />}
          description={`${usoTotal}`}
          extra="Transacciones"
          className={{
            container: "bg-orange-100 shadow-lg",
            icon: "bg-orange-600 rounded-full p-3",
            text: {
              title: "text-orange-700",
              description: "text-orange-900 text-3xl",
              extra: "text-orange-600",
            },
          }}
        />
      </div>
    </div>
  );
}
