"use client";
import Button from "@/components/ui/button/Button";
import Input from "@/components/ui/input/Input";
import Select from "@/components/ui/select/Select";
import { PiWrenchBold } from "react-icons/pi";
import { IoTimeOutline } from "react-icons/io5";
import { LuDollarSign } from "react-icons/lu";
import { PiCity } from "react-icons/pi";
import { FaRegUser } from "react-icons/fa";
import { PiMapPinArea } from "react-icons/pi";
import { FiPlus } from "react-icons/fi";
import InputDate from "@/components/ui/input-date/InputDate";
import { useQuery } from "@/hooks/useQuery";
import {
  Personal,
  Recurso,
  Response,
  TipoMantenimiento,
} from "@/interfaces/responsefinal.interface";
import axios from "axios";
import { useForm } from "react-hook-form";

export default function CrearCorrectivo() {
  const { data: tipos, isLoading } = useQuery<Response<TipoMantenimiento[]>>({
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

  const { data: recurso, isLoading: isLoadingRecurso } = useQuery<
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

  const { data: personal, isLoading: isLoadingPersonal } = useQuery<
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

  const {} = useForm();

  return (
    <div className="w-full max-w-sm md:max-w-3xl bg-white p-6 rounded-lg shadow-lg dark:bg-gray-800 border dark:border-gray-700">
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
          options={[{ value: "1", label: "Construcción" }]}
        ></Select>
        <Select
          label="Maquinaria"
          icon={<PiCity />}
          placeholder="Ej: Compresor Industrial CI-001"
        />
        <Select
          label="Tecnico"
          icon={<FaRegUser />}
          placeholder="Selecciona un Tecnico"
          options={[{ value: "1", label: "Paco" }]}
        ></Select>
        <InputDate
          label="Fecha del mantenimiento"
          placeholder="fecha del mantenimiento"
        />
      </div>
      <div>
        <Button className="flex items-center gap-x-3 mt-4 bg-orange-600 text-white py-3 font-semibold hover:bg-blue-500">
          <FiPlus size={15} className="mr-2" />
          Registrar Mantenimiento Correctivo
        </Button>
      </div>
    </div>
  );
}
