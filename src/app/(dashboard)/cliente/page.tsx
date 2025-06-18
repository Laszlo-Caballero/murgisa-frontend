"use client";
import { useState } from "react";
import Button from "@/components/ui/button/Button";
import { LuUsers, LuBuilding } from "react-icons/lu";
import { FiPlus } from "react-icons/fi";
import Card from "@/components/ui/card/Card";
import Tabs from "@/components/ui/tabs/Tabs";
import ListarClientes from "@/modules/clientes/Listar/Listar";
import { Cliente } from "@/interfaces/response.interface";
import Modal from "@/components/ui/modal/Modal";
import { clienteData } from "@/data/cliente";
import { LuClock4 } from "react-icons/lu";
import CrearCliente from "@/modules/clientes/crear/CrearClientes";
import { LuStar } from "react-icons/lu";

export default function ClientesPage() {
  const clientes: Cliente[] = clienteData;
  const [showModal, setShowModal] = useState(false);
  // const [clientes, setClientes] = useState<Cliente[]>([]);

  // useEffect(() => {
  //   axios.get(`${env.url_api}/cliente`).then((res) => {
  //     if (res.status === 200) {
  //       setClientes(res.data);
  //     }
  //   });
  // }, []);

  return (
    <div className="w-full h-full p-9 bg-gray-100 flex flex-col overflow-x-hidden">
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CrearCliente />
        </Modal>
      )}

      <header className="flex md:flex-row flex-col md:items-center relative gap-x-4">
        <span className="bg-blue-600 p-3 rounded-lg max-w-max mb-2 lg:p-3">
          <LuUsers className="text-white size-8 lg:size-10" />
        </span>
        <div className="flex flex-col">
          <p className="font-bold text-3xl">Gestión de Clientes</p>
          <p className="text-sm">
            Administra la información de tus clientes y sus ventas
          </p>
        </div>

        <Button
          className="flex items-center absolute md:static right-0 translate-y-[125%] md:translate-y-0 bottom-full ml-auto gap-x-3 py-3 font-semibold px-6 bg-blue-600 hover:bg-blue-500 mb-2"
          onClick={() => setShowModal(true)}
        >
          <FiPlus size={15} />
          Nuevo Cliente
        </Button>
      </header>

      <div className="grid grid-cols-1 items-center mt-6 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card
          title="Total Clientes"
          icon={<LuUsers size={28} className="text-white" />}
          description={"11"}
          extra="Registrados en el sistema"
          className={{
            container: "bg-blue-100 shadow-lg ",
            icon: "bg-blue-600 rounded-full p-3",
            text: {
              container: "gap-y-1",
              title: "text-blue-700",
              description: "text-blue-900 text-3xl",
              extra: "text-blue-600",
            },
          }}
        />
        <Card
          title="Clientes Activos"
          icon={<LuBuilding size={28} className="text-white" />}
          description={"10"}
          extra="Disponibles para realizar ventas"
          className={{
            container: "bg-emerald-100 shadow-lg",
            icon: "bg-emerald-600 rounded-full p-3",
            text: {
              title: "text-emerald-700",
              container: "gap-y-1",
              description: "text-emerald-900 text-3xl",
              extra: "text-emerald-600",
            },
          }}
        />
        <Card
          title="Cliente Más Frecuente"
          icon={<LuClock4 size={28} className="text-white" />}
          description={"Ana Torres"}
          extra="Según cantidad de Ventas"
          className={{
            container: "bg-purple-100 shadow-lg",
            icon: "bg-purple-600 rounded-full p-3",
            text: {
              title: "text-purple-700",
              container: "gap-y-1",
              description: "text-purple-900 text-3xl",
              extra: "text-purple-600",
            },
          }}
        />
        <Card
          title="Cliente Nuevo"
          icon={<LuStar size={28} className="text-white" />}
          description={"Juan Pérez"}
          extra="Nuevas oportunidades de Venta"
          className={{
            container: "bg-orange-100 shadow-lg",
            icon: "bg-orange-600 rounded-full p-3",
            text: {
              title: "text-orange-700",
              container: "gap-y-1",
              description: "text-orange-900 text-3xl",
              extra: "text-orange-600",
            },
          }}
        />
      </div>

      <Tabs headers={["Lista de Clientes"]} className="mt-6">
        <ListarClientes data={clientes} />
      </Tabs>
    </div>
  );
}
