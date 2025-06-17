"use client";
import { FiEdit, FiTrash2, FiSearch, FiPlus } from "react-icons/fi";
import { LuCalendarDays, LuEye, LuSettings } from "react-icons/lu";
import  Card  from "@/components/ui/card/Card";
import Button from "@/components/ui/button/Button";
import Tabs from "@/components/ui/tabs/Tabs";
import { condicionesdata } from "@/data/condicion";
import ListarCondicion from "@/modules/condicion/listar/listar";
import Modal from "@/components/ui/modal/Modal";
import { useState } from "react";
import CrearCondicion from "@/modules/condicion/Crear/CrearCondicion";

export default function CondicionesPage() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="p-8 w-full h-full flex flex-col gap-6 bg-gray-50">
            {showModal && (
                    <Modal
                      onClose={() => {
                        setShowModal(false);
                      }}
                    >
                      <CrearCondicion />
                    </Modal>
                  )} 
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-x-4">
          <span className="bg-purple-600 p-3 rounded-xl">
            <FiSearch size={40} className="text-white" />
          </span>
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold">Gestión de Condiciones</h1>
            <p className="text-sm text-gray-600">
              Administra las condiciones de pago y crédito de MURGISA
            </p>
          </div>
        </div>
        <Button 
          className="bg-purple-600 text-white flex items-center font-semibold px-4 py-2 rounded hover:bg-purple-700"
          onClick={() =>{
            setShowModal(true);
          }}
        >
          <FiPlus size={15} />
           Nueva Condición
        </Button>
      </div>

      <div className="grid grid-cols-4 gap-x-4 mt-6">
        <Card
          title="Total de Condiciones"
          icon={<LuSettings size={28} className="text-white" />}
          description={`${4}`}
          extra="Registradas"
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
          title="Condiciones Activas"
          icon={<FiSearch size={28} className="text-white" />}
          description={`${3}`}
          extra="Disponibles"
          className={{
            container: "bg-green-100 shadow-lg",
            icon: "bg-green-600 rounded-full p-3",
            text: {
              title: "text-green-700",
              description: "text-green-900 text-3xl",
              extra: "text-green-600",
            },
          }}
        />
        <Card
          title="Condiciones de Crédito"
          icon={<LuCalendarDays size={28} className="text-white" />}
          description={`${2}`}
          extra="Tipo Crédito"
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
          title="Uso Total"
          icon={<LuEye size={28} className="text-white" />}
          description={`${1}`}
          extra="Transacciones"
          className={{
            container: "bg-orange-100 shadow-lg",
            icon: "bg-orange-600 rounded-full p-3",
            text: {
              title: "text-orange-700",
              description: "text-orange-900 text-3xl",
              extra: "text-orange-600",
            },
          }}
        />
      </div>

      <Tabs
          headers={["Catalogo de Servicios"]}
          className="mt-6"
          >
          <ListarCondicion data={condicionesdata} />
      </Tabs>
    </div>
  );
}
