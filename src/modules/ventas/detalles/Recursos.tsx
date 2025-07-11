"use client";
import Badge from "@/components/ui/badge/Badge";
import Button from "@/components/ui/button/Button";
import Modal from "@/components/ui/modal/Modal";
import Table from "@/components/ui/single-table/SingleTable";
import { Recurso } from "@/interfaces/responsefinal.interface";
import React, { useState } from "react";
import { LuWrench } from "react-icons/lu";

interface RecursoProps {
  recursosData: Recurso[];
}

export default function Recursos({ recursosData }: RecursoProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Ver Recursos</Button>
      {isOpen && (
        <Modal onClose={() => setIsOpen(false)}>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg flex flex-col gap-y-4">
            <div className="flex items-center gap-x-2">
              <LuWrench className="size-6 text-purple-500 dark:text-purple-400" />
              <p className="font-bold text-xl text-black dark:text-white">
                Asignación de Recursos
              </p>
            </div>
            <Table
              data={recursosData || []}
              columns={[
                {
                  header: "Nombre",
                  cell: (props) => (
                    <span className="flex items-center gap-x-2 text-black dark:text-white">
                      <LuWrench className="size-6 text-purple-500 dark:text-purple-400" />
                      {props.row?.nombre}
                    </span>
                  ),
                },
                {
                  header: "Tipo de Recurso",
                  cell: (props) => (
                    <Badge className="dark:border-gray-500">
                      {props.row?.tipoRecurso?.nombre}
                    </Badge>
                  ),
                },
                {
                  header: "Precio",
                  cell: (props) => (
                    <span className="text-purple-500 font-bold dark:text-purple-400">
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
