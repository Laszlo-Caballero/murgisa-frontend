"use client";
import Input from "@/components/ui/input/Input";
import { LuBuilding2 } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { IoLockClosedOutline } from "react-icons/io5";
import Checkbox from "@/components/ui/checkbox/Checkbox";
import Button from "@/components/ui/button/Button";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  return (
    <main className="flex-1 flex w-full flex-col items-center justify-center">
      <span className="bg-blue-500 size-14 rounded-full flex items-center justify-center">
        <LuBuilding2 className="text-white" size={35} />
      </span>
      <div className="flex text-center flex-col gap-y-3 mt-3">
        <p className="text-3xl font-bold">MURGISA</p>
        <p>Servicios Profesionales</p>
      </div>

      <form
        className="flex flex-col py-4 shadow-xl rounded-lg px-6 items-center justify-center min-w-[500px] mt-5"
        onSubmit={(e) => {
          e.preventDefault();
          router.push("/");
        }}
      >
        <p className="text-2xl font-semibold">Iniciar Sesión</p>
        <p className="text-sm mt-1">
          Accede a tu cuenta para gestionar tus servicios
        </p>

        <div className="flex flex-col w-full mt-4 gap-y-4">
          <Input
            icon={<MdOutlineEmail />}
            label="Correo Electrónico"
            id="email"
            placeholder="tu@empresa.com"
          />
          <Input
            icon={<IoLockClosedOutline />}
            label="Contraseña"
            id="password"
            type="password"
            placeholder="••••••••"
          />

          <div className="flex items-center justify-between w-full">
            <Checkbox id="remember-me" label="Recordarme" />
            <p className="text-blue-600 text-sm font-medium">
              ¿Olvidaste tu contraseña?
            </p>
          </div>
        </div>

        <Button className="w-full py-3 mt-6">Iniciar Sesión</Button>
      </form>
    </main>
  );
}
