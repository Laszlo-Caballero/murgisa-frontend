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

import { IoPersonCircleOutline } from "react-icons/io5";
import { MdOutlinePersonOutline } from "react-icons/md";
import { FaAddressCard } from "react-icons/fa";
import { CiMail, CiPhone } from "react-icons/ci";
import { LuMapPinHouse } from "react-icons/lu";

export default function ClientesPage() {
  const [showModal, setShowModal] = useState(false);
  const [clientes, setClientes] = useState<Cliente[]>([]);

  useEffect(() => {
    axios.get(`${env.url_api}/cliente`).then((res) => {
      if (res.status === 200) {
        setClientes(res.data);
      }
    });
  }, []);

  return (
    <div className="w-full p-8 flex flex-col">
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <div className="w-full max-w-3xl bg-white p-6 rounded-xl shadow-lg flex flex-col gap-6">
            <header className="flex items-center gap-x-4">
              <span className="bg-blue-600 p-3 rounded-xl">
                <IoPersonCircleOutline size={40} className="text-white" />
              </span>
              <div className="flex flex-col">
                <p className="font-bold text-3xl">Agregar Nuevo Cliente</p>
                <p className="text-sm mt-1 text-gray-600">
                  Completa los datos para registrar un nuevo cliente en el sistema
                </p>
              </div>
            </header>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">Nombre</label>
                  <div className="relative">
                    <MdOutlinePersonOutline className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Ej: Juan Pérez"
                      className="w-full pl-10 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">Correo</label>
                  <div className="relative">
                    <CiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="email"
                      placeholder="Ej: correo@ejemplo.com"
                      className="w-full pl-10 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">Dirección</label>
                  <div className="relative">
                    <LuMapPinHouse className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Ej: Av. Principal 123"
                      className="w-full pl-10 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">DNI</label>
                  <div className="relative">
                    <FaAddressCard className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Ej: 74185296"
                      className="w-full pl-10 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">Teléfono</label>
                  <div className="relative">
                    <CiPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Ej: 987654321"
                      className="w-full pl-10 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">Ciudad</label>
                  <select className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="">Seleccione una ciudad</option>
                  </select>
                </div>
              </div>
            </form>

            <div className="flex justify-end">
              <Button className="bg-blue-600 text-white font-semibold px-6 py-2 rounded hover:bg-blue-700 transition">
                Registrar Cliente
              </Button>
            </div>
          </div>
        </Modal>
      )}

      <header className="flex items-center justify-between">
        <div className="flex items-center gap-x-4">
          <span className="bg-blue-100 p-3 rounded-full">
            <LuUsers size={24} className="text-blue-600" />
          </span>
          <div className="flex flex-col">
            <p className="font-bold text-3xl">Gestión de Clientes</p>
            <p className="text-sm">
              Administra la información de tus clientes y sus ventas
            </p>
          </div>
        </div>

        <Button
          className="flex items-center gap-x-3 py-3 font-semibold"
          onClick={() => setShowModal(true)}
        >
          <FiPlus size={15} />
          Nuevo Cliente
        </Button>
      </header>

      <div className="grid grid-cols-4 items-center mt-6 gap-x-4">
        <Card
          title="Total Clientes"
          icon={<LuUsers size={35} className="text-blue-600" />}
          description={clientes.length.toString()}
        />
        <Card
          title="Clientes Activos"
          icon={<LuBuilding size={35} className="text-green-600" />}
          description={clientes.length.toString()}
        />
      </div>

      <Tabs
        headers={["Lista de Clientes", "Historial de Ventas", "Buscar Cliente"]}
        className="mt-6"
      >
        <ListarClientes data={clientes} />
        <div>2</div>
        <div>3</div>
      </Tabs>
    </div>
  );
}
