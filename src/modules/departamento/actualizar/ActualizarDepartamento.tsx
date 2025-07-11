"use client";

import Input from "@/components/ui/input/Input";
import Button from "@/components/ui/button/Button";

import { LuBuilding2, LuUsers, LuPencilLine } from "react-icons/lu";
import { FiPlus } from "react-icons/fi";
import { MdAttachMoney } from "react-icons/md";

import { useMutation } from "@/hooks/useMutation";
import { toast } from "sonner";
import { useTableContext } from "@/context/TableContext";
import { ModalProps } from "@/interfaces/modal.interface";
import axios from "axios";
import { Response, Departamento } from "@/interfaces/responsefinal.interface";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { DepartamentoSchema } from "@/schemas/Departamento.schema";
import { z } from "zod";
import Load from "@/components/share/load/Load";
import { useQuery } from "@/hooks/useQuery";
import { useEffect } from "react";

interface ActualizarDepartamentoProps extends ModalProps {
  id: number;
}

export default function ActualizarDepartamento({
  onClose,
  id,
}: ActualizarDepartamentoProps) {
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm({
    resolver: zodResolver(DepartamentoSchema),
  });

  const { refresh } = useTableContext<Departamento>();

  const { mutate, isLoading } = useMutation<
    z.infer<typeof DepartamentoSchema>,
    Response<Departamento[]>
  >({
    mutationFn: async (data, url, token) => {
      const response = await axios.patch(
        `${url}/departamento/${id}`,
        {
          titulo: data.titulo,
          descripcion: data.descripcion,
          presupuesto: data.presupuesto,
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
      toast.success("Departamento registrado exitosamente");
      refresh(data.data);
      onClose?.();
    },
    onError: () => {
      toast.error(
        "Error al registrar el departamento. Por favor, intenta nuevamente."
      );
    },
  });

  const { data, isLoading: isLoadingQuery } = useQuery<Response<Departamento>>({
    queryFn: async (url, token) => {
      const response = await axios.get(`${url}/departamento/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
    },
  });

  useEffect(() => {
    if (data) {
      const departamentoData = data.data;
      setValue("titulo", departamentoData.titulo);
      setValue("descripcion", departamentoData.descripcion);
      setValue("presupuesto", departamentoData.presupuesto.toString());
    }
  }, [data, setValue]);

  return (
    <form
      onSubmit={handleSubmit(mutate)}
      className="w-full max-w-sm md:max-w-3xl bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
    >
      {(isLoading || isLoadingQuery) && <Load />}
      <header className="flex items-center gap-x-3">
        <LuBuilding2 size={40} className="text-blue-600" />
        <div className="flex flex-col">
          <p className="text-xl font-semibold text-black dark:text-white">
            Agregar Departamento
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-300">
            Completa los datos para registrar un nuevo departamento en el
            sistema
          </p>
        </div>
      </header>

      <div className="grid grid-cols-1 gap-4 mt-4">
        <Input
          label="Nombre del Departamento"
          icon={<LuBuilding2 />}
          placeholder="Ej: Departamento de Ingeniería"
          className="dark:text-white dark:placeholder-white"
          {...register("titulo")}
          error={errors.titulo?.message}
        />
        <Input
          label="Descripción"
          icon={<LuPencilLine />}
          placeholder="Describe las funciones principales del departamento"
          className="dark:text-white dark:placeholder-white"
          {...register("descripcion")}
          error={errors.descripcion?.message}
        />
        <Input
          label="Presupuesto"
          icon={<MdAttachMoney />}
          placeholder="Indique el presupuesto asignado al departamento"
          className="dark:text-white dark:placeholder-white"
          {...register("presupuesto")}
          error={errors.presupuesto?.message}
        />
      </div>

      <div>
        <Button className="flex items-center gap-x-3 mt-4 bg-blue-600 text-white py-3 font-semibold hover:bg-blue-500">
          <FiPlus size={15} className="mr-2" />
          Registrar Departamento
        </Button>
      </div>
    </form>
  );
}
