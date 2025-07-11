"use client";
import Input from "@/components/ui/input/Input";
import Select from "@/components/ui/select/Select";
import Button from "@/components/ui/button/Button";
import { PiWrenchBold } from "react-icons/pi";
import { PiCity } from "react-icons/pi";
import { FaRegUser } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import InputDate from "@/components/ui/input-date/InputDate";
import { useQuery } from "@/hooks/useQuery";
import { CiMoneyBill } from "react-icons/ci";


import {
  MantenimientoCorrectivo,
  Personal,
  Recurso,
  Response,
  TipoMantenimiento,
} from "@/interfaces/responsefinal.interface";
import axios from "axios";
import { useForm } from "react-hook-form";
import { CorrectivoSchema } from "@/schemas/Mantenimineto/Correctivo";
import { toast } from "sonner";
import { useTableContext } from "@/context/TableContext";
import { z } from "zod";
import { ModalProps } from "@/interfaces/modal.interface";
import { env } from "@/config/env";
import Load from "@/components/share/load/Load";
import { zodResolver } from "@hookform/resolvers/zod";
import { RecursoSchema } from "@/schemas/Recurso.schema";
import { useMutation } from "@/hooks/useMutation";

export default function CrearCorrectivo({ onClose }: ModalProps) {

  const { data: tipos, isLoading: isLoadingTipos } = useQuery<Response<TipoMantenimiento[]>>({
    queryFn: async (url, token) => {
      const res = await axios.get<Response<TipoMantenimiento[]>>(
        `${url}/tipo-mantenimiento`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return res.data;
    },
  });

  const { data: recursos, isLoading: isLoadingRecurso } = useQuery<
    Response<Recurso[]>
  >({
    queryFn: async (url, token) => {
      const res = await axios.get<Response<Recurso[]>>(`${url}/recurso`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res.data;
    },
  });

  const { data: empleados, isLoading: isLoadingPersonal } = useQuery<
    Response<Personal[]>
  >({
    queryFn: async (url, token) => {
      const res = await axios.get<Response<Personal[]>>(`${url}/personal`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res.data;
    },
  });

  const {
      register,
      setValue,
      watch,
      formState: { errors },
      handleSubmit,
    } = useForm({
      resolver: zodResolver(CorrectivoSchema),
    });

  const { refresh } = useTableContext<MantenimientoCorrectivo>();

  const { mutate, isLoading } = useMutation<
    z.infer<typeof CorrectivoSchema>,
    Response<MantenimientoCorrectivo[]>
  >({
    mutationFn: async (data, url, token) => {
      const response = await axios.post(
        `${url}/mantenimiento-correctivo`,
        {
          tipoIds: [parseInt(data.tipo.value)], 
          recursoId: parseInt(data.recurso.value), 
          personalId: parseInt(data.personal.value), 
          precio:  parseInt(data.precio),
          fechaInicio: data.fechaInicio,
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
      toast.success("Mantenimiento Correctivo registrado exitosamente");
      refresh(data.data);
      onClose?.();
    },
    onError: () => {
      toast.error(
        "Error al registrar el mantenimiento. Por favor, intenta nuevamente."
      );
    },
  });


  return (
    <form 
    onSubmit={handleSubmit(mutate)}
    className="w-full max-w-sm md:max-w-3xl bg-white p-6 rounded-lg shadow-lg dark:bg-gray-800 border dark:border-gray-700">
      <header className="flex items-center gap-x-3">
        <PiWrenchBold size={40} className="text-orange-600" />
        <div className="flex flex-col">
          <p className="text-xl font-semibold dark:text-white">
            Agregar Mantenimiento Correctivo
          </p>
          <p className="text-sm text-gray-500">
            Completa los datos para registrar un nuevo mantenimiento correctivo
            en el sistema
          </p>
        </div>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 dark:text-white">
        <Select
          label="Tipo de Mantenimiento"
          icon={<PiWrenchBold />}
          placeholder="Tipo de Mantenimiento Correctivo"
          options={tipos?.data.map((tipo) => {
            return {
              label: tipo.nombre,
              value: tipo.tipoMantenimientoId.toString(),
            };
          })}
          onChange={(value) => {
            setValue("tipo", {
              value: value.value,
              label: value.label?.toString() || "",
            });
          }}
          value={watch("tipo")}
          error={errors.tipo?.message}
        ></Select>
        <Select
          label="Maquinaria"
          icon={<PiCity />}
          placeholder="Ej: Compresor Industrial CI-001"
          options={recursos?.data.map((recurso) => {
            return {
              label: recurso.nombre,
              value: recurso.idRecurso.toString(),
            };
          })}
          onChange={(value) => {
            setValue("recurso", {
              value: value.value,
              label: value.label?.toString() || "",
            });
          }}
          value={watch("recurso")}
          error={errors.recurso?.message}
        />
        <Select
          label="Tecnico"
          icon={<FaRegUser />}
          placeholder="Selecciona un Tecnico"
          options={empleados?.data.map((personal) => {
            return {
              label: personal.nombre,
              value: personal.idPersonal.toString() || "",
            };
          })}
          onChange={(value) => {
            setValue("personal", {
              value: value.value,
              label: value.label?.toString() || "",
            });
          }}
          value={watch("personal")}
          error={errors.personal?.message}
        ></Select>
        <Input
          label="Precio"
          icon={<CiMoneyBill />}
          placeholder="Ej: 2 so"
          {...register("precio")}
          error={errors.precio?.message}
        />

        <InputDate
          label="Fecha del mantenimiento"
          placeholder="fecha del mantenimiento"
          onChange={(date) => setValue("fechaInicio", date)}
          value={watch("fechaInicio")}
        />
      </div>
      <div>
        <Button className="flex items-center gap-x-3 mt-4 bg-orange-600 text-white py-3 font-semibold hover:bg-orange-500">
          <FiPlus size={15} className="mr-2" />
          Registrar Mantenimiento Correctivo
        </Button>
      </div>
    </form>
  );
}
