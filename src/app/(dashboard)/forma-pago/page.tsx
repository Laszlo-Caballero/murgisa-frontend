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
export default function FormasDePagoPage() {
  const [showModal, setShowModal] = useState(false);
  //  const { data, isLoading } = useQuery<FormaPago[]>({
  //   queryFn: async () => {
  //     const response = await axios.get(`${env.url_api}/Forma-pago`);
  //     return response.data;
  //   },
  // });
  return (
    <div className="w-full h-full p-9 bg-gray-100 flex flex-col">
      {showModal && (
        <Modal
          onClose={() => {
            setShowModal(false);
          }}
        >
          <CrearFormaPago />
        </Modal>
      )}
      <header className="flex md:flex-row flex-col md:items-center relative gap-x-4">
        <span className="bg-blue-600 p-2 rounded-xl max-w-max mb-2 lg:p-3">
          <LuCreditCard size={40} className="text-white" />
        </span>
        <div className="flex flex-col">
          <p className="font-bold text-3xl">Formas de Pago</p>
          <p className="text-sm">
            Gestiona los métodos de pago disponibles para tus clientes
          </p>
        </div>

        <Button
          className="flex items-center absolute md:static right-0 translate-y-[125%] md:translate-y-0 bottom-full ml-auto gap-x-3 py-3 font-semibold px-6 bg-blue-600 hover:bg-blue-500 mb-2"
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
          icon={<LuCreditCard size={28} className="text-white" />}
          description="5"
          extra="Registrados en la empresa"
          className={{
            container: "bg-blue-100 shadow-lg",
            icon: "bg-blue-600 rounded-full p-3",
            text: {
              title: "text-blue-700",
              description: "text-blue-900 text-3xl",
              extra: "text-blue-600",
            },
          }}
        />
        <Card
          title="Metodos Activos"
          icon={<LuCircleCheckBig size={28} className="text-white" />}
          description="4"
          extra="Disponibles para asignacion"
          className={{
            container: "bg-green-100 shadow-lg",
            icon: "bg-emerald-600 rounded-full p-3",
            text: {
              title: "text-emerald-700",
              description: "text-emerald-900 text-3xl",
              extra: "text-emerald-600",
            },
          }}
        />
        <Card
          title="Método preferido"
          icon={<LuStar size={28} className="text-white" />}
          description="Tarjeta"
          extra="Al momento de Pagar"
          className={{
            container: "bg-purple-100 shadow-lg",
            icon: "bg-purple-600 rounded-full p-3",
            text: {
              title: "text-purple-700",
              description: "text-purple-900 text-3xl",
              extra: "text-purple-600",
            },
          }}
        />
        <Card
          title="Comisión Promedio"
          icon={<LuTrendingUp size={28} className="text-white" />}
          description="2.5%"
          extra="Comisión promedio"
          className={{
            container: "bg-red-100 shadow-lg",
            icon: "bg-red-600 rounded-full p-3",
            text: {
              title: "text-red-700",
              description: "text-red-900 text-3xl",
              extra: "text-red-600",
            },
          }}
        />
      </div>
      <div className="py-6 flex flex-col gap-y-6">
        <section className="flex w-full flex-col p-4 rounded-lg shadow bg-white">
          <span className="flex items-center gap-x-2 font-semibold text-black text-lg">
            <LuFilter size={20} className="text-blue-500" />
            Filtros de Búsqueda
          </span>
          <p className="text-sm mt-1 text-gray-500">
            Utiliza los filtros para encontrar forma de pagos específicos de
            manera rápida
          </p>
        </section>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {formaPagoData?.map((forma) => {
            return (
              <CardInfo
                key={forma.idFormaPago}
                title={forma.tipo}
                icon={
                  <FaRegMoneyBillAlt size={20} className="text-green-400" />
                }
                className={{
                  container: "bg-white",
                  header: {
                    icon: "bg-green-100",
                  },
                  span: "bg-green-100 text-green-700 font-bold",
                }}
                description={forma.descripcion}
                span={forma.estado ? "Activo" : "Inactivo"}
              >
                <div className="flex items-center gap-x-24">
                  <span className="flex flex-col gap-y-1">
                    <p className="text-sm text-gray-600 font-medium">
                      Comisión
                    </p>
                    <p className="text-sm font-semibold flex items-center ">
                      <MdOutlineAttachMoney className="text-green-600" />{" "}
                      {forma.comision}%
                    </p>
                  </span>
                  <span className="flex flex-col gap-y-1">
                    <p className="text-sm text-gray-600 font-medium">
                      Comisión
                    </p>
                    <p className="text-sm font-semibold flex items-center gap-x-1">
                      <LuCalendar className="text-blue-600" />{" "}
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
