"use client";
import Button from "@/components/ui/button/Button";
import { LuUsers } from "react-icons/lu";
import { MdOutlinePersonOutline } from "react-icons/md";
import { FaAddressCard } from "react-icons/fa";
import { CiMail, CiPhone, CiCirclePlus } from "react-icons/ci";
import Input from "@/components/ui/input/Input";
import Select from "@/components/ui/select/Select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ClienteSchema } from "@/schemas/Cliente.schema";
import { useMutation } from "@/hooks/useMutation";
import axios from "axios";
import { toast } from "sonner";
import { z } from "zod";
import { ModalProps } from "@/interfaces/modal.interface";
import { useTableContext } from "@/context/TableContext";
import { Cliente } from "@/interfaces/response.interface";
import { Ciudad, Response } from "@/interfaces/responsefinal.interface";
import Load from "@/components/share/load/Load";
import { useQuery } from "@/hooks/useQuery";
import { env } from "@/config/env";

export default function CrearCliente({ onClose }: ModalProps) {
  const { data, isLoading: loadingClientes } = useQuery({
    queryFn: async () => {
      const response = await axios.get<Response<Ciudad[]>>(
        `${env.url_api}/utils/ciudades`
      );
      return response.data;
    },
  });

  const {
    register,
    setValue,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: zodResolver(ClienteSchema),
  });
  const { refresh } = useTableContext<Cliente>();

  const { mutate, isLoading } = useMutation<
    z.infer<typeof ClienteSchema>,
    Response<Cliente[]>
  >({
    mutationFn: async (data, url, token) => {
      const response = await axios.post(
        `${url}/cliente`,
        {
          nombre: data.nombre,
          correo: data.correo,
          direccion: data.direccion,
          dni: data.dni,
          telefono: data.telefono,
          ciudadId: parseInt(data.ciudad.value),
          fechaNacimiento: data.fechaNacimiento,
          razonSocial: data.razonSocial,
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
      toast.success("Cliente registrado exitosamente");
      refresh(data.data);
      onClose?.();
    },
    onError: () => {
      toast.error(
        "Error al registrar el cliente. Por favor, intenta nuevamente."
      );
    },
  });

  return (
    <form
      onSubmit={handleSubmit(mutate)}
      className="w-[calc(100vw-3rem)] md:max-h-min max-h-[calc(100vh-4rem)] md:w-[700px] lg:w-[1000px] rounded-lg bg-white p-8 flex flex-col gap-y-4 dark:bg-gray-800 dark:border dark:border-gray-600 overflow-y-auto "
    >
      {(isLoading || loadingClientes) && <Load />}
      <header className="flex items-center gap-x-3">
        <LuUsers size={40} className="text-blue-600 dark:text-blue-400" />
        <div className="flex flex-col">
          <p className="text-xl font-semibold dark:text-gray-300">
            Agregar Nuevo Cliente
          </p>
          <p className="text-sm text-gray-500">
            Completa los datos para registrar un nuevo cliente en el sistema
          </p>
        </div>
      </header>
      <div className="grid lg:grid-cols-2 gap-4 dark:text-gray-300">
        <Input
          label="Nombre del Cliente"
          icon={<MdOutlinePersonOutline />}
          placeholder="Ej: Juan Pérez"
          {...register("nombre")}
          error={errors.nombre?.message}
        />
        <Input
          label="Correo del Cliente"
          icon={<CiMail />}
          placeholder="Ej: correo@ejemplo.com"
          {...register("correo")}
          error={errors.correo?.message}
          type="email"
        />
        <Input
          label="Dirección"
          icon={<CiMail />}
          placeholder="Ej: Av. Principal 123"
          {...register("direccion")}
          error={errors.direccion?.message}
        />
        <Input
          label="Dni"
          icon={<FaAddressCard />}
          placeholder="Ej: 74185296"
          {...register("dni")}
          error={errors.dni?.message}
        />
        <Input
          label="Telefono"
          icon={<FaAddressCard />}
          placeholder="Ej: 987654321"
          {...register("telefono")}
          error={errors.telefono?.message}
        />

        <Input
          label="Fecha de Nacimiento"
          icon={<CiCirclePlus />}
          type="date"
          placeholder="Selecciona una fecha"
          {...register("fechaNacimiento")}
          error={errors.fechaNacimiento?.message}
        />

        <Input
          label="Razón Social"
          icon={<CiCirclePlus />}
          placeholder="Ej: Empresa S.A.C."
          {...register("razonSocial")}
          error={errors.razonSocial?.message}
        />

        <Select
          label="Ciudad"
          icon={<CiCirclePlus />}
          placeholder="Selecciona una ciudad"
          options={data?.data?.map((ciudad) => {
            return {
              label: ciudad.nombre,
              value: ciudad.idCiudad.toString(),
            };
          })}
          onChange={(value) => {
            setValue("ciudad", {
              value: value.value,
              label: value.label?.toString() || "",
            });
          }}
          value={watch("ciudad")}
          error={errors.ciudad?.message}
        />
      </div>
      <div className="flex justify-end">
        <Button className="bg-blue-600 text-white font-semibold px-6 py-2 rounded hover:bg-blue-700 transition dark:bg-blue-500/30">
          Registrar Cliente
        </Button>
      </div>
    </form>
  );
}
