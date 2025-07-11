"use client";

import { LuBriefcase } from "react-icons/lu";
import Input from "@/components/ui/input/Input";
import Button from "@/components/ui/button/Button";
import { LuPencilLine } from "react-icons/lu";
import { BsFilePost } from "react-icons/bs";
import { FiPlus } from "react-icons/fi";
import { useMutation } from "@/hooks/useMutation";
import { toast } from "sonner";
import { useTableContext } from "@/context/TableContext";
import { ModalProps } from "@/interfaces/modal.interface";
import axios from "axios";
import { Response, Cargo } from "@/interfaces/responsefinal.interface";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Load from "@/components/share/load/Load";
import { CargoSchema } from "@/schemas/Cargo.schema";
import { useQuery } from "@/hooks/useQuery";
import { useEffect } from "react";

interface ActualizarCargoProps extends ModalProps {
  id?: number;
}

export default function ActualizarCargo({ onClose, id }: ActualizarCargoProps) {
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm({
    resolver: zodResolver(CargoSchema),
  });

  const { refresh } = useTableContext<Cargo>();

  const { mutate, isLoading } = useMutation<
    z.infer<typeof CargoSchema>,
    Response<Cargo[]>
  >({
    mutationFn: async (data, url, token) => {
      const response = await axios.patch(
        `${url}/cargo`,
        {
          cargo: data.cargo,
          descripcion: data.descripcion,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return response.data;
    },
    onSuccess: (data) => {
      toast.success("Cargo registrado exitosamente");
      refresh(data.data);
      onClose?.();
    },
    onError: () => {
      toast.error(
        "Error al registrar el cargo. Por favor, intenta nuevamente."
      );
    },
  });

  const { data: cargos, isLoading: isLoadingCargos } = useQuery<
    Response<Cargo>
  >({
    queryFn: async (url, token) => {
      const response = await axios.get(`${url}/cargo/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
    },
  });

  useEffect(() => {
    if (cargos) {
      const cargoData = cargos.data;
      if (cargoData) {
        setValue("cargo", cargoData.cargo);
        setValue("descripcion", cargoData.descripcion);
      }
    }
  }, [cargos, id, setValue]);

  return (
    <form
      onSubmit={handleSubmit(mutate)}
      className="w-full max-w-sm md:max-w-3xl bg-white p-6 rounded-xl shadow-lg flex flex-col gap-6 dark:bg-gray-800 border dark:border-gray-700"
    >
      {(isLoading || isLoadingCargos) && <Load />}
      <header className="flex items-center gap-x-3">
        <LuBriefcase size={40} className="text-blue-600" />
        <div className="flex flex-col">
          <p className="text-xl font-semibold  dark:text-white">
            Actualizar Cargo
          </p>
          <p className="text-sm text-gray-500">
            Completa los datos para actualizar el cargo en el sistema
          </p>
        </div>
      </header>
      <div className="grid grid-cols-1 gap-4  dark:text-white">
        <Input
          label="Nombre del Cargo"
          icon={<BsFilePost />}
          placeholder="Ej: Gerente de Ventas"
          {...register("cargo")}
          error={errors.cargo?.message}
        />
        <Input
          label="Descripcion"
          icon={<LuPencilLine />}
          placeholder="Ej: Laszlo"
          {...register("descripcion")}
          error={errors.descripcion?.message}
        />
      </div>
      <div>
        <Button className="flex items-center gap-x-3 mt-4 bg-blue-600 text-white py-3 font-semibold hover:bg-blue-500">
          <FiPlus size={15} className="mr-2 " />
          Actualizar Cargo
        </Button>
      </div>
    </form>
  );
}
