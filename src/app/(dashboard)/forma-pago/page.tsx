"use client";
import Button from "@/components/ui/button/Button";
import CardInfo from "@/components/ui/card-info/CardInfo";
import Card from "@/components/ui/card/Card";
import { FiPlus } from "react-icons/fi";
import { LuCreditCard, LuFilter } from "react-icons/lu";
import { LuCircleCheckBig } from "react-icons/lu";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { MdOutlineAttachMoney } from "react-icons/md";
import { LuCalendar } from "react-icons/lu";
import axios from "axios";
import { env } from "@/config/env";
import { FormaPago } from "@/interfaces/response.interface";
import { useState } from "react";
import Modal from "@/components/ui/modal/Modal";
import Input from "@/components/ui/input/Input";
import { useQuery } from "@/hooks/useQuery";
import { MdOutlinePayments } from "react-icons/md";
import { formaPagoData } from "@/data/formaPago";
import CrearFormaPago from "@/modules/forma-pago/crear/CrearFormaPago";
import { LuStar } from "react-icons/lu";
import { LuTrendingUp } from "react-icons/lu";
import CardInfoSkeleton from "@/components/skeletons/card-info-skeleton/CardInfoSkeleton";
export default function FormasDePagoPage() {
  const formas: FormaPago[] = formaPagoData;
  const [showModal, setShowModal] = useState(false);
  // const { data, isLoading } = useQuery<FormaPago[]>({
  //   queryFn: async () => {
  //     const response = await axios.get(`${env.url_api}/Forma-pago`);
  //     return response.data;
  //   },
  // });
  return (
    <div className="w-full h-full p-9 bg-gray-100 flex flex-col dark:bg-gray-900">
      {showModal && (
        <Modal
          onClose={() => {
            setShowModal(false);
          }}
        >
          <CrearFormaPago />
        </Modal>
      )}
      <header className="flex md:flex-row flex-col md:items-center relative gap-x-4 rounded-xl p-5 bg-gradient-to-r from-blue-500 to-indigo-800 dark:from-blue-700 bg-">
        <span className="bg-blue-600 p-2 rounded-lg max-w-max mb-2 lg:p-3 dark:bg-blue-300/30">
          <LuCreditCard className="text-white size-8 lg:size-10" />
        </span>
        <div className="flex flex-col text-white">
          <p className="font-bold text-3xl">Formas de Pago</p>
          <p className="text-sm">
            Gestiona los métodos de pago disponibles para tus clientes
          </p>
        </div>

        <Button
          className="flex items-center absolute md:static right-0 translate-y-[169%] -translate-x-[12%] md:translate-y-0 md:translate-x-0 bottom-full ml-auto gap-x-3 py-3 font-semibold px-2  hover:bg-blue-500 mb-2 bg-blue-500/50 lg:px-6"
          onClick={() => {
            setShowModal(true);
          }}
        >
          <FiPlus size={15} />
          Nueva Forma de Pago
        </Button>
      </header>

      <div className="grid grid-cols-1 items-center mt-6 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card
          title="Total Métodos"
          icon={<LuCreditCard size={28} className="text-white dark:text-blue-400" />}
          description="5"
          extra="Registrados en la empresa"
          className={{
            container: "bg-blue-100 shadow-lg dark:bg-gray-800 dark:border dark:border-gray-700 dark:hover:shadow-blue-400/10",
            icon: "bg-blue-600 rounded-full p-3 dark:bg-blue-500/30",
            text: {
              title: "text-blue-700 dark:text-blue-400",
              description: "text-blue-900 text-3xl dark:text-blue-400",
              extra: "text-blue-600 dark:text-blue-400",
            },
          }}
        />
        <Card
          title="Metodos Activos"
          icon={<LuCircleCheckBig size={28} className="text-white dark:text-emerald-400" />}
          description="4"
          extra="Disponibles para asignacion"
          className={{
            container: "bg-green-100 shadow-lg dark:bg-gray-800 dark:border dark:border-gray-700 dark:hover:shadow-green-400/10 dark:transition-all",
            icon: "bg-emerald-600 rounded-full p-3 dark:bg-emerald-500/30",
            text: {
              title: "text-emerald-700 dark:text-emerald-400",
              description: "text-emerald-900 text-3xl dark:text-emerald-400",
              extra: "text-emerald-600 dark:text-emerald-400",
            },
          }}
        />
        <Card
          title="Método preferido"
          icon={<LuStar size={28} className="text-white dark:text-purple-400" />}
          description="Tarjeta"
          extra="Al momento de Pagar"
          className={{
            container: "bg-purple-100 shadow-lg  dark:bg-gray-800 dark:border dark:border-gray-700 dark:hover:shadow-purple-400/10 dark:transition-all",
            icon: "bg-purple-600 rounded-full p-3 dark:bg-purple-500/30",
            text: {
              title: "text-purple-700 dark:text-purple-400",
              description: "text-purple-900 text-3xl dark:text-purple-400",
              extra: "text-purple-600 dark:text-purple-400",
            },
          }}
        />
        <Card
          title="Comisión Promedio"
          icon={<LuTrendingUp size={28} className="text-white dark:text-orange-400" />}
          description="2.5%"
          extra="Comisión promedio"
          className={{
            container: "bg-red-100 shadow-lg dark:bg-gray-800 dark:border dark:border-gray-700 dark:hover:shadow-red-500/10 dark:transition-all",
            icon: "bg-orange-600 rounded-full p-3 dark:bg-orange-500/30",
            text: {
              title: "text-orange-700 dark:text-orange-400",
              description: "text-orange-900 text-3xl dark:text-orange-400",
              extra: "text-orange-600 dark:text-orange-400",
            },
          }}
        />
      </div>
      <div className="py-6 flex flex-col gap-y-6">
        <section className="flex w-full flex-col p-4 rounded-lg shadow bg-white dark:bg-gray-800 dark:border dark:border-gray-700">
          <span className="flex items-center gap-x-2 font-semibold text-black text-lg dark:text-white">
            <LuFilter className="size-5 text-blue-500 dark:text-blue-400" />
            Filtros de Búsqueda
          </span>
          <p className="text-sm mt-1 text-gray-500 dark:text-gray-400">
            Utiliza los filtros para encontrar forma de pagos específicos de
            manera rápida
          </p>
        </section>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 2xl:grid-cols-4 lg:grid-cols-3">
          {/* {isLoading
            ? Array.from({ length: 3 }).map((_, index) => {
                return <CardInfoSkeleton key={index} />;
              }) */}
              {formas.map((forma) => {
                return (
                  <CardInfo
                    key={forma.idFormaPago}
                    title={forma.tipo}
                    icon={
                      <FaRegMoneyBillAlt size={20} className="text-green-400" />
                    }
                    className={{
                      container: "bg-white dark:bg-gray-800 dark:border dark:border-gray-700 dark:text-gray-300",
                      header: {
                        icon: "bg-green-100 dark:bg-green-500/30",
                        description:"dark:text-gray-400"
                      },
                      span: "bg-green-100 text-green-700 font-bold dark:bg-green-500/30 dark:text-green-300 dark:border-green-700",
                    }}
                    description={forma.descripcion}
                    span={forma.estado ? "Activo" : "Inactivo"}
                  >
                    <div className="flex items-center gap-x-24">
                      <span className="flex flex-col gap-y-1">
                        <p className="text-sm text-gray-600 font-medium dark:text-gray-500">
                          Comisión
                        </p>
                        <p className="text-sm font-semibold flex items-center ">
                          <MdOutlineAttachMoney className="text-green-600 dark:text-green-400" />{" "}
                          {forma.comision}%
                        </p>
                      </span>
                      <span className="flex flex-col gap-y-1">
                        <p className="text-sm text-gray-600 font-medium dark:text-gray-500">
                          Fecha de Registro
                        </p>
                        <p className="text-sm font-semibold flex items-center gap-x-1">
                          <LuCalendar className="text-blue-600 dark:text-blue-400" />{" "}
                          {forma.registeredAt.split("T")[0]}
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
