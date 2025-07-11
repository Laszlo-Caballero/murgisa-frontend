"use client";
import Button from "@/components/ui/button/Button";
import Modal from "@/components/ui/modal/Modal";
import Table from "@/components/ui/single-table/SingleTable";
import { Servicio } from "@/interfaces/responsefinal.interface";
import React, { useState } from "react";
import { LuBox } from "react-icons/lu";

interface ServicioProps {
  servicios: Servicio[];
}

export default function Servicios({ servicios }: ServicioProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Ver Servicios</Button>
      {isOpen && (
        <Modal onClose={() => setIsOpen(false)}>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg flex flex-col gap-y-4">
            <div className="flex items-center gap-x-2">
              <LuBox className="size-6 text-green-500" />
              <p className="font-bold text-xl text-black dark:text-white">
                Servicios Contratados
              </p>
            </div>
            <Table
              data={servicios}
              columns={[
                {
                  header: "Servicio",
                  cell: (props) => (
                    <span className="text-black dark:text-white">
                      {props.row?.nombre}
                    </span>
                  ),
                },
                {
                  header: "Duración",
                  cell: (props) => (
                    <span className="text-black dark:text-white">
                      {props.row?.duracion}
                    </span>
                  ),
                },
                {
                  header: "Precio",
                  cell: (props) => (
                    <span className="text-green-500 font-bold">
                      {props.row?.precio}
                    </span>
                  ),
                },
              ]}
            />
          </div>
        </Modal>
      )}
    </>
  );
}
