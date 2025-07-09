"use client";
import { useState } from "react";
import axios from "axios";
import { FiPlus } from "react-icons/fi";
import {
  LuClipboardList,
  LuCalendar,
  LuFilter,
  LuCircleCheckBig,
} from "react-icons/lu";
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
import { notaSalidaData } from "@/data/notaSalida";
import { LuSquarePen } from "react-icons/lu";
import { LuEye } from "react-icons/lu";
import cx from "@/libs/cx";

export default function NotasDeSalidaPage() {
  const [showModal, setShowModal] = useState(false);
  //  const { data, isLoading } = useQuery<NotaSalida[]>({
  //     queryFn: async () => {
  //       const response = await axios.get(`${env.url_api}/Nota-salida`);
  //       return response.data;
  //     },
  //   });
  return (
    <div className="w-full h-full p-8 flex flex-col bg-gray-100  dark:bg-gray-900 ">
      {showModal && (
        <Modal
          onClose={() => {
            setShowModal(false);
          }}
        >
          <div className="w-full max-w-sm md:max-w-3xl bg-white p-6 rounded-lg shadow-lg dark:bg-gray-800 border dark:border-gray-700">
            <header className="flex items-center gap-x-3">
              <LuClipboardList size={40} className="text-pink-700" />
              <div className="flex flex-col">
                <p className="text-xl font-semibold dark:text-white">
                  Registrar Nota de Salida
                </p>
                <p className="text-sm text-gray-500">
                  Completa los datos para registrar una nueva nota de salida
                </p>
              </div>
            </header>

            <div className="grid grid-cols-1 gap-4 mt-4 dark:text-white">
              <Input
                label="Fecha"
                type="date"
                placeholder=""
                icon={<MdDateRange />}
              />
              <Select
                label="Venta"
                icon={<LuCirclePlus />}
                placeholder="Selecciona una Venta"
                options={[
                  { value: "1", label: "OR001" },
                  { value: "2", label: "OR002" },
                ]}
              ></Select>
              <Select
                label="Recurso"
                icon={<LuCirclePlus />}
                placeholder="Selecciona un recurso"
                options={[
                  { value: "1", label: "Grúa" },
                  { value: "2", label: "Excavadora" },
                  { value: "3", label: "Generador" },
                ]}
              ></Select>
            </div>

            <div>
              <Button className="flex items-center gap-x-3 mt-4 bg-pink-600 text-white py-3 font-semibold hover:bg-pink-600">
                <FiPlus size={15} className="mr-2" />
                Registrar Nota de Salida
              </Button>
            </div>
          </div>
        </Modal>
      )}

      <header className="flex md:flex-row flex-col md:items-center relative gap-x-4 rounded-xl p-5 bg-gradient-to-r from-rose-500/80 to-rose-700/80 dark:from-rose-500/80 dark:to-rose-800/90">
        <span className="dark:bg-rose-400/40 p-2 rounded-xl max-w-max mb-2 lg:p-3 bg-rose-400">
          <LuClipboardList className="text-white size-8 lg:size-10" />
        </span>
        <div className="flex flex-col">
          <p className="font-bold text-3xl text-white">Notas de Salida</p>
          <p className="text-sm text-white">
            Gestiona las notas de salida registradas en el sistema
          </p>
        </div>

        <Button
          className="flex items-center absolute md:static right-0 translate-y-[169%] -translate-x-[10%] md:translate-y-0 md:translate-x-0 bottom-full ml-auto gap-x-3 py-3 font-semibold px-2  hover:bg-rose-400/60 mb-2 bg-rose-400/40 dark:hover:bg-rose-500/60"
          onClick={() => {
            setShowModal(true);
          }}
        >
          <FiPlus size={15} />
          Nueva Nota de Salida
        </Button>
      </header>

      <div className="grid grid-cols-1 items-center mt-6 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card
          title="Total Notas"
          icon={<LuClipboardList size={28} className="text-white dark:text-blue-400" />}
          description={notaSalidaData?.length.toString() || "0"}
          extra="Registradas en el sistema"
          className={{
            container: "bg-blue-100 shadow-lg dark:bg-gray-800 dark:border dark:border-gray-700 dark:hover:shadow-blue-400/10 dark:transition-all",
            icon: "bg-blue-500 rounded-full p-3 dark:bg-blue-500/30",
            text: {
              title: "text-blue-700 dark:text-blue-400",
              description: "text-blue-900 text-3xl dark:text-blue-400",
              extra: "text-blue-600 dark:text-blue-400",
            },
          }}
        />

      <Card
        title="Notas Activas"
        icon={<LuCircleCheckBig size={28} className="text-white dark:text-purple-400" />}
        description={"14"}
        extra="Habilitadas y disponibles"
        className={{
          container: "bg-purple-100 shadow-lg dark:bg-gray-800 dark:border dark:border-gray-700 dark:hover:shadow-purple-400/10 dark:transition-all",
          icon: "bg-purple-500 rounded-full p-3 dark:bg-purple-500/30",
          text: {
            title: "text-purple-700 dark:text-purple-400",
            description: "text-purple-900 text-3xl dark:text-purple-400",
            extra: "text-purple-600 dark:text-purple-400",
          },
        }}
      />

      </div>

      <div className="py-6 flex flex-col gap-y-6">
        <section className="flex w-full flex-col p-4 rounded-md shadow-md bg-white  dark:bg-gray-800/50 dark:shadow-lg dark:border dark:border-gray-700">
          <span className="flex items-center gap-x-2 font-semibold text-black text-lg dark:text-white">
            <LuFilter size={20} className="text-pink-600" />
            Filtros de Búsqueda
          </span>
          <p className="text-sm mt-1 text-gray-500">
            Utiliza los filtros para encontrar notas de salida programadas de
            manera rápida
          </p>
        </section>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {notaSalidaData?.map((nota) => {
            return (
              <CardInfo
                key={nota.idNotaSalida}
                title="Nota de Salida"
                icon={<LuClipboardList size={20} className="text-rose-400" />}
                className={{
                  container: "bg-white  dark:bg-gray-800  dark:text-white ",
                  header: {
                    icon: "bg-red-100  dark:bg-rose-600/20",
                    description: "font-semibold dark:bg-gray-800",
                  },
                  span: "bg-green-100 text-green-700 border border-green-300 font-semibold  dark:bg-green-500/30 dark:text-green-300 dark:border-green-700",
                }}
                description={"ID: NS-00" + nota.idNotaSalida.toString()}
                span={nota.estado ? "Activo" : "Inactivo"}
              >
                <div className="flex items-center justify-between ">
                  <span className="flex flex-col gap-y-1">
                    <p className="text-sm text-gray-900 font-medium  dark:text-white">Fecha</p>
                    <p className="text-sm text-gray-600 font-semibold flex items-center gap-x-1">
                      <LuCalendar className="text-blue-600 " />{" "}
                      {nota.fecha.split("T")[0]}
                    </p>
                  </span>
                  <span className="flex flex-col gap-y-1">
                    <p className="text-sm text-gray-900 font-medium  dark:text-white">
                      Maquinaria
                    </p>
                    <p className="text-gray-600 text-sm">
                      {nota.maquinariaSeleccionada}
                    </p>
                  </span>
                </div>
                <div className="flex items-center justify-between gap-x-2 mt-4">
                  <Button className="flex items-center gap-x-3 py-1 font-semibold mt-4 bg-white dark:bg-red-500/10 text-red-500 border border-red-300 dark:border-red-500 hover:bg-red-100 dark:hover:bg-red-600/20">
                    <LuSquarePen size={15} />
                    Editar
                  </Button>
                  <Button className="flex items-center gap-x-3 py-1 font-semibold mt-4 bg-white dark:bg-gray-700 text-black dark:text-white border border-gray-300 dark:border-gray-500 hover:bg-gray-100 dark:hover:bg-gray-600">
                    <LuEye size={15} />
                    Desactivar
                  </Button>
                </div>
              </CardInfo>
            );
          })}
        </div>
      </div>
    </div>
  );
}
