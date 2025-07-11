"use client";
import Badge from "@/components/ui/badge/Badge";
import Card from "@/components/ui/card/Card";
import React from "react";
import {
  LuCircleCheckBig,
  LuDollarSign,
  LuShoppingCart,
  LuUsers,
} from "react-icons/lu";

export default function Confirm() {
  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-x-2">
        <LuCircleCheckBig className="size-6 text-blue-500" />
        <p className="font-bold text-xl">Confirmacion de Venta</p>
      </div>
      <div className="grid md:grid-cols-2 gap-4 mt-4 border-b pb-5 border-gray-200">
        <div>
          <p>Informacion del Cliente</p>
          <p>
            <span className="font-bold">Cliente</span>: Juan Perez
          </p>
          <p>
            <span className="font-bold">RUC</span>: 1234567890
          </p>
          <p>
            <span className="font-bold">Telefono</span>: 0987654321
          </p>
        </div>
        <div>
          <p>Detalles de la Venta</p>
          <p>
            <span className="font-bold">Servicios</span>: Servicio 1, Servicio 2
          </p>
          <p>
            <span className="font-bold">Personal</span>: 1 empleado
          </p>
          <p>
            <span className="font-bold">Estado</span>:{" "}
            <Badge className="bg-amber-100 text-amber-600 font-bold border-none dark:bg-amber-500/20 dark:text-amber-500">
              Pendiente
            </Badge>
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-4 mt-4">
        <Card
          title="Servicios"
          icon={<LuShoppingCart size={28} className="text-white" />}
          description={"S/. 1000"}
          className={{
            container:
              "bg-blue-100 shadow-lg dark:bg-gray-800 dark:border dark:border-gray-700 dark:hover:shadow-blue-400/10 dark:transition-all",
            icon: "bg-blue-600 rounded-full p-3 dark:bg-blue-500/30",
            text: {
              title: "text-blue-700 dark:text-blue-400",
              description: "text-blue-900 text-3xl dark:text-blue-400",
              extra: "text-blue-600 dark:text-blue-400",
            },
          }}
        />
        <Card
          title="Total Personal"
          icon={<LuUsers size={28} className="text-white" />}
          description={"S/. 1800"}
          className={{
            container:
              "bg-purple-100 shadow-lg  dark:bg-gray-800 dark:border dark:border-gray-700 dark:hover:shadow-purple-400/10 dark:transition-all",
            icon: "bg-purple-600 rounded-full p-3 dark:bg-purple-500/30",
            text: {
              title: "text-purple-700 dark:text-purple-400",
              description: "text-purple-900 text-3xl dark:text-purple-400",
              extra: "text-purple-600 dark:text-purple-400",
            },
          }}
        />
        <Card
          title="Ventas Completadas"
          icon={<LuDollarSign size={28} className="text-white" />}
          description={"S/. 2800"}
          className={{
            container:
              "bg-green-100 shadow-lg dark:bg-gray-800 dark:border dark:border-gray-700 dark:hover:shadow-green-400/10 dark:transition-all",
            icon: "bg-green-600 rounded-full p-3 dark:bg-green-500/30",
            text: {
              title: "text-green-700 dark:text-green-400",
              description: "text-green-900 text-3xl dark:text-green-400",
              extra: "text-green-600 dark:text-green-400",
            },
          }}
        />
      </div>
    </div>
  );
}
