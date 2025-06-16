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
import {useState} from "react";
import Modal from "@/components/ui/modal/Modal";
import Input from "@/components/ui/input/Input";
import { useQuery } from "@/hooks/useQuery";
import { MdOutlinePayments } from "react-icons/md";
export default function FormasDePagoPage() {
  const [showModal, setShowModal] = useState(false);
   const { data, isLoading } = useQuery<FormaPago[]>({
    queryFn: async () => {
      const response = await axios.get(`${env.url_api}/Forma-pago`);
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
                      <MdOutlinePayments size={24} className="text-green-400" />
                        <div className="flex flex-col">
                          <p className="text-xl font-semibold">Agregar Forma de Pago</p>
                          <p className="text-sm text-gray-500">
                              Completa los datos para registrar una nueva forma de pago en el
                              sistema
                            </p>
                          </div>
                        </header>
                        <div className="grid grid-cols-1 gap-4">
                          <Input
                            label="Tipo de Forma de Pago"
                            icon={<MdOutlinePayments  />}
                            placeholder="Ej: Pago con tarjeta"
                          />
                        </div>
                        <div>
                          <Button className="flex items-center gap-x-3 mt-4  bg-green-500 text-white py-3 font-semibold hover:bg-blue-500">
                            <FiPlus size={15} className="mr-2" />
                            Registrar Forma de Pago
                          </Button>
                        </div>
                      </div>
              </Modal>
            )}
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-x-4">
          <span className="bg-green-100 p-3 rounded-full">
            <LuCreditCard size={24} className="text-green-400" />
          </span>
          <div className="flex flex-col">
            <p className="font-bold text-3xl">Formas de Pago</p>
            <p className="text-sm">
              Gestiona los métodos de pago disponibles para tus clientes
            </p>
          </div>
        </div>

        <Button className="flex items-center gap-x-3 py-3 font-semibold bg-green-500"
           onClick={() => {
            setShowModal(true);
          }}
          >
          <FiPlus size={15} />
          Nueva Forma de Pago
        </Button>
      </header>

      <div className="grid grid-cols-4 items-center mt-6 gap-x-4">
        <Card
          title="Total Métodos"
          icon={<LuCreditCard size={35} className="text-green-400" />}
          description="5"
        />
        <Card
          title="Metodos Activos"
          icon={<LuCircleCheckBig size={35} className="text-green-400" />}
          description="4"
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
          {data?.map((forma) => {
            return (
              <CardInfo
                key={forma.idFormaPago}
                title={forma.tipo}
                icon={
                  <FaRegMoneyBillAlt size={20} className="text-green-400" />
                }
                className={{
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
                      <MdOutlineAttachMoney /> {forma.comision}%
                    </p>
                  </span>
                  <span className="flex flex-col gap-y-1">
                    <p className="text-sm text-gray-600 font-medium">
                      Comisión
                    </p>
                    <p className="text-sm font-semibold flex items-center gap-x-1">
                      <LuCalendar /> {forma.registeredAt.split("T")[0]}
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
