"use client";
import { useState } from "react";
import axios from "axios";
import { FiPlus } from "react-icons/fi";
import { LuClipboardList, LuCalendar, LuFilter, LuCircleCheckBig } from "react-icons/lu";
import { MdOutlineDescription } from "react-icons/md";
import Modal from "@/components/ui/modal/Modal";
import Button from "@/components/ui/button/Button";
import Card from "@/components/ui/card/Card";
import Input from "@/components/ui/input/Input";
import { useQuery } from "@/hooks/useQuery";
import { env } from "@/config/env";
import { NotaSalida } from "@/interfaces/response.interface";
import CardInfo from "@/components/ui/card-info/CardInfo";
import { MdDateRange } from "react-icons/md";
import Select from "@/components/ui/select/Select";
import { LuCirclePlus } from "react-icons/lu";
export default function NotasDeSalidaPage() {
  const [showModal, setShowModal] = useState(false);
 const { data, isLoading } = useQuery<NotaSalida[]>({
    queryFn: async () => {
      const response = await axios.get(`${env.url_api}/Nota-salida`);
      return response.data;
    },
  });
  return (
    <div className="w-full p-8 flex flex-col">
      {showModal && (
        <Modal
          onClose={() => {
            setShowModal(false);
          }}
        >
          <div className="w-[800px] bg-white p-6 rounded-lg shadow-lg">
            <header className="flex items-center gap-x-3">
              <LuClipboardList size={24} className="text-red-400" />
              <div className="flex flex-col">
                <p className="text-xl font-semibold">Registrar Nota de Salida</p>
                <p className="text-sm text-gray-500">
                  Completa los datos para registrar una nueva nota de salida
                </p>
              </div>
            </header>

            <div className="grid grid-cols-1 gap-4 mt-4">
              <Input
                label="Fecha"
                type="date"
                placeholder=""
                icon={<MdDateRange />}
               />
               <Select
                label="Orden de Servicio"
                icon={<LuCirclePlus />}
                placeholder="Selecciona una orden de servicio"
                options={[
                { value: "1", label: "OR001" },
                { value: "2", label: "OR002" },
                ]}>
                </Select>
                 <Select
                  label="Recurso"
                  icon={<LuCirclePlus />}
                  placeholder="Selecciona un recurso"
                  options={[
                  { value: "1", label: "Grúa" },
                  { value: "2", label: "Excavadora" },
                  { value: "3", label: "Generador" }
                  ]}>
                 </Select>
            </div>

            <div>
              <Button className="flex items-center gap-x-3 mt-4 bg-red-500 text-white py-3 font-semibold hover:bg-blue-500">
                <FiPlus size={15} className="mr-2" />
                Registrar Nota de Salida
              </Button>
            </div>
          </div>
        </Modal>
      )}

      <header className="flex items-center justify-between">
        <div className="flex items-center gap-x-4">
          <span className="bg-red-100 p-3 rounded-full">
            <LuClipboardList size={24} className="text-red-400" />
          </span>
          <div className="flex flex-col">
            <p className="font-bold text-3xl">Notas de Salida</p>
            <p className="text-sm">
              Gestiona las notas de salida registradas en el sistema
            </p>
          </div>
        </div>

        <Button
          className="flex items-center gap-x-3 py-3 font-semibold bg-red-500"
          onClick={() => {
            setShowModal(true);
          }}
        >
          <FiPlus size={15} />
          Nueva Nota de Salida
        </Button>
      </header>

      <div className="grid grid-cols-4 items-center mt-6 gap-x-4">
        <Card
          title="Total Notas"
          icon={<LuClipboardList size={35} className="text-red-400" />}
          description={data?.length.toString() || "0"}
        />
        <Card
          title="Notas Activas"
          icon={<LuCircleCheckBig size={35} className="text-red-400" />}
        />
      </div>

      <div className="py-6 flex flex-col gap-y-6">
        <section className="flex w-full flex-col p-4 rounded-lg shadow">
          <span className="flex items-center gap-x-2 font-medium text-black text-2xl">
            <LuFilter />
            Filtros
          </span>
        </section>

        <div className="grid grid-cols-3 gap-4">
          {data?.map((nota) => {
            return (
              <CardInfo
                key={nota.idNotaSalida}
                title="Orden de servicio"
                icon={<LuClipboardList size={20} className="text-red-400" />}
                className={{
                  header: {
                    icon: "bg-red-100",
                  },
                  span: "bg-red-100 text-red-700 font-bold",
                }}
                description={nota.fecha}
              >
                <div className="flex items-center gap-x-24">
                  <span className="flex flex-col gap-y-1">
                    <p className="text-sm text-gray-600 font-medium">Fecha de salida</p>
                    <p className="text-sm font-semibold flex items-center gap-x-1">
                      <LuCalendar /> {nota.fecha.split("T")[0]}
                    </p>
                  </span>
                </div>
              </CardInfo>
            );
          })}
        </div>
      </div>
    </div>
  );
}