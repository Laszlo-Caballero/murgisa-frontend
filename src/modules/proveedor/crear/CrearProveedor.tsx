"use client";
import { LuBuilding2 } from "react-icons/lu";
import { LuUserRound } from "react-icons/lu";
import { PiIdentificationCardLight } from "react-icons/pi";
import { LuMail } from "react-icons/lu";
import { LuBarcode } from "react-icons/lu";
import { FiPlus } from "react-icons/fi";

import Button from "@/components/ui/button/Button";
import Input from "@/components/ui/input/Input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ProveedorSchema } from "@/schemas/Proveedor.schema";
import { BsFillTelephoneFill } from "react-icons/bs";
import { useMutation } from "@/hooks/useMutation";
import axios from "axios";
import { toast } from "sonner";
import { z } from "zod";
import { ModalProps } from "@/interfaces/modal.interface";
import { useTableContext } from "@/context/TableContext";
import { Proveedor } from "@/interfaces/response.interface";
import { Response } from "@/interfaces/responsefinal.interface";
import Load from "@/components/share/load/Load";

export default function CrearProveedor({ onClose }: ModalProps) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: zodResolver(ProveedorSchema),
  });
  const { refresh } = useTableContext<Proveedor>();
  const { mutate, isLoading } = useMutation<
    z.infer<typeof ProveedorSchema>,
    Response<Proveedor[]>
  >({
    mutationFn: async (data, url, token) => {
      const response = await axios.post(
        `${url}/proveedor`,
        { ...data, dniResponsable: data.dni },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    },
    onSuccess: (data) => {
      toast.success("Proveedor registrado exitosamente");
      refresh(data.data);
      onClose?.();
    },
    onError: () => {
      toast.error(
        "Error al registrar el proveedor. Por favor, intenta nuevamente"
      );
    },
  });
  return (
    <form
      onSubmit={handleSubmit(mutate)}
      className="w-full max-w-sm md:max-w-3xl rounded-lg bg-white dark:bg-gray-900 p-8 flex flex-col gap-y-4 text-gray-900 dark:text-white"
    >
      {isLoading && <Load />}
      <header className="flex items-center gap-x-3">
        <LuBuilding2 size={40} className="text-red-600 mb-2" />
        <div className="flex flex-col">
          <p className="text-xl font-semibold">Agregar Nuevo Proveedor</p>
          <p className="text-sm text-gray-500 dark:text-gray-300">
            Completa los datos para registrar un nuevo proveedor en el sistema
          </p>
        </div>
      </header>
      <div className="grid lg:grid-cols-2 gap-4">
        <Input
          label="Razon Social"
          icon={<LuBuilding2 />}
          placeholder="Ej: RentaMaq Perú S.A.C."
          {...register("razonSocial")}
          error={errors.razonSocial?.message}
        />
        <Input
          label="RUC"
          icon={<LuBarcode />}
          placeholder="Ej: 20481234567"
          {...register("ruc")}
          error={errors.ruc?.message}
        />
        <Input
          label="Nombre del Responsable"
          icon={<LuUserRound />}
          placeholder="Ej: Fernando Torres"
          {...register("nombreResponsable")}
          error={errors.nombreResponsable?.message}
        />
        <Input
          label="DNI"
          icon={<PiIdentificationCardLight />}
          placeholder="Ej: 45672198"
          {...register("dni")}
          error={errors.dni?.message}
        />
        <Input
          label="Email"
          icon={<LuMail />}
          placeholder="Ej: correo@ejemplo.com"
          type="email"
          {...register("correo")}
          error={errors.correo?.message}
        />
        <Input
          label="Telefono"
          icon={<BsFillTelephoneFill />}
          placeholder="Ej: 934180445"
          {...register("telefono")}
          error={errors.telefono?.message}
        />
      </div>
      <div>
        <Button className="flex items-center gap-x-3 mt-4 bg-red-600 text-white py-3 font-semibold hover:bg-red-500">
          <FiPlus size={15} className="mr-2" />
          Registrar Proveedor
        </Button>
      </div>
    </form>
  );
}
