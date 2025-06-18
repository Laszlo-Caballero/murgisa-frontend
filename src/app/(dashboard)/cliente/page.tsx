"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Button from "@/components/ui/button/Button";
import { LuUsers, LuBuilding } from "react-icons/lu";
import { FiPlus } from "react-icons/fi";
import Card from "@/components/ui/card/Card";
import Tabs from "@/components/ui/tabs/Tabs";
import ListarClientes from "@/modules/clientes/Listar/Listar";
import { Cliente } from "@/interfaces/response.interface";
import { env } from "@/config/env";
import Modal from "@/components/ui/modal/Modal";
import { clienteData } from "@/data/cliente";
import { IoPersonCircleOutline } from "react-icons/io5";
import { MdOutlinePersonOutline } from "react-icons/md";
import { FaAddressCard } from "react-icons/fa";
import { CiMail, CiPhone, CiCirclePlus } from "react-icons/ci";
import { LuMapPinHouse } from "react-icons/lu";
import CrearCliente from "@/modules/clientes/crear/CrearClientes";

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
    <div className="w-full h-full p-9 bg-gray-50 flex flex-col">
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CrearCliente/>
        </Modal>
      )}

      <header className="flex items-center justify-between">
        <div className="flex items-center gap-x-4">
          <span className="bg-blue-600 p-3 rounded-lg">
            <LuUsers size={40} className="text-white" />
          </span>
          <div className="flex flex-col">
            <p className="font-bold text-3xl">Gestión de Clientes</p>
            <p className="text-sm">
              Administra la información de tus clientes y sus ventas
            </p>
          </div>
        </div>

        <Button
          className="flex items-center gap-x-3 py-3 font-semibold hover:bg-blue-500"
          onClick={() => setShowModal(true)}
        >
          <FiPlus size={15} />
          Nuevo Cliente
        </Button>
      </header>

      <div className="grid grid-cols-4 items-center mt-6 gap-x-4">
        <Card
          title="Total Clientes"
          icon={<LuUsers size={28} className="text-white" />}
          description={"11"}
          extra="Registrados en el sistema"
          className = {{ 
            container: "bg-blue-50 shadow-lg" , 
            icon: "bg-blue-600 rounded-full p-3", 
            text:{title:"text-blue-700" ,
            description:"text-blue-900 text-3xl" ,
            extra: "text-blue-600"} }}
        />
        <Card
          title="Clientes Activos"
          icon={<LuBuilding size={28} className="text-white" />}
          description={"10"}
          extra="Disponibles para realizar ventas"
          className = {{ 
            container: "bg-purple-50 shadow-lg" , 
            icon: "bg-purple-600 rounded-full p-3", 
            text:{title:"text-purple-700" ,
            description:"text-purple-900 text-3xl" ,
            extra: "text-purple-600"} }}
        />
      </div>

      <Tabs
        headers={["Lista de Clientes"]}
        className="mt-6"
      >
        <ListarClientes data={clientes} />
      </Tabs>
    </div>
  );
}
