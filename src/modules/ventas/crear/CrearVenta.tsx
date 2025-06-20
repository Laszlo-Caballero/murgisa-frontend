"use client";

import React from "react";
import { LuDollarSign, LuPlus, LuShoppingCart, LuUsers } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import StepFormProvider from "@/components/context/step-form/StepFormContext";
import HeaderStep from "@/components/ui/header-step/HeaderStep";
import ContainerStep from "@/components/ui/container-step/ContainerStep";
import ButtonsStep from "@/components/ui/buttons-steps/ButtonsStep";
import { LuFileText } from "react-icons/lu";
import Select from "@/components/ui/select/Select";
import Input from "@/components/ui/input/Input";
import Button from "@/components/ui/button/Button";
import { LuBox } from "react-icons/lu";
import Table from "@/components/ui/table/Table";
import { RxCrossCircled } from "react-icons/rx";
import { LuUserCheck } from "react-icons/lu";
import Badge from "@/components/ui/badge/Badge";
import { LuCircleCheckBig } from "react-icons/lu";
import Card from "@/components/ui/card/Card";
interface CrearVentaProps {
  onClose?: () => void;
}

export default function CrearVenta({ onClose }: CrearVentaProps) {
  return (
    <div className="w-[calc(100vw-3rem)] md:max-h-min max-h-[calc(100vh-4rem)] md:w-[700px] lg:w-[1000px] rounded-lg bg-white p-8 flex flex-col gap-y-4 dark:bg-gray-800 dark:border dark:border-gray-600">
      <header className="flex pb-4 justify-between border-b border-gray-200 dark:border-gray-600">
        <div className="flex items-center gap-x-3">
          <div className="p-2 bg-green-100 rounded-lg dark:bg-green-500/30">
            <LuPlus className="size-6 text-green-600 dark:text-green-400" />
          </div>
          <div>
            <p className="font-bold text-xl dark:text-gray-200">Realizar Nueva Venta</p>
            <p className="text-sm text-gray-500 font-normal dark:text-gray-400">
              Complete la información paso a paso
            </p>
          </div>
        </div>
        <div className="h-full cursor-pointer" onClick={onClose}>
          <IoClose className="dark:text-white"/>
        </div>
      </header>
      <StepFormProvider className="flex flex-col items-center justify-center overflow-y-auto w-full gap-y-4 dark:text-gray-300">
        <HeaderStep
          steps={[
            "Información",
            "Cliente",
            "Servicios",
            "Personal",
            "Confirmación",
          ]}
        />
        <ContainerStep className="w-full border border-gray-200 rounded-lg p-4 overflow-y-auto h-full dark:border-gray-600">
          <div className="flex flex-col">
            <div className="flex items-center gap-x-2">
              <LuFileText className="size-6 text-blue-500 dark:text-blue-400" />
              <p className="font-bold text-xl">
                Informacion Basica de la venta
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <Select
                label="Tipo de Servicio:"
                placeholder="Seleccione un tipo de servicio"
              />

              <Input
                label="Fecha de la Venta"
                type="date"
                placeholder="Seleccione la fecha de la venta"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-x-2">
              <LuUsers className="size-6 text-blue-500 dark:text-blue-400" />
              <p className="font-bold text-xl">Informacion del cliente</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="md:col-span-2 flex items-end gap-x-2">
                <Input
                  label="Buscar Cliente:"
                  placeholder="Ingrese el nombre o razon social del cliente"
                  classNameContainer="w-full"
                />
                <Button className="py-3 dark:bg-blue-500/30">Buscar</Button>
              </div>
              <Input
                label="RUC/C.I:"
                placeholder="Ingrese el RUC o C.I. del cliente"
              />
              <Input
                label="Nombre/Razon Social:"
                placeholder="Ingrese el nombre o razon social del cliente"
              />
              <Input
                label="Telefono:"
                placeholder="Ingrese el telefono del cliente"
              />
              <Input
                label="Email:"
                placeholder="Ingrese el email del cliente"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-x-2">
              <LuBox className="size-6 text-green-500" />
              <p className="font-bold text-xl">Servicios a Contratar</p>
            </div>
            <div className="flex flex-col gap-4 mt-4">
              <Select
                label="Servicio:"
                placeholder="Seleccione un tipo de servicio"
              />
              <Table
                data={[
                  {
                    name: "Servicio 1",
                    fechaInicio: "2023-10-01",
                    fechaFin: "2023-10-31",
                    Precio: "$100",
                  },
                ]}
                columns={[
                  {
                    header: "Servicio",
                    cell: (props) => <span>{props.row.name}</span>,
                  },
                  {
                    header: "Fecha Inicio",
                    cell: (props) => <span>{props.row.fechaInicio}</span>,
                  },
                  {
                    header: "Fecha Fin",
                    cell: (props) => <span>{props.row.fechaFin}</span>,
                  },
                  {
                    header: "Precio",
                    cell: (props) => (
                      <span className="text-green-500 font-bold">
                        {props.row.Precio}
                      </span>
                    ),
                  },
                  {
                    header: " ",
                    cell: () => (
                      <div className="w-full flex">
                        <span className="p-2 rounded-lg border">
                          <RxCrossCircled />
                        </span>
                      </div>
                    ),
                  },
                ]}
              />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-x-2">
              <LuUserCheck className="size-6 text-purple-500 dark:text-purple-400" />
              <p className="font-bold text-xl">Asignación de Personal</p>
            </div>
            <div className="flex flex-col gap-4 mt-4">
              <Select
                label="Seleccionar Personal:"
                placeholder="Seleccione el personal a asignar"
              />
              <Table
                data={[
                  {
                    name: "Personal 1",
                    profesion: "Tecnico",
                    fechaInicio: "2023-10-01",
                    salario: "$100",
                  },
                ]}
                columns={[
                  {
                    header: "Servicio",
                    cell: (props) => (
                      <span className="flex items-center gap-x-2">
                        <LuUserCheck className="size-6 text-purple-500 dark:text-purple-400" />
                        {props.row.name}
                      </span>
                    ),
                  },
                  {
                    header: "Profesión",
                    cell: (props) => <Badge className="dark:border-gray-500">{props.row.profesion}</Badge>,
                  },
                  {
                    header: "Fecha Inicio",
                    cell: (props) => <span>{props.row.fechaInicio}</span>,
                  },
                  {
                    header: "Salario",
                    cell: (props) => (
                      <span className="text-purple-500 font-bold dark:text-purple-400">
                        {props.row.salario}
                      </span>
                    ),
                  },
                  {
                    header: " ",
                    cell: () => (
                      <div className="w-full flex">
                        <span className="p-2 rounded-lg border">
                          <RxCrossCircled />
                        </span>
                      </div>
                    ),
                  },
                ]}
              />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-x-2">
              <LuCircleCheckBig className="size-6 text-blue-500" />
              <p className="font-bold text-xl">Confirmacion de Venta</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4 mt-4 border-b pb-5 border-gray-200">
              <div>
                <p>Informacion del Cliente</p>
                <p>
                  <span className="font-bold">Cliente</span>: Juan Perez
                </p>
                <p>
                  <span className="font-bold">RUC</span>: 1234567890
                </p>
                <p>
                  <span className="font-bold">Telefono</span>: 0987654321
                </p>
              </div>
              <div>
                <p>Detalles de la Venta</p>
                <p>
                  <span className="font-bold">Servicios</span>: Servicio 1,
                  Servicio 2
                </p>
                <p>
                  <span className="font-bold">Personal</span>: 1 empleado
                </p>
                <p>
                  <span className="font-bold">Estado</span>:{" "}
                  <Badge className="bg-amber-100 text-amber-600 font-bold border-none dark:bg-amber-500/20 dark:text-amber-500">
                    Pendiente
                  </Badge>
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-4 mt-4">
              <Card
                title="Servicios"
                icon={<LuShoppingCart size={28} className="text-white" />}
                description={"S/. 1000"}
                className={{
                  container: "bg-blue-100 shadow-lg dark:bg-gray-800 dark:border dark:border-gray-700 dark:hover:shadow-blue-400/10 dark:transition-all",
                  icon: "bg-blue-600 rounded-full p-3 dark:bg-blue-500/30",
                  text: {
                  title: "text-blue-700 dark:text-blue-400",
                  description: "text-blue-900 text-3xl dark:text-blue-400",
                  extra: "text-blue-600 dark:text-blue-400",
                  },
                }}
              />
              <Card
                title="Total Personal"
                icon={<LuUsers size={28} className="text-white" />}
                description={"S/. 1800"}
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
                title="Ventas Completadas"
                icon={<LuDollarSign size={28} className="text-white" />}
                description={"S/. 2800"}
                className={{
                  container: "bg-green-100 shadow-lg dark:bg-gray-800 dark:border dark:border-gray-700 dark:hover:shadow-green-400/10 dark:transition-all",
                  icon: "bg-green-600 rounded-full p-3 dark:bg-green-500/30",
                  text: {
                    title: "text-green-700 dark:text-green-400",
                    description: "text-green-900 text-3xl dark:text-green-400",
                    extra: "text-green-600 dark:text-green-400",
                  },
                }}
              />
            </div>
          </div>
        </ContainerStep>
        <ButtonsStep maxSteps={5} />
      </StepFormProvider>
    </div>
  );
}
