import Button from "@/components/ui/button/Button";
import Card404 from "@/components/ui/card-404/Card404";
import Link from "next/link";
import React from "react";
import { LuBuilding2 } from "react-icons/lu";
import { LuHouse } from "react-icons/lu";
import { LuShoppingCart } from "react-icons/lu";
import { LuUsers } from "react-icons/lu";
import { LuWrench } from "react-icons/lu";
export default function NotFound() {
  return (
    <div className="flex w-full flex-1 bg-blue-50/50 px-6 dark:bg-gray-900 dark:text-white">
      <main className="flex-1 flex w-full flex-col items-center justify-center mt-5">
        <span className="bg-blue-500 p-4 rounded-full flex items-center justify-center dark:bg-blue-500/30">
          <LuBuilding2 className="text-white dark:text-blue-400" size={48} />
        </span>
        <div className="flex text-center flex-col gap-y-3 mt-3">
          <p className="text-3xl font-bold">MURGISA</p>
          <p>Servicios Profesionales</p>
        </div>

        <div className="flex flex-col shadow-xl bg-white rounded-lg mt-6 dark:bg-gray-700/50">
          <div className="p-12 text-center flex flex-col justify-center gap-y-8">
            <div>
              <p className="text-9xl font-bold text-blue-600 mb-4 leading-none dark:text-blue-500">
                404
              </p>
              <span className="w-24 h-1 bg-blue-600 mx-auto mb-6"></span>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4 dark:text-slate-400">
                Página No Encontrada
              </h3>
              <p className="text-lg text-slate-600 mb-2 dark:text-slate-300">
                Lo sentimos, la página que buscas no existe o ha sido movida.
              </p>
              <p className="text-slate-500 dark:text-slate-300">
                Verifica la URL o utiliza los enlaces de navegación para
                encontrar lo que necesitas.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <Link href="/">
                <Button className="px-8 py-4 flex items-center gap-x-2 justify-center cursor-pointer dark:bg-blue-500 dark:hover:bg-blue-600">
                  <LuHouse />
                  Ir al Inicio
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="grid max-w-5xl md:grid-cols-4 items-center gap-6 my-6 w-full">
          <Card404
            icon={<LuHouse/>}
            title="Inicio"
            subtitle="Volver a la página de inicio"
            url="/"
          />
          <Card404
            icon={<LuShoppingCart />}
            title="Ventas"
            subtitle="Volver a la página de ventas"
            url="/ventas"
          />
          <Card404
            icon={<LuUsers />}
            title="Clientes"
            subtitle="Volver a la página de clientes"
            url="/cliente"
          />
          <Card404
            icon={<LuWrench />}
            title="Servicios"
            subtitle="Volver a la página de servicios"
            url="/servicios"
          />
        </div>
      </main>
    </div>
  );
}
