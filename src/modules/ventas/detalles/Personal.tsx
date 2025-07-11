"use client";
import Badge from "@/components/ui/badge/Badge";
import Button from "@/components/ui/button/Button";
import Modal from "@/components/ui/modal/Modal";
import Table from "@/components/ui/single-table/SingleTable";
import { Personal, Recurso } from "@/interfaces/responsefinal.interface";
import React, { useState } from "react";
import { LuUserCheck, LuWrench } from "react-icons/lu";

interface PersonalProps {
  personal: Personal[];
}

export default function PersonalModal({ personal }: PersonalProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Ver Personal</Button>
      {isOpen && (
        <Modal onClose={() => setIsOpen(false)}>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg flex flex-col gap-y-4">
            <div className="flex items-center gap-x-2">
              <LuUserCheck className="size-6 text-purple-500 dark:text-purple-400" />
              <p className="font-bold text-xl text-black dark:text-white">
                Asignación de Personal
              </p>
            </div>
            <Table
              data={personal || []}
              columns={[
                {
                  header: "Nombre",
                  cell: (props) => (
                    <span className="flex items-center gap-x-2 text-black dark:text-white">
                      <LuUserCheck className="size-6 text-purple-500 dark:text-purple-400" />
                      {props.row?.nombre}
                    </span>
                  ),
                },
                {
                  header: "Profesión",
                  cell: (props) => (
                    <Badge className="dark:border-gray-500">
                      {props.row?.profesion?.titulo}
                    </Badge>
                  ),
                },
                {
                  header: "Salario",
                  cell: (props) => (
                    <span className="text-purple-500 font-bold dark:text-purple-400">
                      {props.row?.sueldo}
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
