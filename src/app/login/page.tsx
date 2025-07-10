"use client";
import Input from "@/components/ui/input/Input";
import { LuBuilding2 } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { IoLockClosedOutline } from "react-icons/io5";
import Checkbox from "@/components/ui/checkbox/Checkbox";
import Button from "@/components/ui/button/Button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/schemas/Login.schema";
import { useAuth } from "@/context/AuthContext";
import Load from "@/components/share/load/Load";

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(LoginSchema),
  });

  const { login, loading } = useAuth();

  const onSubmit = (data: { email: string; password: string }) => {
    login(data.email, data.password);
  };

  return (
    <main className="flex-1 flex w-full h-full flex-col items-center justify-center bg-gray-100 dark:bg-gray-900">
      {loading && <Load />}
      <span className="bg-blue-500 size-14 rounded-full flex items-center justify-center dark:bg-blue-500/30 p-3">
        <LuBuilding2 className="text-white dark:text-blue-400" size={35} />
      </span>
      <div className="flex text-center flex-col gap-y-3 mt-3 dark:text-white">
        <p className="text-3xl font-bold">MURGISA</p>
        <p>Servicios Profesionales</p>
      </div>

      <form
        className="flex flex-col py-4 shadow-xl rounded-lg px-6 items-center justify-center mt-5 bg-white dark:bg-gray-700/50 dark:text-white"
        onSubmit={handleSubmit(onSubmit)}
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
            {...register("email")}
            error={errors.email?.message}
          />
          <Input
            icon={<IoLockClosedOutline />}
            label="Contraseña"
            id="password"
            type="password"
            placeholder="••••••••"
            {...register("password")}
            error={errors.password?.message}
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
