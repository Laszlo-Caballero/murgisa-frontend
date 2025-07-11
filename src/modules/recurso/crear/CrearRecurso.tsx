
"use client";

import { LuPackage } from "react-icons/lu";
import { LuLayers } from "react-icons/lu";
import { MdSocialDistance } from "react-icons/md";
import { LuBuilding2 } from "react-icons/lu";
import { CiMoneyBill } from "react-icons/ci";
import { FiPlus } from "react-icons/fi";

import Button from "@/components/ui/button/Button";
import Input from "@/components/ui/input/Input";
import Select from "@/components/ui/select/Select";

import { Proveedor, Response, TipoRecurso } from "@/interfaces/responsefinal.interface";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RecursoSchema } from "@/schemas/Recurso.schema";
import { useMutation } from "@/hooks/useMutation";
import { toast } from "sonner";
import { useTableContext } from "@/context/TableContext";
import { z } from "zod";
import { ModalProps } from "@/interfaces/modal.interface";
import { useQuery } from "@/hooks/useQuery";
import { env } from "@/config/env";
import Load from "@/components/share/load/Load";
import axios from "axios";

import { Recurso } from "@/interfaces/responsefinal.interface";
import { Disponibilidad } from "@/interfaces/responsefinal.interface";

export default function CrearRecurso({ onClose }: ModalProps) {

  const { data, isLoading: loadingRecursos } = useQuery({
    queryFn: async () => {
      const response = await axios.get<Response<Disponibilidad[]>>(
        `${env.url_api}/utils/disponibilidad`
      );
      return response.data;
    },
  });

  const { data:TipoRecurso, isLoading: loadingTipo } = useQuery({
    queryFn: async () => {
      const response = await axios.get<Response<TipoRecurso[]>>(
        `${env.url_api}/tipo-recurso`
      );
      return response.data;
    },
  });

    const { data:Proveedor, isLoading: loadingProveedor} = useQuery({
    queryFn: async () => {
      const response = await axios.get<Response<Proveedor[]>>(
        `${env.url_api}/proveedor`
      );
      return response.data;
    },
  });

  const {
    register,
    setValue, 
    watch, 
    formState:{errors},
    handleSubmit,
  } = useForm({
    resolver: zodResolver(RecursoSchema)
  });

  const { refresh } = useTableContext<Recurso>();

  const { mutate, isLoading } = useMutation<
    z.infer<typeof RecursoSchema>,
    Response<Recurso[]>
  >({
    mutationFn: async (data, url, token) => {
      const response = await axios.post(
        `${url}/recurso`,
        {
          nombre: data.nombre,
          categoriaId: parseInt(data.categoria.value),
          proveedorId: parseInt(data.proveedor.value),
          disponibilidadId: parseInt(data.disponibilidad.value),
          precio:data.precio,
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
      toast.success("Recurso registrado exitosamente");
      refresh(data.data);
      onClose?.();
    },
    onError: () => {
      toast.error(
        "Error al registrar el recurso. Por favor, intenta nuevamente."
      );
    },
  });

  return (
    <form 
    onSubmit={handleSubmit(mutate)}
    className="w-full max-w-sm md:max-w-3xl rounded-lg bg-white p-8 flex flex-col gap-y-4 dark:bg-gray-800 border dark:border-gray-700">
      {(isLoading || loadingRecursos || loadingTipo ) && <Load />}
      <header className="flex items-center gap-x-3">
        <LuPackage size={40} className="text-red-600" />
        <div className="flex flex-col">
          <p className="text-xl font-semibold dark:twxt-white text-white">Agregar Recurso</p>
          <p className="text-sm text-gray-500">
            Completa los datos para registrar un nuevo recurso en el sistema
          </p>
        </div>
      </header>
      <div className="grid lg:grid-cols-2 gap-4 text-white">
        <Input
          label="Nombre del Recurso"
          icon={<LuPackage />}
          placeholder="Ej: Recurso"
          {...register("nombre")}
          error={errors.nombre?.message}
        />

        <Select
          label="Categoria"
          icon={<LuLayers />}
          placeholder="Selecciona una categoría"
          options={TipoRecurso?.data.map((tipo) => {
            return{
              label: tipo.nombre,
              value: tipo.idTipoRecurso.toString(),
            }
          })}
          onChange={(value) => {
            setValue("categoria", {
              value: value.value,
              label: value.label?.toString() || "",
            });
          }}
          value={watch("categoria")}
          error={errors.categoria?.message}
        ></Select>

        <Select
          label="Disponibilidad"
          icon={<MdSocialDistance />}
          placeholder="Selecciona Disponibilidad"
          options={data?.data.map((disponibilidad) => {
            return{
              label: disponibilidad.disponibilidad,
              value: disponibilidad.disponibilidadId?.toString(),
            }
          })}
          onChange={(value) => {
            setValue("disponibilidad", {
              value: value.value,
              label: value.label?.toString() || "",
            });
          }}
          value={watch("disponibilidad")}
          error={errors.disponibilidad?.message}
        ></Select>

        <Select
          label="Proveedor"
          icon={<LuBuilding2 />}
          placeholder="Selecciona un Proveedor"
          options={[{ value: "1", label: "Tipo de Recurso" }]}
          // options={Proveedor?.data.map((proveedor) => {
          //   return{
          //     label: proveedor.razonSocial,
          //     value: proveedor.idProovedor.toString(),
          //   }
          // })}
          onChange={(value) => {
            setValue("proveedor", {
              value: value.value,
              label: value.label?.toString() || "",
            });
          }}
          value={watch("proveedor")}
          error={errors.proveedor?.message}
        ></Select>

        <Input 
          label="Precio" 
          icon={<CiMoneyBill />} 
          placeholder="Ej: 2 so" 
          {...register("precio")}
          error={errors.precio?.message}
        />
      </div>
      <div>
        <Button className="flex items-center gap-x-3 mt-4 bg-red-600 text-white py-3 font-semibold hover:bg-blue-500">
          <FiPlus size={15} className="mr-2" />
          Registrar Recurso
        </Button>
      </div>
    </form>
  );
}
