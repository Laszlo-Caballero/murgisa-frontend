"use client";

import Button from "@/components/ui/button/Button";
import Link from "next/link";
import { LuHouse } from "react-icons/lu";
import { PiWarning } from "react-icons/pi";
import { TfiReload } from "react-icons/tfi";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="bg-slate-100 w-full min-h-screen flex items-center justify-center">
      <div className="p-12 min-w-2xl text-center flex flex-col items-center bg-white rounded-lg justify-center gap-y-8">
        <div className="p-4 rounded-full bg-red-100 max-w-max flex items-center justify-center">
          <PiWarning size={34} className="text-red-600" />
        </div>
        <div>
          <h3 className="text-3xl font-bold text-slate-900 mb-4">
            ¡Oops! Algo salió mal
          </h3>
          <p className="text-lg text-slate-600 mb-2">
            Ha ocurrido un error inesperado en el sistema.
          </p>
          <p className="text-slate-500">
            Nuestro equipo técnico ha sido notificado automáticamente.
          </p>
        </div>

        <div className="bg-slate-100 text-start w-full p-4 rounded-xl">
          <p>{error.message}</p>
        </div>

        <div className="flex items-center gap-x-8 justify-center">
          <Button
            className="px-8 py-4 flex items-center gap-x-2 justify-center cursor-pointer"
            onClick={() => reset()}
          >
            <TfiReload />
            Intentar de nuevo
          </Button>
          <Link href="/">
            <Button className="px-8 py-4 bg-white border border-black/30 text-black flex items-center gap-x-2 justify-center cursor-pointer">
              <LuHouse />
              Ir al Inicio
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
