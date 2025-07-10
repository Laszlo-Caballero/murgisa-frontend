"use client";
import Input from "@/components/ui/input/Input";
import React from "react";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { LuUserRound } from "react-icons/lu";
import { TbCash } from "react-icons/tb";
import { LuPhone } from "react-icons/lu";
import Select from "@/components/ui/select/Select";
import { LuHouse } from "react-icons/lu";
import { MdAttachMoney } from "react-icons/md";
import Button from "@/components/ui/button/Button";
import { useQuery } from "@/hooks/useQuery";
import axios from "axios";
import { env } from "@/config/env";
import { GrUserWorker } from "react-icons/gr";

import {
  Departamento,
  Profesion,
  ResponseCargo,
} from "@/interfaces/response.interface";
import Load from "@/components/share/load/Load";

interface CrearPersonalProps {
  onClose?: () => void;
  onSave?: () => void;
}

export default function CrearPersonal({ onClose, onSave }: CrearPersonalProps) {
  const { data: profesiones, isLoading: loadingProfesiones } = useQuery<
    Profesion[]
  >({
    queryFn: async () => {
      const response = await axios.get(`${env.url_api}/profesion`);
      return response.data;
    },
  });

  const { data: cargos, isLoading: loadingCargos } = useQuery<ResponseCargo>({
    queryFn: async () => {
      const response = await axios.get(`${env.url_api}/cargo`);
      return response.data;
    },
  });

  const { data: departamentos, isLoading: loadingDepartamentos } = useQuery<
    Departamento[]
  >({
    queryFn: async () => {
      const response = await axios.get(`${env.url_api}/departamento`);
      return response.data;
    },
  });

  return (
    <form className="w-[calc(100vw-3rem)] md:max-h-min max-h-[calc(100vh-4rem)] md:w-[700px] lg:w-[1000px] rounded-lg bg-white p-8 flex flex-col gap-y-4 dark:bg-gray-800 dark:border dark:border-gray-600 overflow-y-auto">
      {loadingProfesiones ||
        loadingCargos ||
        (loadingDepartamentos && <Load />)}
      <header className="flex items-center gap-x-3">
        <GrUserWorker size={40} className="text-blue-600 dark:text-blue-400" />
        <div className="flex flex-col">
          <p className="text-xl font-semibold dark:text-gray-300">
            Agregar Nuevo Empleado
          </p>
          <p className="text-sm text-gray-500">
            Completa los datos para registrar un nuevo empleado en el sistema
          </p>
        </div>
      </header>

      <div className="grid lg:grid-cols-2 gap-4 dark:text-gray-300">
        <Input
          label="Nombre"
          icon={<LuUserRound />}
          placeholder="Ingrese el nombre "
        />
        <Input
          label="Apellido Paterno"
          icon={<LuUserRound />}
          placeholder="Ingrese el apellido paterno"
        />
        <Input
          label="Apellido Materno"
          icon={<LuUserRound />}
          placeholder="Ingrese el apellido materno"
        />
        <Input label="Sueldo" icon={<TbCash />} placeholder="1000" />
        <Input
          label="Numero de Documento"
          icon={<HiOutlineClipboardDocumentList />}
          placeholder="920121233"
        />
        <Input label="Telefono" icon={<LuPhone />} placeholder="999999999" />

        <Select
          icon={<LuUserRound />}
          label="Cargo"
          placeholder="Seleccione un cargo"
          options={cargos?.cargos.map((cargo) => ({
            value: cargo.idCargo.toString(),
            label: cargo.cargo,
          }))}
        />

        <Select
          icon={<LuUserRound />}
          label="Profesion"
          placeholder="Seleccione una profesion"
          options={profesiones?.map((profesion) => ({
            value: profesion.idProfesion.toString(),
            label: profesion.titulo,
          }))}
        />

        <Select
          icon={<LuHouse />}
          label="Departamento"
          placeholder="Seleccione un departamento"
          options={departamentos?.map((departamento) => ({
            value: departamento.idDepartamento.toString(),
            label: departamento.titulo,
          }))}
        />

        <Input
          label="Salario"
          icon={<MdAttachMoney />}
          placeholder="999999999"
        />

        <div>
          <Button className="bg-blue-600 text-white font-semibold px-6 py-2 rounded hover:bg-blue-700 transition dark:bg-blue-500/30">
            Registrar Empleado
          </Button>
        </div>
      </div>
    </form>
  );
}
